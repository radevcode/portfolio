#lightweight python image / imagen ligera de python
FROM python:3.12-slim

WORKDIR /app

#Copied and install dependencies / copiamos e instalamos dependencias
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

#Copied..
COPY . .

#Command for run the app in dev mode
CMD uvicorn main:app --host 0.0.0.0 --port 8000 --reload
