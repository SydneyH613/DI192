# Challenge 1: Sorting

words = input("Please enter a string of words seperated by commas: ")
word_list = words.split(",")
word_list = [word.strip() for word in word_list]  
word_list.sort()
result = ', '.join(word_list)  
print(result)


# Challenge 2: Longest Word

def find_longest_word(sentence):
    words = sentence.split()
    longest_word= ""
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word

    return longest_word

user_input = input("Enter a sentence: ")
result = find_longest_word(user_input)
print(f"\nThe longest word is: {result}")