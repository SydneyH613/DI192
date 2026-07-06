# Exercise 1 
my_fav_numbers = {7, 4, 9, 2, 5} 
my_fav_numbers.add(3)
my_fav_numbers.add(6)
my_fav_numbers.remove(6)
print(my_fav_numbers)
friend_fav_numbers = {11, 12, 13, 14, 15}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


# Exercise 2
my_tuple = (1, 2, 3, 4, 5)
# my_tuple[2] = 11
print(my_tuple)


# Exercise 3
basket = ["Bananas", "Apples", "Oranges", "Blueberries"]
basket.remove("Bananas")
basket.remove("Blueberries")
basket.insert(2, "Kiwis")
basket.insert(0, "Apples")
count = basket.count("Apples")
print(count)
basket.clear()
print(basket)

# Exercise 4
# An integer is a whole number without a decimal and a float has a decimal
list = [int(x) for x in [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]]
print(list)

# Exercise 5
for i in range(1, 21):
    print(i,)
for i in range(2, 21, 2):
    print(i)

# Exercise 6
while True:
    name = input("Please enter your name: ")
    if len(name) >= 3 and not name.isdigit():
        print("Thank You!")
        break
    else:
        print("Please enter a valid name.")

# Exercise 7
favorite_fruits = input("Enter your favorite fruits: ").split()
chosen_fruit = input("Enter the name of a fruit: ")
if chosen_fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

# Exercise 8
toppings = []
base_price = 10
topping_price = 2.50
while True:
    topping = input("Enter a pizza topping (quit to finish): ")
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

total_cost = base_price + (len(toppings) * topping_price)
print("\nYour pizza toppings:")
for item in toppings: 
    print(f"-{item}")

print(f"\nTotal cost: ${total_cost:.2f}")

# Exercise 9
total_cost = 0
while True:
    age_input = input("Enter the age of each family member (type done to finish): ")
    if age_input.lower() == 'done':
        break
    age = int(age_input)
    if age < 3:
        cost = 0
    elif 3<= age <= 12:
        cost = 10
    else:
        cost = 15
total_cost += cost
print(f"\nTotal ticket cost: ${total_cost}")

attendees = []
while True:
    ageinput = input("Enter age of person: ")
    if ageinput.lower() == 'done':
        break
    age = int(ageinput)
    if 16 <= age <= 21:
        attendees.append(age)
    else:
        print("Sorry, you can't watch this movie.")
print("\nFinal list of attendees:")
print(attendees)