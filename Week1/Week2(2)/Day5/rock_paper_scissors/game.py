import random


class Game:
    ITEMS = ["rock", "paper", "scissors"]
    BEATS = {"rock": "scissors", "paper": "rock", "scissors": "paper"}

    def get_user_item(self):
        choice = input("Enter a choice (rock/paper/scissors): ").strip().lower()
        while choice not in self.ITEMS:
            choice = input("Invalid choice, please enter rock, paper, or scissors: ").strip().lower()
        return choice

    def get_computer_item(self):
        return random.choice(self.ITEMS)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        if self.BEATS[user_item] == computer_item:
            return "win"
        return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f"You chose {user_item}, computer chose {computer_item}. You {result}!")
        return result
