from fastapi import APIRouter, HTTPException

from api.requests.product_delete import ProductDelete
from database.models.product import Product
from database.sqlite import SessionLocal

router = APIRouter()


@router.delete("/delete_product")
def delete_product(product_reponses: ProductDelete):
    try:
        with SessionLocal() as db:
            product = db.query(Product).filter(Product.id == product_reponses.id).first()
            if product:
                db.delete(product)
                db.commit()
                return {"message": "delete successful"}
            else:
                raise HTTPException(status_code=404, detail="Товар не найден")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка при отправке формы: {str(e)}")


