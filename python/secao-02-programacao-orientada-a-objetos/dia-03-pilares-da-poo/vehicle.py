class Vehicle:
    def __init__(self, name: str, capacity: int):
        self.name = name
        self.capacity = capacity

    def move(self, distance: int):
        print(
            f"{self.name} carried {self.capacity} "
            f"people accross {distance} kilometers"
        )


class Car(Vehicle):
    def __init__(self, name: str, capacity: int):
        super().__init__(name, capacity)

    def move(self, distance: int):
        print(
            f"Car {self.name} carried {self.capacity} "
            f"people accross {distance} kilometers"
        )


class Motorcycle(Vehicle):
    def __init__(self, name: str):
        super().__init__(name, 2)

    def move(self, distance: int):
        print(
            f"Motorcycle {self.name} carried {self.capacity} "
            f"people accross {distance} kilometers"
        )


if __name__ == "__main__":
    fusca = Car('Fusca', 5)
    fusca.move(100)

    harley = Motorcycle('Harley')
    harley.move(50)
