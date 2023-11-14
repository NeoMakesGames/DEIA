from fastapi import FastAPI, HTTPException
from readModel import ModeloIA, InputData
from tensorflow.keras.models import load_model
import numpy as np
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.post("/predict")
async def root(data: InputData):
    ruta_modelo_hdf5 = "modelo_no-o2.h5"
    model = ModeloIA(ruta_modelo_hdf5)
    try:
        input_features = np.array([[data.FEV1Value, data.FEV1Pred, data.FVCValue, data.FVCPred]])
        result = model.predecir(input_features)
        #threshold = 0.5
        #result = 1 if result > threshold else 0
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
