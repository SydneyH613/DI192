# ===== Exercise 1: Cats =====

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat1 = Cat("Whiskers", 3)
cat2 = Cat("Mittens", 7)
cat3 = Cat("Shadow", 5)


def find_oldest_cat(cat1, cat2, cat3):
    oldest = cat1
    for cat in (cat2, cat3):
        if cat.age > oldest.age:
            oldest = cat
    return oldest


oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")


# ===== Exercise 2: Dogs =====

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")


davids_dog = Dog("Rex", 40)
sarahs_dog = Dog("Buddy", 55)

print(f"{davids_dog.name} is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

print(f"{sarahs_dog.name} is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger than {sarahs_dog.name}.")
elif sarahs_dog.height > davids_dog.height:
    print(f"{sarahs_dog.name} is bigger than {davids_dog.name}.")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name} are the same size.")


# ===== Exercise 3: Who's the song producer? =====

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


stairway = Song([
    "There's a lady who's sure",
    "all that glitters is gold",
    "and she's buying a stairway to heaven",
])

stairway.sing_me_a_song()


# ===== Exercise 4: Afternoon at the Zoo =====

class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    # Bonus: accepts multiple animal names via *args
    def add_animal(self, *new_animals):
        for new_animal in new_animals:
            if new_animal not in self.animals:
                self.animals.append(new_animal)

    def get_animals(self):
        print(f"Animals in {self.zoo_name}:")
        for animal in self.animals:
            print(f"- {animal}")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        groups = {}
        for animal in sorted_animals:
            first_letter = animal[0].upper()
            groups.setdefault(first_letter, []).append(animal)
        return groups

    def get_groups(self):
        groups = self.sort_animals()
        for letter in sorted(groups):
            print(f"{letter}: {groups[letter]}")


brooklyn_safari = Zoo("Brooklyn Safari")

brooklyn_safari.add_animal("Giraffe")
brooklyn_safari.add_animal("Bear")
brooklyn_safari.add_animal("Baboon")
brooklyn_safari.get_animals()

brooklyn_safari.sell_animal("Bear")
brooklyn_safari.get_animals()

brooklyn_safari.add_animal("Cat", "Cougar", "Lion", "Zebra")
brooklyn_safari.get_animals()

brooklyn_safari.sort_animals()
brooklyn_safari.get_groups()
