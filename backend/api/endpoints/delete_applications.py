from fastapi import APIRouter, HTTPException

from api.requests.applications_delete import ApplicationsDelete
from database.models.applitations import Applications
from database.sqlite import SessionLocal

router = APIRouter()


@router.delete("/delete_applications")
def delete_product(applications_reponses: ApplicationsDelete):
    try:
        with SessionLocal() as db:
            applications = db.query(Applications).filter(Applications.id == applications_reponses.id).first()
            if applications:
                db.delete(applications)
                db.commit()
                return {"message": "delete successful"}
            else:
                raise HTTPException(status_code=404, detail="Товар не найден")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка при отправке формы: {str(e)}")


