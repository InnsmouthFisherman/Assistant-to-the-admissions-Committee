from fastapi import APIRouter
from .analytics import result, students_85_plus

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


@router.post("/")
def post_obrabotka(score, olympiads, direction, university):
    pass

