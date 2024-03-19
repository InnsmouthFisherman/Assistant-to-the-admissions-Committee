from fastapi import APIRouter
from .analytics import result

router = APIRouter(
    prefix="/analytics",
    tags=["analytics"]
)


@router.get("/test")
def get_analysis():
    return result()
