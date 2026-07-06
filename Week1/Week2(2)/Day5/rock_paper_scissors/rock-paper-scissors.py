from game import Game


def get_user_menu_choice():
    print("\ng - Play a new game")
    print("x - Show scores")
    print("q - Quit")
    choice = input("Choose an option: ").strip().lower()
    while choice not in ("g", "x", "q"):
        choice = input("Invalid option, please choose g, x, or q: ").strip().lower()
    return choice


def print_results(results):
    print(f"Wins: {results['win']}, Losses: {results['loss']}, Draws: {results['draw']}")
    print("Thanks for playing!")


def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()

        if choice == "g":
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == "x":
            print_results(results)
        else:
            print_results(results)
            break


if __name__ == "__main__":
    main()
