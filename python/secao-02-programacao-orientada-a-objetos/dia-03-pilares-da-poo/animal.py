class Animal:
    def __init__(self, name: str):
        self.name = name

    def fazer_som(self):
        print(f"{self.name}fazendo som!")


class Mamífero(Animal):
    def __init__(self, name: str):
        super().__init__(name)

    def amamentar(self):
        print("f{self.name} amamentando...")


class MixinCorrer():
    def correr(self, velocidade: int):
        print(f"{self.name} correndo à "  # type: ignore
              f"velocidade {velocidade} km/h")


class Cachorro(Mamífero, MixinCorrer):
    def __init__(self, name: str):
        super().__init__(name)

    def latir(self):
        print(f"{self.name} fez au au")


if __name__ == "__main__":
    rex = Cachorro("Rex")
    rex.fazer_som()
    rex.amamentar()
    rex.latir()
    rex.correr(100)
