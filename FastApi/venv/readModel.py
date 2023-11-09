import pandas as pd
from tensorflow.keras.models import load_model
from pydantic import BaseModel

class ModeloIA:
    def __init__(self, ruta_modelo):
        self.modelo = self.cargar_modelo(ruta_modelo)

    def cargar_modelo(self, ruta_modelo):
        modelo = load_model(ruta_modelo)
        return modelo

    def predecir(self, datos):

        resultado = self.modelo.predict(datos)
        return resultado
    

class InputData(BaseModel):
    FEV1Value: float
    FEV1Pred: float
    FVCValue: float
    FVCPred: float