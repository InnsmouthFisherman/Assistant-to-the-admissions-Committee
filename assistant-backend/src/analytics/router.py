from fastapi import APIRouter
from .analytics import *

router = APIRouter(
    prefix="/analytics",
    tags=["analytics"]
)


@router.get("/test")
def get_analysis():
    return result()


@router.get("/highpoints")
def get_high_points():
    return students_85_plus()
