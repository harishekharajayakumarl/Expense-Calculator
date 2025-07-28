from pydantic import BaseModel
from datetime import datetime

class TransactionCreate(BaseModel):
    title: str
    amount: float
    category: str

class Transaction(TransactionCreate):
    id: int
    date: datetime

class Config:
    orm_mode = True