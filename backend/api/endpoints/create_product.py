from fastapi import APIRouter, HTTPException

from api.requests.product_create import ProductCreate
from database.models.product import Product
from database.sqlite import SessionLocal

router = APIRouter()


@router.post("/create_product")
def create_product(product_request: ProductCreate):
    product = Product(
        product_name=product_request.product_name,
        price=product_request.price,
        description=product_request.description
    )
    try:
        with SessionLocal() as db:
            db.add(product)
            db.commit()
            db.refresh(product)
        return {"message": "Hello, World"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка при отправке формы: {str(e)}")
