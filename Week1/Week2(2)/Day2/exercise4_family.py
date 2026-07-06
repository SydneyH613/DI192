class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        person = Person(first_name, age)
        person.last_name = self.last_name
        self.members.append(person)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return

    def family_presentation(self):
        print(self.last_name)
        for member in self.members:
            print(f'{member.first_name}, {member.age}')


smith_family = Family("Smith")
smith_family.born("Jane", 45)
smith_family.born("John", 47)
smith_family.born("Emma", 19)
smith_family.born("Jack", 15)

smith_family.check_majority("Emma")
smith_family.check_majority("Jack")
smith_family.family_presentation()
