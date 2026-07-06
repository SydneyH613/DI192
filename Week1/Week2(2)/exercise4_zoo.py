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


# Step 2: Create a Zoo instance
brooklyn_safari = Zoo("Brooklyn Safari")

# Step 3: Use the Zoo methods
brooklyn_safari.add_animal("Giraffe")
brooklyn_safari.add_animal("Bear")
brooklyn_safari.add_animal("Baboon")
brooklyn_safari.get_animals()

brooklyn_safari.sell_animal("Bear")
brooklyn_safari.get_animals()

# Bonus: add multiple animals at once
brooklyn_safari.add_animal("Cat", "Cougar", "Lion", "Zebra")
brooklyn_safari.get_animals()

brooklyn_safari.sort_animals()
brooklyn_safari.get_groups()
