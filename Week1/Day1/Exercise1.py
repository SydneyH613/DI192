print("Hello world\n" * 4)

print((99**3)*8)

# 15 < 8 → False (15 is not less than 8)
print(15 < 8)

# 5 < 3 → False (5 is not less than 3)
print(5 < 3)

# 3 == 3 → True (equal values)
print(3 == 3)

# 3 == "3" → False (integer vs string, different types)
print(3 == "3")

# "3" > 3 → TypeError (can't compare string to integer in Python 3)
# print("3" > 3)

# "Hello" == "hello" → False (case-sensitive, H ≠ h)
print("Hello" == "hello")

computer_brand = "Apple"
print("I have a", computer_brand, "computer")

name = "Sydney"

age = 22

Shoe_size = 7

info = "My name is {}. I am {} years old and my shoe size is {}.".format(name, age, Shoe_size)
print(info)

a = 3
b = 1 

if a > b:
    print("Hello World")

number = int(input("Enter a number: "))
if number % 2 == 0:
    print("Even")
else:    print("Odd")

user_name = input("What is your name? ")

if user_name.lower() == "Sydney's Computer":
    print(f"Wow, {user_name}! We have the same name! Who had it first?")
else:
    print(f"Nice to meet you, {user_name}! I'm Sydney's Computer. We don't have the same name, I know that is very unfortunate for you")

user_name = input("What is your height in CM?")
if int(user_name) > 145:
    print("You are tall enough to ride the rollercoaster!")
else:    print("Sorry, you are not tall enough to ride the rollercoaster. You need to grow some more to ride.")

