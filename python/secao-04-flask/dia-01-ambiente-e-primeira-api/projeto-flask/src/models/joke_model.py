import random
from .db import db
from .abstract_model import AbstractModel


# Herdado a classe Abstrata que domina o uso do MongoDb
class JokeModel(AbstractModel):
    # Define que a coleção do Banco se chamará Jokes.
    # Uma coleção é o equivalente a uma tabela no MySQL
    _collection = db["Jokes"]

    # Nosso construtor, receberá um dicionário (JSON)
    # para instanciar um objeto
    def __init__(self, json_data):
        # Chama o construtor da classe abstrata
        super().__init__(json_data)

    # Retornar uma piada aleatória, é uma regra de negócio específica
    # Fazendo sentido manter somente para a model Joke
    @classmethod
    def get_random_joke(cls):
        data = cls.find()
        if not data: return
        return random.choice(data)

    # Define regras de como o objeto JokeModel pode virar um Dict
    def to_dict(self):
        return {
            '_id': str(self.data['_id']),
            'joke': self.data['joke'],
        }
