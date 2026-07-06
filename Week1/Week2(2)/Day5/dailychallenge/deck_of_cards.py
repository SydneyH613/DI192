import random


class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f'{self.value} of {self.suit}'


class Deck:
    SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"]
    VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    def __init__(self):
        self.cards = []
        self.shuffle()

    def shuffle(self):
        self.cards = [Card(suit, value) for suit in self.SUITS for value in self.VALUES]
        random.shuffle(self.cards)

    def deal(self):
        if not self.cards:
            raise ValueError("No cards left in the deck")
        return self.cards.pop()


if __name__ == "__main__":
    deck = Deck()
    print(f'Deck size after shuffle: {len(deck.cards)}')
    # Deck size after shuffle: 52

    dealt_card = deck.deal()
    print(f'Dealt card: {dealt_card}')
    print(f'Deck size after dealing: {len(deck.cards)}')
    # Deck size after dealing: 51

    for _ in range(51):
        deck.deal()
    print(f'Deck size after dealing all cards: {len(deck.cards)}')
    # Deck size after dealing all cards: 0

    try:
        deck.deal()
    except ValueError as e:
        print(f'ValueError: {e}')
