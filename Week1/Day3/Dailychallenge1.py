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
print(wallet)
wallet_int = (wallet.replace('$', '').replace(',', ''))
wallet_int = (int(wallet_int))
print(wallet_int)
basket = []
for item, price in items_purchase.items():
    
    # Clean price
    clean_price = (price.replace("$", "").replace(",", ""))
    clean_price = (int(clean_price))
    print(clean_price)
    
    # Check if affordable
    if clean_price <= wallet_int:
        basket.append(item)
        wallet_int -= clean_price  # update wallet

# Final result
if not basket:
    print("Nothing")
else:
    print(sorted(basket))