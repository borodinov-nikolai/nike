FROM postgres:16.1-alpine3.19

ENV POSTGRES_DB=mydatabase
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword

# Копирование дампа в контейнер
COPY dump.sql /docker-entrypoint-initdb.d/

# Запуск PostgreSQL и восстановление базы данных из дампа
CMD ["postgres"]
