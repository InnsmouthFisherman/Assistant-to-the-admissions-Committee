from typing import List
from fastapi import FastAPI
import uvicorn
from pydantic import BaseModel
from models.models import applicants

app = FastAPI(
    title = "Assistant-to-the-admissors-committee"
)

class Abiturient(BaseModel):
    id: int
    name: str

@app.post("/applicants/add")
def add_applicant(applicant: List[Abiturient]):
    applicants.extend(applicant)
    return {'status': 200, "data": applicants}
