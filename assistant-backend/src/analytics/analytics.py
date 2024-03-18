import pandas as pd
import numpy as np
from collections import Counter
import re
from datetime import datetime
import math


def result():
    # Пример загрузки данных
    data = pd.read_excel(r"C:\Users\User\Documents\GitHub\Assistant-to-the-admissions-Committee\assistant-backend\src\analytics\tables\Бакалавриат ВШЦТ.xlsx", sheet_name="Персоны", index_col=0, na_values="None", skiprows=2)
    data2 = pd.read_excel(r"C:\Users\User\Documents\GitHub\Assistant-to-the-admissions-Committee\assistant-backend\src\analytics\tables\Бакалавриат ВШЦТ.xlsx", sheet_name="Абитуриенты", na_values="None", skiprows=9, parse_dates=True)
    data2.set_index("№", inplace=True)

    # Пример исправления формата столбцов
    pd.set_option('display.float_format', lambda x: '%.0f' % x)
    data["ФИО"] = data["ФИО"].apply(str.title)
    data["Дата рождения"] = data["Дата рождения"].astype("datetime64[ns]")

    # Пример создания массива данных даты рождения (возраста)
    now_date = datetime.now()
    table_dates_birtday = data["Дата рождения"]
    result_dates_birthday = [int(math.floor((now_date - current_date).days / 365.25)) for current_date in table_dates_birtday]
    counter_ages = Counter(result_dates_birthday)

    # Пример создания массива данных городов
    table_city = data["Адрес регистрации"]
    result_city = [city.split(",")[-1].strip() for city in table_city if isinstance(city, str) and "г." in city]
    counter_city = Counter(result_city)

    # Пример создания списка школ Тюмени (документ об образовании)
    documents = data["Законченное образ. учреждение (осн. док.)"]
    result_documents = [document for document in documents if "г. Тюмень" in document]
    result_schools = [re.search(r'\d+', document).group(0) if re.search(r'\d+', document) else document for document in result_documents]
    counter_schools = Counter(result_schools)

    # Пример создания списка средних баллов по ЕГЭ
    mean_point_ege = data2["Средний балл ЕГЭ"].fillna(0).apply(lambda x: int(float(str(x).replace(",", ".")))).tolist()

    # Пример создания списка средних баллов за аттестат
    mean_point_att = data2["Ср. балл док-та об образовании"].fillna(0).tolist()

    # Пример создания списка баллов ЕГЭ
    points = data2["Сумма баллов"].fillna(0).tolist()

    # Создание словаря с результатами
    results_dict = {
        "result_dates_birthday_key": result_dates_birthday,
        "counter_ages_key": dict(counter_ages),
        "result_city_key": result_city,
        "counter_city_key": dict(counter_city),
        "result_schools_key": result_schools,
        "counter_schools_key": dict(counter_schools),
        "mean_point_ege_key": mean_point_ege,
        "mean_point_att_key": mean_point_att,
        "points_key": points
    }

    return results_dict
