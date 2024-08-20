from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.endpoints import admin_panel, submit_order, create_product, get_products, delete_product, delete_applications

app = FastAPI()

# Allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(admin_panel.router)
app.include_router(submit_order.router)
app.include_router(create_product.router)
app.include_router(get_products.router)
app.include_router(delete_product.router)
app.include_router(delete_applications.router)