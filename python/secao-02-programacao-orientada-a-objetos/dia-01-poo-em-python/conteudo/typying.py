class Motocicleta():
    def __init__(self, vel) -> None:
        self.velocidade_maxima = vel


class Caminhao():
    def __init__(self, vel) -> None:
        self.velocidade_maxima = vel


def printa_velocidade(veiculo) -> None:
    if isinstance(veiculo, Motocicleta):
        print(f"Velocidade máxima: {veiculo.velocidade_maxima} km/h")
    else:
        raise TypeError("o veículo precisa ser uma motocicleta")
