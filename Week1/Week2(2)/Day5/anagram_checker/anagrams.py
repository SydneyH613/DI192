from anagram_checker import AnagramChecker


def show_menu():
    print("\n--- Anagram Checker ---")
    print("1. Enter a word")
    print("2. Exit")


def get_user_word():
    user_input = input("Enter a word: ").strip()

    if len(user_input.split()) != 1:
        print("Error: please enter a single word only.")
        return None

    if not user_input.isalpha():
        print("Error: only alphabetic characters are allowed.")
        return None

    return user_input


def display_result(checker, word):
    is_valid = checker.is_valid_word(word)
    anagrams = checker.get_anagrams(word)

    print(f'\nYOUR WORD: "{word.upper()}"')
    if is_valid:
        print("This is a valid English word.")
    else:
        print("This is not a recognized English word.")

    if anagrams:
        print(f'Anagrams for your word: {", ".join(anagrams)}.')
    else:
        print("No anagrams found for your word.")


def main():
    checker = AnagramChecker()

    while True:
        show_menu()
        choice = input("Choose an option: ").strip()

        if choice == "1":
            word = get_user_word()
            if word is not None:
                display_result(checker, word)
        elif choice == "2":
            print("Goodbye!")
            break
        else:
            print("Invalid option, please choose 1 or 2.")


if __name__ == "__main__":
    main()
