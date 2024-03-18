from fastapi import FastAPI
import uvicorn
from analytics import analytics

app = FastAPI()

fake_applicants = {}


@app.get("/applicants")
def get_applicants():
    return fake_applicants


@app.post("/analytics")
def get_analysis():
    return analytics.result()


if __name__ == "__main__":
    uvicorn.run("main:app", port=5000, log_level="info")
