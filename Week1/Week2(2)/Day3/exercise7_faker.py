from faker import Faker

faker = Faker()

users = []


def add_users(n):
    for _ in range(n):
        user = {
            "name": faker.name(),
            "address": faker.address(),
            "language_code": faker.language_code(),
        }
        users.append(user)


add_users(5)
print(users)
