class Liquidificador:
    def __init__(
            self,
            cor: str,
            potencia: int,
            tensao: int,
            preço: float,
            ) -> None:
        self.cor = cor
        self.potencia = potencia
        self.tensao = tensao
        self.preço = preço
        self.ligado = False
        self.velocidade = 0
        self.velocidade_maxima = 3
        self.corrente_atual_no_motor = 0


meu_liquidificador = Liquidificador('Azul', 300, 127, 200)
seu_liquidificador = Liquidificador('Vermelho', 250, 220, 100)
