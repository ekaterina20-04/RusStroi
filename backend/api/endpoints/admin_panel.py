from typing import List

from fastapi import APIRouter

from api.requests.applications_get import ApplicationGet
from database.models.applitations import Applications
from database.sqlite import SessionLocal

router = APIRouter()


@router.get("/admin_applications", response_model=List[ApplicationGet])
def admin_applications():
    with SessionLocal() as db:
        applications = db.query(Applications).all()
    return [ApplicationGet.from_db(application) for application in applications]