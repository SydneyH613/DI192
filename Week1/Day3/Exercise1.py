#Exercise 1

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))

print(result)


# Exercise 2

family = {}
total_cost = 0

while True:
    name = input("Enter family member's name (or type 'done' to finish): ")
    
    if name.lower() == "done":
        break
    
    age = int(input(f"Enter {name}'s age: "))
    family[name] = age


for name, age in family.items():
    
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    print(f"{name}'s ticket price is ${price}")
    total_cost += price

print(f"\nTotal ticket cost: ${total_cost}")

# Exercise 3

brand = {
    'name': 'Zara',
    'creation_date': 1975, 
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': ['blue'],
        'Spain': ['Red'],
        'US': ['pink', 'green']
    } 

}

brand['number_stores'] = 2
print(f"Zara's clients are {','.join(brand['type_of_clothes'])}.")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
del brand['creation_date']
print("Last competitor:", brand["international_competitors"][-1])
print("US Major colors:", brand['major_color']['US'])
print("Number of keys:", len(brand))
print("All Keys:", brand.keys())

more_on_zara = {
    "Creation date": 1975,
    "number_of_stores": 7000
}
brand.update(more_on_zara)
print("Updated Dictionary:", brand)

# Exercise 4

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
dict1 = {}
for index in range(len(users)):
    dict1[users[index]] = index
print(dict1)
dict2 = {}
for index in range(len(users)):
    dict2[index] = users[index]
print(dict2)
sorted_users = sorted(users)
dict3 = {}
for index in range(len(sorted_users)):
    dict3[sorted_users[index]] = index
print(dict3)
