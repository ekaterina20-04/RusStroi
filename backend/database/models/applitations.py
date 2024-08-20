from ..sqlite import Base
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from datetime import datetime


class Applications(Base):
    __tablename__ = 'applications'
    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey('product.id'), nullable=False)
    user_firstname = Column(String(100), nullable=False)
    user_surname = Column(String(100), nullable=False)
    address = Column(String, nullable=False)
    phone = Column(String(12), nullable=False)
    email = Column(String(100), nullable=False)
    additional_information = Column(String, nullable=True)
    datatime = Column(DateTime)
