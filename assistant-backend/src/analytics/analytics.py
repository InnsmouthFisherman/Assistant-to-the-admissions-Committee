import pandas as pd
import numpy as np
from collections import Counter
import re
import os
from datetime import datetime
import math
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
import copy
import statistics
import json

#---------------------------------------------------------------------------------------------------------------------
#Загрузка данных
#---------------------------------------------------------------------------------------------------------------------
data_table = pd.read_excel(os.getcwd() +
   r"\src\analytics\tables\Бакалавриат ВШЦТ.xlsx",
    sheet_name="Персоны", skiprows=2, index_col=0, na_values="None")
data2_table = pd.read_excel(
    os.getcwd() +
    r"\src\analytics\tables\Бакалавриат ВШЦТ.xlsx",
    sheet_name="Абитуриенты", na_values="None", skiprows=9, parse_dates=True).drop_duplicates()


#---------------------------------------------------------------------------------------------------------------------
#Функции, фильтрующие данные
#---------------------------------------------------------------------------------------------------------------------
def students_n_score_plus(table, score):
    '''Фильтрующая функция, используется для фильтрации данного dataframe объекта.
       Возвращает отфильтрованную таблицу данных, которую можно использовать для других фильтрующих функций или функций, выводящих результат.'''
    
    ##Загрузка данных
    data = copy.deepcopy(table)

    ##Исправление формата столбцов
    pd.set_option('display.float_format', lambda x: '%.0f' % x)
    data["ФИО"] = data["ФИО"].apply(str.title)
    data["Дата рождения"] = data["Дата рождения"].astype("datetime64[ns]")

    results_ege = data["Результаты ЕГЭ"].fillna(0)
    results_ege_n_score_plus = []
    for result in results_ege:
        if result != 0:
            points = re.findall(r"\d+", str(result)[5:])
            results_ege_n_score_plus.append(",".join(points))
        else:
            results_ege_n_score_plus.append("0,0,0")

    data["Результаты ЕГЭ"] = results_ege_n_score_plus
    boolean_list = []
    for points in data["Результаты ЕГЭ"]:
        result = map(int, points.split(','))
        if all([num >= score for num in result]):
            boolean_list.append(True)
        else:
            boolean_list.append(False)

    result_df = data.loc[boolean_list].fillna("-").drop_duplicates()

    result_df.drop("Дата рождения", axis=1, inplace=True)

    for column in result_df.columns:
        result_df[column] = result_df[column].astype(object)
        
    return result_df
 
def submission_of_documents(table, way):
    '''Функция фильтрует переданную таблицу по способу подачи документов в вуз,
       возрвращает отфильтрованный DataFrame объект, который можно использовать в других функциях'''
    
    if way == "Через портал гос. услуг":
        result_table = table[table["Способ подачи документов"] == "Через портал гос. услуг"]
    elif way == "Лично":
        result_table = table[table["Способ подачи документов"] == "Лично"]
    elif way == "В электронной форме":
        result_table = table[table["Способ подачи документов"] == "В электронной форме"]
    elif way == "По доверенности":
        result_table = table[table["Способ подачи документов"] == "По доверенности"]

    return result_table


# #---------------------------------------------------------------------------------------------------------------------
# #Функции, возвращающие данные 
# #---------------------------------------------------------------------------------------------------------------------

def convert_DataFrame(dataframe):
    '''Функция принимает DataFrame таблицу и преобразовывает ее в список словарей.
       Возвращает спиок, где ключи это названия столбцов, а значение значение этого столбца'''
       
    data = copy.deepcopy(dataframe).drop_duplicates()
    return data.to_dict(orient='records')

def portrait_of_student(dataframe, data=None):
    '''Функция на вход получает DataFrame таблицу, показывет портрет абитуриента, то есть
    медианное значения для числовых столбцов и значение моды для категориальных столбцов.
    Возвращает словарь, где ключ это название столбца, а значение значение моды или медианны'''

    # file = json.loads(data)
    dataframe = copy.deepcopy(dataframe)
    for column in dataframe.columns:
        if dataframe[column].dtype == object:
            dataframe[column] = dataframe[column].fillna("Не указано")
        else:
            dataframe[column] = dataframe[column].fillna(0)

    for column, value in data.items():
        if dataframe[column].dtype == object:
            dataframe = dataframe[dataframe[column] == value]
        else:
            dataframe = dataframe[dataframe[column] >= value]
            
    result_dict = {}
    for column in dataframe:
        if dataframe[column].dtype == object:
            result_dict[column] = list(dataframe[column].mode())
        else:
            result_dict[column] = [str(round(dataframe[column].mean(), 2)), str(round(dataframe[column].median(), 2))]

    return result_dict


def get_ages(table):
    '''Функция, которая использует входную таблицу и возвращает словарь где ключом является возраст, а значением количество этого возраста в таблице.
    Использует входную таблицу и возвращает словарь где ключом является возраст, а значением количество этого возраста в таблице'''
    data = copy.deepcopy(table)
    data["Дата рождения"] = data["Дата рождения"].astype("datetime64[ns]")

    # Массив данных даты рождения(возраста)
    now_date = datetime.now()
    table_dates_birtday= data["Дата рождения"]
    result_dates_birtday = [int(math.floor((now_date - current_date).days / 365.25)) for current_date in table_dates_birtday]
    counter_ages = Counter(result_dates_birtday)
    sort_counter_ages = sorted(counter_ages.items(), key = lambda x: x[0])

    return dict(sort_counter_ages)

def get_cities(table):
    '''Функция, которая использует входную таблицу и возвращает словарь где ключом является город, а значением количество этого города в таблице.
    Использует входную таблицу и возвращает словарь где ключом является город, а значением количество этого города в таблице'''
    data = copy.deepcopy(table)
    table_city = data["Адрес регистрации"]
    result_city = []
    count = 0
    for el in table_city:
        if not isinstance(el, float):
            sub_city = [city for city in el.split(",") if "г." in city]
            if sub_city:
                result_city.append(*sub_city)

    counter_city = Counter(result_city)
    counter_city = counter_city.most_common(10)

    return dict(counter_city)

def get_schools(table):
    '''Функция возвращает 10 самых часто встречаемых школ , из которых пришли абитуриенты после 11 класса.
       На вход пока что должна поступать первый лист excel файла. Использует входную таблицу и возвращает словарь где ключом является школа или другое учебное заведение,
       а значением количество этого учебного заведения в таблице'''
    # Школы Тюмени (документ об образовании)
    data = copy.deepcopy(table)
    documents = data["Законченное образ. учреждение (осн. док.)"]
    counter_schools = Counter(documents)
    counter_schools = dict(counter_schools.most_common(10)[:10])

    return counter_schools

def mean_ege_score(df):

    data = copy.deepcopy(df)
    data = data.fillna("Не указано")
    mean_point_ege = data["Средний балл ЕГЭ"].values
    mean_point_ege = np.array(list((map(lambda x: str(x).replace(",", "."), mean_point_ege))))

    counter = sorted(Counter(mean_point_ege).items(), key=lambda x: x[1], reverse=True)

    return dict(counter)

def sum_scores(df):
    data = copy.deepcopy(df)
    data = data
    sum_scores = df["Сумма баллов"].fillna("Не указано")
    count = sorted(Counter(sum_scores).items(), key=lambda x: x[1], reverse=True) 

    return dict(count)

def mean_point_document(df):
    data = copy.deepcopy(df)
    mean_points_document = data["Ср. балл док-та об образовании"]

    counter = sorted(Counter(mean_points_document).items(), key=lambda x: x[1], reverse=True)

    return dict(counter)


def clusters_of_students():
    '''Функция использует модель машинного обучения, кластеризует выборку студентов, используя характеристики
       ["Пол", "Дата рождения", "Ср. балл док-та об образовании","Вид возмещения затрат", "Форма обучения",
        "Сумма баллов", "Средний балл ЕГЭ"]'''
    def convert_ages(age):
        now_date = datetime.now()
        result = int(math.floor((now_date - age).days / 365.25))
        return result

    #Загрузка нужных колонн
    new_data = data_table[["Пол", "Дата рождения", 
                    "Ср. балл док-та об образовании",
                    "Вид возмещения затрат", "Форма обучения",
                    "Сумма баллов", "Средний балл ЕГЭ"]].drop_duplicates()

    #Обработка и подготовка данных
    new_data["Сумма баллов"] = new_data["Сумма баллов"].fillna(0)
    new_data["Средний балл ЕГЭ"] = new_data["Средний балл ЕГЭ"].fillna("0")

    encoding = pd.get_dummies(new_data[["Пол", "Вид возмещения затрат", "Форма обучения"]], dtype=int)
    new_data = pd.concat([new_data, encoding], axis=1)
    new_data["Средний балл ЕГЭ"] = new_data["Средний балл ЕГЭ"].apply(lambda x: float(".".join(x.split(','))))
    new_data.drop(columns=["Пол", "Вид возмещения затрат", "Форма обучения"], axis=1, inplace=True)

    new_data["Дата рождения"] = new_data["Дата рождения"].astype("datetime64[ns]")
    new_data["Дата рождения"] = new_data["Дата рождения"].apply(convert_ages)

    scaler = StandardScaler()
    scaled_data = scaler.fit_transform(new_data)
    scaled_data_df = pd.DataFrame(data=scaled_data, columns=new_data.columns)

    kmeans = KMeans(n_clusters=4, init="k-means++", max_iter=300, n_init=10)
    kmeans.fit(scaled_data)
    y_pred = kmeans.predict(scaled_data)

    # Применение PCA для снижения размерности до двух компонент
    pca = PCA(n_components=2)
    principal_components = pca.fit_transform(scaled_data)

    # Создание DataFrame для визуализации
    principal_df = pd.DataFrame(data=principal_components, columns=['component1', 'component2'])

    # Добавление предсказанных кластеров в DataFrame
    principal_df['cluster'] = y_pred

    # Создание scatter plot
    plt.scatter(principal_df['component1'], principal_df['component2'], c=principal_df['cluster'], cmap='viridis', alpha=0.5)
    plt.xlabel('Component 1')
    plt.ylabel('Component 2')
    plt.title('Кластеры (PCA)')
    plt.colorbar(label='Кластер')
    plt.show()


def graduated_schools(table):
    '''Функция использует вторую страницу excel файла, использует колонку "Полученное образование"
       , возвращает количество людей , которые пришли после школы или колледжа'''
    data = copy.deepcopy(table)
    education_received = data["Полученное образование"]
    counters = Counter(education_received)
    return counters

def direction_priority(table):
    '''Функция использует второй лист excel файла и две колонки "Приоритет", "Направление подготовки".
       Возвращает самые приоритетные направления по убыванию'''
    
    data = copy.deepcopy(table)
    group_data = data.groupby("Направление подготовки", sort=True)["Приоритет"].value_counts()
    result_df = group_data.reset_index(name='Количество')
    result_df.sort_values(["Приоритет"], ascending=True, inplace=True)

    prioritets = result_df["Приоритет"].unique()
    directions = result_df["Направление подготовки"].unique()

    direction_priority_counts = {}

    # Создаем пустые списки для каждого направления
    for direction in directions:
        direction_priority_counts[direction] = []

    # Заполняем списки кортежами (приоритет, количество) для каждого направления
    #Можно использовать как отдельный вывод результа
    for index, row in result_df.iterrows():
        direction = row["Направление подготовки"]
        priority = row["Приоритет"]
        count = row["Количество"]
        direction_priority_counts[direction].append((priority, count))

    #Создание словаря для 1 приоритета каждого направления
    result = {}
    for key, value in direction_priority_counts.items():
        result[key] = value[0]
    result = dict(sorted(result.items(), key=lambda x: x[1], reverse=True))

    return result

def direction_through_priority(table):
    '''Функция использует второй лист excel файла и две колонки "Сквозной приоритет", "Направление подготовки".
       Возвращает самые приоритетные направления по убыванию'''
    
    data = copy.deepcopy(table)
    group_data = data.groupby("Направление подготовки", sort=True)["Сквозной приоритет"].value_counts()
    result_df = group_data.reset_index(name='Количество')
    result_df.sort_values(["Сквозной приоритет"], ascending=True, inplace=True)

    prioritets = result_df["Сквозной приоритет"].unique()
    directions = result_df["Направление подготовки"].unique()

    direction_priority_counts = {}

    # Создаем пустые списки для каждого направления
    for direction in directions:
        direction_priority_counts[direction] = []

    # Заполняем списки кортежами (приоритет, количество) для каждого направления
    #Можно использовать как отдельный вывод результа
    for index, row in result_df.iterrows():
        direction = row["Направление подготовки"]
        priority = row["Сквозной приоритет"]
        count = row["Количество"]
        direction_priority_counts[direction].append((priority, count))

    #Создание словаря для 1 приоритета каждого направления
    result = {}
    for key, value in direction_priority_counts.items():
        result[key] = value[0]
    result = dict(sorted(result.items(), key=lambda x: x[1], reverse=True))

    return result

def column_mean(table, column):
    '''Функция принимает таблицу, второй лист, а также колонку , которую нужно использовать
        для вычисления. Возвращает среднее значение колонки, если ее тип (int, float), если колонка категориальная, возвращает ее моду'''
    data = copy.deepcopy(table)
    data = data.fillna("-")
    dtype = table[column].dtype
    if dtype is int or dtype is float:
        return {column: table[column].mean().values[0]}
    else:
        return {column: table[column].mode().values[0]}
#---------------------------------------------------------------------------------------------------------------------


def result():

    ##Исправление формата столбцов
    pd.set_option('display.float_format', lambda x: '%.0f' % x)
    data_table["ФИО"] = data_table["ФИО"].apply(str.title)
    data_table["Дата рождения"] = data_table["Дата рождения"].astype("datetime64[ns]")

    # Массив данных даты рождения(возраста)
    now_date = datetime.now()
    table_dates_birtday= data_table["Дата рождения"]
    result_dates_birtday = [int(math.floor((now_date - current_date).days / 365.25)) for current_date in table_dates_birtday]
    counter_ages = Counter(result_dates_birtday)
    # sort_counter_ages = sorted(counter_ages.items(), key = lambda x: x[0])

    # Массив данных городов
    table_city = data_table["Адрес регистрации"]
    result_city = []
    count = 0
    for el in table_city:
        if not isinstance(el, float):
            sub_city = [city for city in el.split(",") if "г." in city]
            if sub_city:
                result_city.append(*sub_city)

    counter_city = Counter(result_city)
    sort_counter_city = sorted(counter_city.items(), key = lambda x: x[1], reverse=True)

    # Школы Тюмени (документ об образовании)
    documents = data_table["Законченное образ. учреждение (осн. док.)"]
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
    counter_schools = sorted(counter_schools.items(), key = lambda x: (x[1], x[0]), reverse=True)

    # средний балл по егэ
    mean_point_ege = data2_table["Средний балл ЕГЭ"].values
    mean_point_ege = np.array(list((map(lambda x: str(x).replace(",", "."), mean_point_ege))))
    without_nan = list(np.where(mean_point_ege != "nan", mean_point_ege, 0))
    result_mean_point_ege = list(map(lambda x: int(float(x)), without_nan))
    sorted_mean_point_ege = sorted(result_mean_point_ege)

    # Средний балл за аттестат
    mean_point_att = data2_table["Ср. балл док-та об образовании"]

    ##баллы егэ
    points = data2_table["Сумма баллов"]
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