from pydantic import BaseModel, Field


class ProductGet(BaseModel):
    id: int = Field(..., example=1, description="айди")
    product_name: str = Field(..., example="Асфальт", description="товар")
    price: float = Field(..., example=100, description="цена")
    description: str = Field(..., example="что то", description="описание")
