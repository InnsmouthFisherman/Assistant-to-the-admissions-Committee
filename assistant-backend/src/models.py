from sqlalchemy import MetaData, Table, String, Column, Integer, Boolean
from sqlalchemy.orm import declarative_base

metadata = MetaData()

# в будущем надо создать классы для полей таблиц, чтобы их можно было легко валидировать

user = Table(
    "user",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("email", String, nullable=False),
    Column("username", String, nullable=False),
    Column("hashed_password", String, nullable=False),
    Column("is_active", Boolean, default=True, nullable=False),
    Column("is_superuser", Boolean, default=False, nullable=False),
    Column("is_verified", Boolean, default=False, nullable=False),
)

users = Table(
    "applicant",
    metadata,
    Column("Name", String, nullable=False),
    Column("Last_name", String, nullable=False),
    Column("Patronymic", String, nullable=False),
)

