from fastapi import APIRouter
from .analytics import result, get_ages, get_cities, students_n_score_plus, submission_of_documents, data2_table, data_table, get_schools, mean_points_ege, direction_priority, portrait_of_student, convert_DataFrame
import json

router = APIRouter(
    prefix="/analytics",
    tags=["analytics"]
)

@router.post("/")
def portrait_users():
    students_portrait = portrait_of_student(data2_table)
    return students_portrait

# сделать фильтры раздельными(опциональными)
@router.post("/filter")
def filter(score, way):
    students_result = students_n_score_plus(data2_table, int(score))
    students_result2 = submission_of_documents(data2_table, way)
    students_result = convert_DataFrame(students_result)
    students_result2 = convert_DataFrame(students_result2)
    result = {"points": students_result, "way": students_result2}
    return students_result

@router.get("/search_data")
def search():
    stud_age = get_ages(data2_table)
    stud_cities = get_cities(data2_table)
    stud_school = get_schools(data_table)
    stud_ege = mean_points_ege(data2_table)
    stud_prior = direction_priority(data2_table)
    result = {"age": stud_age, "city": stud_cities, "school": stud_school, "ege": stud_ege, "priotity": stud_prior}
    return result