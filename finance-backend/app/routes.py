from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .database import SessionLocal
from . import models, schemas

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
    
@router.post("/transactions", response_model=schemas.Transaction)
def create_transaction(transaction: schemas.TransactionCreate, db: Session=Depends(get_db)):
    db_transaction = models.Transaction(**transaction.dict())
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction

@router.get("/transactions", response_model=list[schemas.Transaction])
def read_transactions(db:Session = Depends(get_db)):
    return db.query(models.Transaction).all()