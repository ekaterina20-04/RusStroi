from fastapi import APIRouter, HTTPException

from api.responses.product_get import ProductGet
from database.models.product import Product
from database.sqlite import SessionLocal
from typing import List

router = APIRouter()


@router.get("/get_products", response_model=List[ProductGet])
def get_products():
    with SessionLocal() as db:
        products = db.query(Product).all()
    return [ProductGet(**product.__dict__) for product in products]


