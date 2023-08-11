class Carro:
    def identificar(self):
        print(f"Meu carro é um {self.modelo} da marca {self.marca}. Ele é do ano {self.ano} e tem a cor {self.cor}")


if __name__ == "__main__":
    carro = Carro()
    carro.modelo = "Civic"
    carro.marca = "Honda"
    carro.ano = 2019
    carro.cor = "Prata"
    carro.identificar()
