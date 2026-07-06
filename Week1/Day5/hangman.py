# Exercise Hangman
import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south', 'train', 'find']
word = random.choice(wordslist) 
guessed_letters = []
display = ['_'] * len(word)
lives = 6
game_over = False
print(display)

def display_hangman(lives):
    stages = ['''
  +---+
  |   |
      |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========''']
    return stages[lives]

while not game_over:
    guess = input("Guess a letter: ").lower()
    if guess in guessed_letters:
        print(f"\nYou already guessed that letter. Try a new one")
        continue
    guessed_letters.append(guess)
    if guess in word:
        print(f"Correct! '{guess}' is in the word!")
        for position, letter in enumerate(word):
            if letter == guess:
                display[position] = guess
        print(" ".join(display))
    else:
        lives -= 1
        print(f"Incorrect! You have lost a life. Remaining lives: {lives}")
        print(display_hangman(lives))
    
    # Check win condition
    if "_" not in display:
        print(f"You won! The word is: {''.join(display)}")
        game_over = True
    
    # Check lose condition
    if lives == 0:
        print(f"You lost! The word was: {word}")
        game_over = True

print("\nCurrent word: " + " ".join(display))



