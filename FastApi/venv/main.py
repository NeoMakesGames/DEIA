from fastapi import FastAPI, HTTPException
from readModel import InputData
from tensorflow.keras.models import load_model
import numpy as np
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Setup CORS
origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

class Prediction(BaseModel):
    result: int

@app.post("/predict", response_model=Prediction)
async def predict(data: InputData):
    try:
        # Load the Keras model
        ruta_modelo_hdf5 = "modelo_no-o2.h5"
        model = load_model(ruta_modelo_hdf5)

        # Prepare input features
        input_features = np.array([[data.FEV1Value, data.FEV1Pred, data.FVCValue, data.FVCPred]])

        # Make prediction
        result = model.predict(input_features)

        # Assuming result is a probability, convert it to binary based on threshold
        threshold = 0.5
        result_binary = 1 if result > threshold else 0

        return {"result": result_binary}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
