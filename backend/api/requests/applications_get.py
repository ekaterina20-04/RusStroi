from pydantic import BaseModel, Field
from datetime import datetime
from typing import List


class ApplicationGet(BaseModel):
    id: int
    product_id: int
    user_firstname: str = Field(..., example="Катя", description="Имя")
    user_surname: str
    address: str
    phone: str
    email: str
    datatime: datetime | str
    additional_information: str = None

    @classmethod
    def from_db(cls, application):
        return cls(
            id=application.id,
            product_id=application.product_id,
            user_firstname=application.user_firstname,
            user_surname=application.user_surname,
            address=application.address,
            phone=application.phone,
            email=application.email,
            datatime=application.datatime.strftime('%d.%m.%Y %H:%M'),  # форматирование даты и времени
            additional_information=application.additional_information
        )