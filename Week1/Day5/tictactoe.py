# Exercise Tic Tac Toe

board = [[" ", " ", " "],
         [" ", " ", " "],
         [" ", " ", " "]]

def display_board(board):
    print("\n   1   2   3")
    for i in range(3):
        print(f"{i+1}  {board[i][0]} | {board[i][1]} | {board[i][2]}")
        if i < 2:
            print("  ---+---+---")
    print()

def player_input(player):
    while True:
        try:
            row = int(input(f"Player {player}, enter row (1-3): ")) - 1
            col = int(input(f"Player {player}, enter column (1-3): ")) - 1
            
            if row < 0 or row > 2 or col < 0 or col > 2:
                print("Invalid! Enter numbers 1-3 only.")
                continue
            
            if board[row][col] != " ":
                print("That spot is taken! Try again.")
                continue
            
            return row, col
        except ValueError:
            print("Invalid input! Enter numbers only.")

def check_winner(board):
    # Check rows
    for row in board:
        if row[0] == row[1] == row[2] != " ":
            return row[0]
    
    # Check columns
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] != " ":
            return board[0][col]
    
    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] != " ":
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] != " ":
        return board[0][2]
    
    return None

def play_game():
    current_player = "X"
    
    print("Welcome to Tic Tac Toe!")
    print("Players take turns entering row and column (1-3)")
    
    while True:
        display_board(board)
        
        row, col = player_input(current_player)
        board[row][col] = current_player
        
        winner = check_winner(board)
        if winner:
            display_board(board)
            print(f"Player {winner} wins!")
            break
        
        # Check if board is full
        if all(board[r][c] != " " for r in range(3) for c in range(3)):
            display_board(board)
            print("It's a tie!")
            break
        
        # Switch player
        current_player = "O" if current_player == "X" else "X"

play_game()
