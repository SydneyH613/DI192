class AnagramChecker:
    def __init__(self, file_path="word_list.txt"):
        with open(file_path, "r") as f:
            content = f.read()
        self.words = [word.lower() for word in content.split()]

    def is_valid_word(self, word):
        return word.lower() in self.words

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        anagrams = []
        for candidate in self.words:
            if candidate != word.lower() and self.is_anagram(candidate, word):
                if candidate not in anagrams:
                    anagrams.append(candidate)
        return anagrams
