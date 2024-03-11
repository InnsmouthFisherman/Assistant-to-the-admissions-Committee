from pydantic import BaseModel


class User(BaseModel):
    id: int
    name: str
    age: int


class Applicant(BaseModel):
    name: str
    last_name: str
    lastlast_name: str
    region: str
    city: str
    street: str
    inn: int
    school: str
    points: int
    snils: str
