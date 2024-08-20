from fastapi import APIRouter, HTTPException

from api.requests.applications_create import ApplicationCreate
from database.models.applitations import Applications
from database.sqlite import SessionLocal
from datetime import datetime
router = APIRouter()


@router.post("/submit_order")
def submit_order(application_request: ApplicationCreate):
    print(application_request.__dict__)
    application = Applications(
        product_id=application_request.product_id,
        user_firstname=application_request.user_firstname,
        user_surname=application_request.user_surname,
        address=application_request.address,
        phone=application_request.phone,
        email=application_request.email,
        additional_information=application_request.additional_information,
        datatime=datetime.now()
    )
    try:
        with SessionLocal() as db:
            db.add(application)
            db.commit()
            db.refresh(application)
        return {"message": "Hello, World"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка при отправке формы: {str(e)}")
