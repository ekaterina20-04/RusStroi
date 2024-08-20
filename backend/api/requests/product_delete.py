from pydantic import BaseModel, Field


class ProductDelete(BaseModel):
    id: int

