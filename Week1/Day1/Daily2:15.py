import random


user_string = input("Enter a string that is exactly 10 characters long: ")
if len(user_string) < 10:
    print("String not long enough.")
elif len(user_string) > 10:
    print("String too long.")
else:
    print("Perfect string")
print("First character:", user_string[0])
print("Last character:", user_string[-1]) 
print("\nBuilding string progressively:")
for i in range(1, len(user_string) + 1):
        print(user_string[:i])
char_list = list(user_string)
random.shuffle(char_list)
jumbled_string = "".join(char_list)
    
print("\nJumbled string:", jumbled_string)

    
