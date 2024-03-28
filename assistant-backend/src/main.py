from fastapi import FastAPI
import uvicorn
from fastapi_users import FastAPIUsers
from fastapi.middleware.cors import CORSMiddleware
from analytics.router import router as analytics_router
from auth.database import User
from src.auth.auth import auth_backend
from src.auth.manager import get_user_manager
from src.auth.schemas import UserRead, UserCreate

app = FastAPI()

app.include_router(analytics_router)

origins = [
    'http://localhost:5173',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"],
    allow_headers=["Content-Type", "Set-Cookie", "Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
                   "Authorization"],
)

fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)

app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth/jwt",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)

current_user = fastapi_users.current_user()

if __name__ == "__main__":
    uvicorn.run("main:app", port=5000, log_level="info")
