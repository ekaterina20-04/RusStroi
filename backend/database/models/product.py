from ..sqlite import Base
from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime
from datetime import datetime


class Product(Base):
    __tablename__ = 'product'
    id = Column(Integer, primary_key=True, autoincrement=True)
    product_name = Column(String, nullable=False)
    price = Column(Float, nullable=True)
    description = Column(String)
    datetime = Column(DateTime, default=datetime.utcnow(), nullable=True)