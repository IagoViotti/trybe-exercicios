from pymongo import MongoClient
from os import environ

# Conecta o Mongo, pela variável ambiente definida no Docker Compose
client = MongoClient(environ.get("MONGO_URL"))

# Cria um banco de dados chamado db_chat
db = client.db_chat
