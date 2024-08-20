from pydantic import BaseModel


class ApplicationsDelete(BaseModel):
    id: int
