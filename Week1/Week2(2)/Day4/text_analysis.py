import string
import re


class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        count = words.count(word)
        return count if count > 0 else None

    def most_common_word(self):
        words = self.text.split()
        frequencies = {}
        for word in words:
            frequencies[word] = frequencies.get(word, 0) + 1
        return max(frequencies, key=frequencies.get)

    def unique_words(self):
        words = self.text.split()
        return list(set(words))

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, "r") as f:
            content = f.read()
        return cls(content)


class TextModification(Text):
    STOP_WORDS = {
        "a", "an", "the", "and", "or", "but", "if", "is", "are", "was", "were",
        "be", "been", "being", "in", "on", "at", "to", "for", "of", "with",
        "as", "by", "this", "that", "these", "those", "it", "its", "from",
        "not", "but",
    }

    def remove_punctuation(self):
        translator = str.maketrans("", "", string.punctuation)
        self.text = self.text.translate(translator)
        return self.text

    def remove_stop_words(self):
        words = self.text.split()
        filtered_words = [word for word in words if word.lower() not in self.STOP_WORDS]
        self.text = " ".join(filtered_words)
        return self.text

    def remove_special_characters(self):
        self.text = re.sub(r'[^A-Za-z0-9\s]', '', self.text)
        return self.text


if __name__ == "__main__":
    # Part I: Analyzing a simple string
    text = Text("the quick brown fox jumps over the lazy dog the fox was quick")

    print(text.word_frequency("the"))
    print(text.word_frequency("cat"))
    print(text.most_common_word())
    print(text.unique_words())

    # Part II: Analyzing text from a file
    file_text = Text.from_file("sample_text.txt")
    print(file_text.most_common_word())

    # Bonus: Text modification
    modified_text = TextModification.from_file("sample_text.txt")
    print(modified_text.remove_punctuation())
    print(modified_text.remove_stop_words())
    print(modified_text.remove_special_characters())
