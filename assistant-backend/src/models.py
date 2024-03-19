from pydantic import BaseModel
from sqlalchemy import MetaData,Table, Integer, String, Column

metadata = MetaData()

# в будущем надо создать классы для полей таблиц, чтобы их можно было легко валидировать

users = Table(
    "applicant",
    metadata,
    Column("Name", String, nullable=False),
    Column("Last_name", String, nullable=False),
    Column("Patronymic", String, nullable=False),
    Column("Sex", String, nullable=False),
    Column("Birthday", String, nullable=False),
    Column("Type_of_ID_card", String, nullable=False),
    Column("Series_of_ID_card", String, nullable=False),
    Column("Number_of_ID_card", String, nullable=False),
    Column("Date_of_receive_ID_card", String, nullable=False),
    Column("Who_issued_ID_card", String, nullable=False),
    Column("Inn", String, nullable=False),
    Column("Snils", String, nullable=False),
    Column("Country_of_birth", String, nullable=False),
    Column("The_inclusion_of_photo", String, nullable=False),
    Column("Benefits", String, nullable=False),
    Column("Need_for_a_hostel", String, nullable=False),
    Column("Benefits_for_settlement", String, nullable=False),
    Column("Foreign_language", String, nullable=False),
    Column("Sport", String, nullable=False),
    Column("Immediate_family", String, nullable=False),
    Column("Academic_degree", String, nullable=False),
    Column("Academic_title", String, nullable=False),
    Column("Work_phone", String, nullable=False),
    Column("Contact_phone", String, nullable=False),
    Column("Home_phone", String, nullable=False),
    Column("Mobile_phone", String, nullable=False),
    Column("Email", String, nullable=False),
    Column("Registration_address", String, nullable=False),
    Column("The_code_of_the_locality", String, nullable=False),
    Column("The_actual_address", String, nullable=False),
    Column("Admission_campaign", String, nullable=False),
    Column("Personal_number", String, nullable=False),
    Column("General_condition", String, nullable=False),
    Column("The_form_of_exams", String, nullable=False),
    Column("Special_conditions_for_exams", String, nullable=False),
    Column("Military_service", String, nullable=False),
    Column("Additional_status", String, nullable=False),
    Column("Application_number", String, nullable=False),
    Column("Filing_date", String, nullable=False),
    Column("Type_of_application", String, nullable=False),
    Column("Education_received", String, nullable=False),
    Column("Completed_educational_institution", String, nullable=False),
    Column("The_document_of_the_received_education", String, nullable=False),
    Column("The_form_of_obtaining_a_document_on_education", String, nullable=False),
    Column("The_average_score_of_the_education_certificate", String, nullable=False),
    Column("Arrived_from_LPR_DPR_Kherson_region_Ukraine", String, nullable=False),
    Column("Post_528", String, nullable=False),
    Column("Pr_231", String, nullable=False),
    Column("Pr_245", String, nullable=False),
    Column("Type_of_cost_recovery", String, nullable=False),
    Column("The_form_of_education", String, nullable=False),
    Column("Type_of_reception", String, nullable=False),
    Column("Additional_set", String, nullable=False),
    Column("Priority", String, nullable=False),
    Column("End_to_end_priority", String, nullable=False),
    Column("Branch", String, nullable=False),
    Column("The_forming_unit", String, nullable=False),
    Column("The_direction_of_education", String, nullable=False),
    Column("Set_OP", String, nullable=False),
    Column("Selected_OP", String, nullable=False),
    Column("CP", String, nullable=False),
    Column("A_set_of_versions_OP_for_CP", String, nullable=False),
    Column("Type_of_CP", String, nullable=False),
    Column("Organization_of_CP", String, nullable=False),
    Column("Without_VI", String, nullable=False),
    Column("A_separate_quota", String, nullable=False),
    Column("Special_quota", String, nullable=False),
    Column("Enrolls_in_parallel_education", String, nullable=False),
    Column("Status_of_the_selected_contest", String, nullable=False),
    Column("Submitted_original", String, nullable=False),
    Column("Consent_to_transfer", String, nullable=False),
    Column("Date_of_consent", String, nullable=False),
    Column("Final_agreement", String, nullable=False),
    Column("Exam_group", String, nullable=False),
    Column("The_amount_of_points", String, nullable=False),
    Column("The_results_of_the_introduction_tests", String, nullable=False),
    Column("Russian_language", String, nullable=False),
    Column("Social_Studies", String, nullable=False),
    Column("Composition", String, nullable=False),
    Column("Drawing", String, nullable=False),
    Column("Math", String, nullable=False),
    Column("History_VO", String, nullable=False),
    Column("Mathematics_VO", String, nullable=False),
    Column("Physics_VO", String, nullable=False),
    Column("Computer_Science_VO", String, nullable=False),
    Column("Social_studies_VO", String, nullable=False),
    Column("Chemistry_VO", String, nullable=False),
    Column("The_Russian_language_VO", String, nullable=False),
    Column("Computer_science_and_information_and_communication_technologies", String, nullable=False),
    Column("Theoretical_and_applied_mathematics", String, nullable=False),
    Column("Engineering_Chemistry", String, nullable=False),
    Column("Fundamentals_of_Social_Studies_and_social_communication", String, nullable=False),
    Column("Engineering_Physics", String, nullable=False),
    Column("World_and_domestic_history", String, nullable=False),
    Column("Computer_Science_and_the_basics_of_programming", String, nullable=False),
    Column("Mathematics_and_the_beginnings_of_mathematical_analysis", String, nullable=False),
    Column("Color_composition", String, nullable=False),
    Column("Physics", String, nullable=False),
    Column("Chemistry", String, nullable=False),
    Column("History", String, nullable=False),
    Column("A_note_on_the_direction_or_speciality", String, nullable=False),
    Column("Accepted_the_application", String, nullable=False),
    Column("Note_to_the_statement", String, nullable=False),
    Column("The_application_was_submitted_by_a_trusted_person", String, nullable=False),
    Column("The_method_of_submitting_documents", String, nullable=False),
    Column("Document_return_method", String, nullable=False),
    Column("Olympiads", String, nullable=False),
    Column("USE_results", String, nullable=False),
    Column("The_status_of_the_exam_results", String, nullable=False),
    Column("Points_for_individual_achievements", String, nullable=False),
    Column("The_amount_of_points_for_individual_achievements", String, nullable=False),
    Column("Points_for_individual_achievements_counted_as_an_advantage", String, nullable=False),
    Column("The_amount_of_points_for_individual_achievements_counted_as_an_advantage", String, nullable=False),
    Column("The_customer_organization", String, nullable=False),
    Column("Targeted_contract_training", String, nullable=False),
    Column("The_contract_has_been_concluded", String, nullable=False),
    Column("The_contract_has_been_paid", String, nullable=False),
    Column("The_order_of_enrollment", String, nullable=False),
    Column("Average_exam_score", String, nullable=False),
)
