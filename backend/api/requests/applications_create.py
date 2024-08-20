from pydantic import BaseModel, Field


class ApplicationCreate(BaseModel):
    product_id: int = Field(..., example=1)                                                          #?????
    user_firstname: str = Field(..., example="Катя", description="Имя")
    user_surname: str = Field(..., example="Водопьянова", description="Фамилия")
    address: str = Field(..., example="Общага", description="Адрес")
    phone: str = Field(..., example="89999999999", description="Телефон")
    email: str = Field(..., example="example@mail.ru", description="Почта")
    additional_information: str = None