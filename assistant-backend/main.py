from fastapi import FastAPI
from models import User, Applicant
import uvicorn

app = FastAPI()

fake_applicants = {}


@app.post("/add_applicant")
def add_applicant(applicant: Applicant):
    fake_applicants[applicant.name + ' ' + applicant.last_name + ' ' + applicant.lastlast_name] = [applicant.points,
                                                                                                applicant.snils,
                                                                                                applicant.city,
                                                                                                applicant.region,
                                                                                                applicant.street,
                                                                                                applicant.inn,
                                                                                                applicant.school]
    return {"status": 200}


@app.get("/applicants")
def get_applicants():
    return fake_applicants


if __name__ == "__main__":
    uvicorn.run("main:app", port=5000, log_level="info")
