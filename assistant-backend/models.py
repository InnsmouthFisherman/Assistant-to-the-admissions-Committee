from pydantic import BaseModel


class User(BaseModel):
    id: int
    name: str
    age: int


class Applicant(BaseModel):
    name: str
    points: int
    snils: str
