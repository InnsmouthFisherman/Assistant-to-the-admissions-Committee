from fastapi import APIRouter
from .analytics import result, get_ages, get_cities, students_n_score_plus, submission_of_documents

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
def analytics(score=False, way=False, age=False, city=False):
    parametrs = {}
    if score:
        parametrs['score'] = students_n_score_plus(score)
    if way:
        parametrs['way'] = submission_of_documents(way)
    if age:
        parametrs['age'] = get_ages()
    if city:
        parametrs['city'] = get_cities()
    return parametrs

