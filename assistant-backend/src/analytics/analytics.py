import pandas as pd
import numpy as np
from collections import Counter
import re
import os
from datetime import datetime
import math

data = pd.read_excel(os.getcwd() +
    r"\src\analytics\tables\Бакалавриат ВШЦТ.xlsx",
    sheet_name="Персоны", skiprows=2, index_col=0, na_values="None")
data2 = pd.read_excel(
    os.getcwd() +
    r"\src\analytics\tables\Бакалавриат ВШЦТ.xlsx",
    sheet_name="Абитуриенты", na_values="None", skiprows=9, parse_dates=True).drop_duplicates()

def result():
    data2.set_index("№", inplace=True)

    ##Исправление формата столбцов
    pd.set_option('display.float_format', lambda x: '%.0f' % x)
    data["ФИО"] = data["ФИО"].apply(str.title)
    data["Дата рождения"] = data["Дата рождения"].astype("datetime64[ns]")

    # Массив данных даты рождения(возраста)
    now_date = datetime.now()
    table_dates_birtday = data["Дата рождения"]
    result_dates_birtday = [int(math.floor((now_date - current_date).days / 365.25)) for current_date in
                            table_dates_birtday]
    counter_ages = Counter(result_dates_birtday)
    # sort_counter_ages = sorted(counter_ages.items(), key = lambda x: x[0])

    # Массив данных городов
    table_city = data["Адрес регистрации"]
    result_city = []
    count = 0
    for el in table_city:
        if not isinstance(el, float):
            sub_city = [city for city in el.split(",") if "г." in city]
            if sub_city:
                result_city.append(*sub_city)

    counter_city = Counter(result_city)
    sort_counter_city = sorted(counter_city.items(), key=lambda x: x[1], reverse=True)

    # Школы Тюмени (документ об образовании)
    documents = data["Законченное образ. учреждение (осн. док.)"]
    result_documents = []
    result_schools = []
    for document in documents:
        information = re.search(r'г. Тюмень', document, flags=re.I)
        if information:
            result_documents.append(document)
    for document in result_documents:
        check = re.search("\d+", document)
        if check:
            school = check.group(0)
        else:
            school = document
        result_schools.append(school)
    counter_schools = Counter(result_schools)
    counter_schools = sorted(counter_schools.items(), key=lambda x: (x[1], x[0]), reverse=True)

    # средний балл по егэ
    mean_point_ege = data2["Средний балл ЕГЭ"].values
    mean_point_ege = np.array(list((map(lambda x: str(x).replace(",", "."), mean_point_ege))))
    without_nan = list(np.where(mean_point_ege != "nan", mean_point_ege, 0))
    result_mean_point_ege = list(map(lambda x: int(float(x)), without_nan))
    sorted_mean_point_ege = sorted(result_mean_point_ege)

    # Средний балл за аттестат
    mean_point_att = data2["Ср. балл док-та об образовании"]

    ##баллы егэ
    points = data2["Сумма баллов"]
    points.fillna(0).tolist()

    # Создание словаря с результатами
    results_dict = {
        "count_ages_key": counter_ages,
        "count_cities_key": sort_counter_city,
        "count_schools_key": counter_schools,
        "mean_point_ege_key": sorted_mean_point_ege,
        "mean_point_att_key": mean_point_att,
        "points_key": points
    }

    return results_dict


def students_85_plus():
    data2.set_index("№", inplace=True)

    ##Исправление формата столбцов
    pd.set_option('display.float_format', lambda x: '%.0f' % x)
    data["ФИО"] = data["ФИО"].apply(str.title)
    data["Дата рождения"] = data["Дата рождения"].astype("datetime64[ns]")

    results_ege = data2["Результаты ЕГЭ"].fillna(0)
    results_ege_90_plus = []
    for result in results_ege:
        if result != 0:
            points = re.findall(r"\d+", str(result)[5:])
            results_ege_90_plus.append(",".join(points))
        else:
            results_ege_90_plus.append("0,0,0")

    data2["Результаты ЕГЭ"] = results_ege_90_plus
    boolean_list = []
    for points in data2["Результаты ЕГЭ"]:
        result = map(int, points.split(','))
        if all([num >= 85 for num in result]):
            boolean_list.append(True)
        else:
            boolean_list.append(False)

    result_df = data2.loc[boolean_list]
    result = result_df.to_dict(orient='records')
    return result
