from typing import Optional
from fastapi import APIRouter, Body
from pydantic import BaseModel
from .analytics import get_ages, get_cities, students_n_score_plus, submission_of_documents, data2_table, data_table, \
    get_schools, mean_points_ege, direction_priority, portrait_of_student, convert_DataFrame
import json

router = APIRouter(
    prefix="/analytics",
    tags=["analytics"]
)


class Filter(BaseModel):
    score: int = Body(80, example=80)
    way: str = Body("Лично", example="Лично")


'''
class Portrait(BaseModel):
    name: Optional[str] = None
    last_name: Optional[str] = None
    patronymic: Optional[str] = None
    sex: Optional[str] = None
    birthday: Optional[str] = None
    type_of_id_card: Optional[str] = None
    series_of_id_card: Optional[str] = None
    number_of_id_card: Optional[str] = None
    date_of_receive_id_card: Optional[str] = None
    who_issued_id_card: Optional[str] = None
    inn: Optional[str] = None
    snils: Optional[str] = None
    country_of_birth: Optional[str] = None
    the_inclusion_of_photo: Optional[str] = None
    benefits: Optional[str] = None
    need_for_a_hostel: Optional[str] = None
    benefits_for_settlement: Optional[str] = None
    foreign_language: Optional[str] = None
    sport: Optional[str] = None
    immediate_family: Optional[str] = None
    academic_degree: Optional[str] = None
    academic_title: Optional[str] = None
    work_phone: Optional[str] = None
    contact_phone: Optional[str] = None
    home_phone: Optional[str] = None
    mobile_phone: Optional[str] = None
    email: Optional[str] = None
    registration_address: Optional[str] = None
    the_code_of_the_locality: Optional[str] = None
    the_actual_address: Optional[str] = None
    admission_campaign: Optional[str] = None
    personal_number: Optional[str] = None
    general_condition: Optional[str] = None
    the_form_of_exams: Optional[str] = None
    special_conditions_for_exams: Optional[str] = None
    military_service: Optional[str] = None
    additional_status: Optional[str] = None
    application_number: Optional[str] = None
    filing_date: Optional[str] = None
    type_of_application: Optional[str] = None
    education_received: Optional[str] = None
    completed_educational_institution: Optional[str] = None
    the_document_of_the_received_education: Optional[str] = None
    the_form_of_obtaining_a_document_on_education: Optional[str] = None
    the_average_score_of_the_education_certificate: Optional[str] = None
    arrived_from_lpr_dpr_kherson_region_ukraine: Optional[str] = None
    post_528: Optional[str] = None
    pr_231: Optional[str] = None
    pr_245: Optional[str] = None
    type_of_cost_recovery: Optional[str] = None
    the_form_of_education: Optional[str] = None
    type_of_reception: Optional[str] = None
    additional_set: Optional[str] = None
    priority: Optional[str] = None
    end_to_end_priority: Optional[str] = None
    branch: Optional[str] = None
    the_forming_unit: Optional[str] = None
    the_direction_of_education: Optional[str] = None
    set_op: Optional[str] = None
    selected_op: Optional[str] = None
    cp: Optional[str] = None
    a_set_of_versions_op_for_cp: Optional[str] = None
    type_of_cp: Optional[str] = None
    organization_of_cp: Optional[str] = None
    without_vi: Optional[str] = None
    a_separate_quota: Optional[str] = None
    special_quota: Optional[str] = None
    enrolls_in_parallel_education: Optional[str] = None
    status_of_the_selected_contest: Optional[str] = None
    submitted_original: Optional[str] = None
    consent_to_transfer: Optional[str] = None
    date_of_consent: Optional[str] = None
    final_agreement: Optional[str] = None
    exam_group: Optional[str] = None
    the_amount_of_points: Optional[str] = None
    the_results_of_the_introduction_tests: Optional[str] = None
    russian_language: Optional[str] = None
    social_studies: Optional[str] = None
    composition: Optional[str] = None
    drawing: Optional[str] = None
    math: Optional[str] = None
    history_vo: Optional[str] = None
    mathematics_vo: Optional[str] = None
    physics_vo: Optional[str] = None
    computer_science_vo: Optional[str] = None
    social_studies_vo: Optional[str] = None
    chemistry_vo: Optional[str] = None
    the_russian_language_vo: Optional[str] = None
    computer_science_and_information_and_communication_technologies: Optional[str] = None
    theoretical_and_applied_mathematics: Optional[str] = None
    engineering_chemistry: Optional[str] = None
    fundamentals_of_social_studies_and_social_communication: Optional[str] = None
    engineering_physics: Optional[str] = None
    world_and_domestic_history: Optional[str] = None
    computer_science_and_the_basics_of_programming: Optional[str] = None
    mathematics_and_the_beginnings_of_mathematical_analysis: Optional[str] = None
    color_composition: Optional[str] = None
    physics: Optional[str] = None
    chemistry: Optional[str] = None
    history: Optional[str] = None
    a_note_on_the_direction_or_speciality: Optional[str] = None
    accepted_the_application: Optional[str] = None
    note_to_the_statement: Optional[str] = None
    the_application_was_submitted_by_a_trusted_person: Optional[str] = None
    the_method_of_submitting_documents: Optional[str] = None
    document_return_method: Optional[str] = None
    olympiads: Optional[str] = None
    use_results: Optional[str] = None
    the_status_of_the_exam_results: Optional[str] = None
    points_for_individual_achievements: Optional[str] = None
    the_amount_of_points_for_individual_achievements: Optional[str] = None
    points_for_individual_achievements_counted_as_an_advantage: Optional[str] = None
    the_amount_of_points_for_individual_achievements_counted_as_an_advantage: Optional[str] = None
    the_customer_organization: Optional[str] = None
    targeted_contract_training: Optional[str] = None
    the_contract_has_been_concluded: Optional[str] = None
    the_contract_has_been_paid: Optional[str] = None
    the_order_of_enrollment: Optional[str] = None
    average_exam_score: Optional[str] = None
'''


class Portrait(BaseModel):
    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "name": "string",
                    "last_name": "string",
                    "patronymic": "string",
                    "sex": "string",
                    "birthday": "string",
                    "type_of_id_card": "string",
                    "series_of_id_card": "string",
                    "number_of_id_card": "string",
                    "date_of_receive_id_card": "string",
                    "who_issued_id_card": "string",
                    "inn": "string",
                    "snils": "string",
                    "country_of_birth": "string",
                    "the_inclusion_of_photo": "string",
                    "benefits": "string",
                    "need_for_a_hostel": "string",
                    "benefits_for_settlement": "string",
                    "foreign_language": "string",
                    "sport": "string",
                    "immediate_family": "string",
                    "academic_degree": "string",
                    "academic_title": "string",
                    "work_phone": "string",
                    "contact_phone": "string",
                    "home_phone": "string",
                    "mobile_phone": "string",
                    "email": "string",
                    "registration_address": "string",
                    "the_code_of_the_locality": "string",
                    "the_actual_address": "string",
                    "admission_campaign": "string",
                    "personal_number": "string",
                    "general_condition": "string",
                    "the_form_of_exams": "string",
                    "special_conditions_for_exams": "string",
                    "military_service": "string",
                    "additional_status": "string",
                    "application_number": "string",
                    "filing_date": "string",
                    "type_of_application": "string",
                    "education_received": "string",
                    "completed_educational_institution": "string",
                    "the_document_of_the_received_education": "string",
                    "the_form_of_obtaining_a_document_on_education": "string",
                    "the_average_score_of_the_education_certificate": "string",
                    "arrived_from_lpr_dpr_kherson_region_ukraine": "string",
                    "post_528": "string",
                    "pr_231": "string",
                    "pr_245": "string",
                    "type_of_cost_recovery": "string",
                    "the_form_of_education": "string",
                    "type_of_reception": "string",
                    "additional_set": "string",
                    "priority": "string",
                    "end_to_end_priority": "string",
                    "branch": "string",
                    "the_forming_unit": "string",
                    "the_direction_of_education": "string",
                    "set_op": "string",
                    "selected_op": "string",
                    "cp": "string",
                    "a_set_of_versions_op_for_cp": "string",
                    "type_of_cp": "string",
                    "organization_of_cp": "string",
                    "without_vi": "string",
                    "a_separate_quota": "string",
                    "special_quota": "string",
                    "enrolls_in_parallel_education": "string",
                    "status_of_the_selected_contest": "string",
                    "submitted_original": "string",
                    "consent_to_transfer": "string",
                    "date_of_consent": "string",
                    "final_agreement": "string",
                    "exam_group": "string",
                    "the_amount_of_points": "string",
                    "the_results_of_the_introduction_tests": "string",
                    "russian_language": "string",
                    "social_studies": "string",
                    "composition": "string",
                    "drawing": "string",
                    "math": "string",
                    "history_vo": "string",
                    "mathematics_vo": "string",
                    "physics_vo": "string",
                    "computer_science_vo": "string",
                    "social_studies_vo": "string",
                    "chemistry_vo": "string",
                    "the_russian_language_vo": "string",
                    "computer_science_and_information_and_communication_technologies": "string",
                    "theoretical_and_applied_mathematics": "string",
                    "engineering_chemistry": "string",
                    "fundamentals_of_social_studies_and_social_communication": "string",
                    "engineering_physics": "string",
                    "world_and_domestic_history": "string",
                    "computer_science_and_the_basics_of_programming": "string",
                    "mathematics_and_the_beginnings_of_mathematical_analysis": "string",
                    "color_composition": "string",
                    "physics": "string",
                    "chemistry": "string",
                    "history": "string",
                    "a_note_on_the_direction_or_speciality": "string",
                    "accepted_the_application": "string",
                    "note_to_the_statement": "string",
                    "the_application_was_submitted_by_a_trusted_person": "string",
                    "the_method_of_submitting_documents": "string",
                    "document_return_method": "string",
                    "olympiads": "string",
                    "use_results": "string",
                    "the_status_of_the_exam_results": "string",
                    "points_for_individual_achievements": "string",
                    "the_amount_of_points_for_individual_achievements": "string",
                    "points_for_individual_achievements_counted_as_an_advantage": "string",
                    "the_amount_of_points_for_individual_achievements_counted_as_an_advantage": "string",
                    "the_customer_organization": "string",
                    "targeted_contract_training": "string",
                    "the_contract_has_been_concluded": "string",
                    "the_contract_has_been_paid": "string",
                    "the_order_of_enrollment": "string",
                    "average_exam_score": "string",
                }
            ]
        }
    }


@router.post("/portrait")
def portrait_users(portrait: Portrait):
    # kwargs = {}
    # for key, value in portrait.__dict__.items():
    #    kwargs[key] = value
    # students_portrait = portrait_of_student(data2_table, **kwargs)
    # return students_portrait
    # return portrait_of_student(data2_table, **portrait)
    pass


data = None


# сделать фильтры раздельными(опциональными)
@router.post("/filter")
def filter(filter: Filter):
    score = filter.score
    way = filter.way
    students_result = students_n_score_plus(data2_table, int(score))
    students_result2 = submission_of_documents(students_result, way)
    global data
    data = convert_DataFrame(students_result2)
    return {"vse zbs (navernoe)": "pizdui na get"}


@router.get("/filter_result")
def filter_result():
    global data
    return data


@router.get("/brief_analytics")
def search():
    stud_age = get_ages(data2_table)
    stud_cities = get_cities(data2_table)
    stud_school = get_schools(data_table)
    stud_ege = mean_points_ege(data2_table)
    stud_prior = direction_priority(data2_table)
    result = {"age": stud_age, "city": stud_cities, "school": stud_school, "ege": stud_ege, "priotity": stud_prior}
    return result



