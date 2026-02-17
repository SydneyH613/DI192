# Daily Challenge 1

word = input("Please enter a word here: ")
char_dict = {}
for index in range(len(word)):
    letter = word[index]
    if letter in char_dict:
        char_dict[letter].append(index)
    else:
        char_dict[letter] = [index]
print(char_dict)

# Daily Challenge 2

items_purchase = {
    'Water': '$1',
    'Bread': '$3',
    'Apple': '$4',
    'TV': '$1000'
}
wallet = '$350'
wallet_int = (wallet.replace('$', '').replace(',', ''))
basket = []
for item, price in items_purchase.items():
    clean_price = (price.replace('$', '').replace(',', ''))
    if clean_price <= wallet:
        basket.append(item)
        wallet -= clean_price
if not basket:
    print("Nothing")
else:
    print(sorted(basket))
