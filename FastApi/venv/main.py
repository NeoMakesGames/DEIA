from fastapi import FastAPI, HTTPException
from readModel import ModeloIA, InputData
from tensorflow.keras.models import load_model
import numpy as np
from pydantic import BaseModel
app = FastAPI()

print("ok")



@app.post("/predict")
async def root(data: InputData):
    print("yujuuuuu")
    ruta_modelo_hdf5 = "modelo_no-o.h5"
    model = ModeloIA(ruta_modelo_hdf5)
    # if not data.FEV1Value or not data.FEV1Pred or not data.FVCValue or not data.FVCPred:
    #     raise HTTPException(status_code=422, detail = "No se completaron todos los datos.")
    try:
        input_features = np.array([[data.FEV1Value, data.FEV1Pred, data.FVCValue, data.FVCPred]])
        
        result = model.predecir(input_features).tolist()
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
