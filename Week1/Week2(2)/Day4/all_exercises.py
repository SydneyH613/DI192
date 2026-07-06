import random
import json


# ---------------------------------------------------------------------------
# Exercise 1: Random Sentence Generator
# ---------------------------------------------------------------------------
def get_words_from_file(file_path):
    with open(file_path, "r") as f:
        content = f.read()
    words = content.split()
    return words


def get_random_sentence(length):
    words = get_words_from_file("word_list.txt")
    chosen_words = [random.choice(words) for _ in range(length)]
    sentence = " ".join(chosen_words)
    return sentence.lower()


def main():
    print("This program generates a random sentence from a word list.")
    user_input = input("Enter the desired sentence length (2-20): ")

    try:
        length = int(user_input)
    except ValueError:
        print("Error: please enter a valid integer.")
        return

    if length < 2 or length > 20:
        print("Error: the length must be between 2 and 20 (inclusive).")
        return

    print(get_random_sentence(length))


main()


# ---------------------------------------------------------------------------
# Exercise 2: Working with JSON
# ---------------------------------------------------------------------------
sampleJson = """{
   "company":{
      "employee":{
         "name":"emma",
         "payable":{
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print(salary)
# 7000

data["company"]["employee"]["birth_date"] = "1998-05-14"

with open("modified_data.json", "w") as f:
    json.dump(data, f, indent=4)
