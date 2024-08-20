from pydantic import BaseModel, Field


class ProductCreate(BaseModel):
    product_name: str = Field(..., example="Асфальт", description="товар")
    price: float = Field(..., example=100, description="цена")
    description: str = Field(..., example="что то", description="описание")

