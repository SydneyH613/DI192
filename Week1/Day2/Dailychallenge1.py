#Daily Challenge
# Ask for inputs
number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

# Create list of multiples
multiples = []

for i in range(1, length + 1):
    multiples.append(number * i)

# Print result
print(multiples)


# Ask the user for a string
word = input("Enter a word: ")

# Create an empty string for the result
new_word = ""

for letter in word:
    # Add the letter only if it's different from the last one added
    if not new_word or letter != new_word[-1]:
        new_word += letter

# Print the modified string
print(new_word)
