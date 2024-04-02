from fastapi import APIRouter
from .analytics import result

router = APIRouter(
    prefix="/analytics",
    tags=["analytics"]
)

# сейчас у нас есть функции:
# для результатов егэ students_n_score_plus()
# формы подачи документов submission_of_documents()
# возрастов get_ages()
# городов и школ get_cities()
# необходимо чтобы функция принимала нужные параметры (которые могут быть необязательными) и возвращала данные всех
# функций, для которых указаны нужные параметры
@router.post("/")
def analytics(score, olympiads, direction, university):
    pass

