from faker import Faker


faker = Faker(locale='es_AR')

# print(faker.name())
# print(faker.name())
# print(faker.name())
# print(faker.name())

# print(faker.email())
# print(faker.password())
# print(faker.address())
# print(faker.credit_card_number())
# print(faker.phone_number())
# print(faker.company())
# print(faker.date())
# print(faker.cpf())


if __name__ == '__main__':
    Faker.seed(0)
    print(faker.last_name())
    print(faker.email())
    print(faker.password())
    print(faker.url())
    print(faker.license_plate())
