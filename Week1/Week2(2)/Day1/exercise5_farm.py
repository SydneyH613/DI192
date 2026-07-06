class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    # Step 8 (bonus): accepts multiple animals via **kwargs
    def add_animal(self, animal_type=None, count=1, **kwargs):
        if animal_type is not None:
            self.animals[animal_type] = self.animals.get(animal_type, 0) + count
        for animal, amount in kwargs.items():
            self.animals[animal] = self.animals.get(animal, 0) + amount

    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            info += f"{animal} : {count}\n"
        info += "\n    E-I-E-I-0!"
        return info

    # Bonus Step 6
    def get_animal_types(self):
        return sorted(self.animals.keys())

    # Bonus Step 7
    def get_short_info(self):
        animal_types = self.get_animal_types()
        names = [
            f"{animal}s" if self.animals[animal] > 1 else animal
            for animal in animal_types
        ]
        return f"{self.name}'s farm has {', '.join(names[:-1])} and {names[-1]}."


# Test the code
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

# Bonus tests
print(macdonald.get_animal_types())
print(macdonald.get_short_info())

macdonald.add_animal(cow=5, sheep=2, goat=12)
print(macdonald.get_info())
