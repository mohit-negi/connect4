
# def checkforWinner(arr,r,iterR,c,iterC,currPlayer):
#     '''
#     - returns whether player won or not
#     arr = 2d matrix 
#     r = current row index
#     c = current col index
#     iterR = iterator for row
#     iterC = iterator for column
#     '''
#     cnt = 0
#     while(r < len(arr) and r >= 0 and c < len(arr[0]) and c>= 0 and arr[r][c] == currPlayer):
#         print(r,c)
#         #score tally
#         if arr[r][c] == 0:
#             cnt+=1
            
#         #dynamic iteration
#         if iterR != 0 and iterC != 0:
#             r+=iterR
#             c+=iterC
#         elif iterR == 0:
#             c+=iterC
#         elif iterC == 0:
#             r+=iterR
#     #check if won
#     if cnt >= 4:
#         print("Curr player wins")
#     else:
#         print(False)
    
#     return cnt >= 4
# def judge(i=0,j=0,arr=[],currPlayer=0):
#     data =      [
#         [0, 1, 2, 3, 4, 5, 6], 
#         [0, 1, 2, 3, 4, 5, 6], 
#         [0, 1, 2, 0, 4, 5, 6], 
#         [0, 1, 2, 0, 0, 0, 0], 
#         [0, 1, 2, 3, 0, 5, 6], 
#         [0, 1, 2, 3, 4, 0, 6], 
#         [0, 1, 2, 3, 4, 5, 0]
#         ]
#     dataLen = len(data)-1
#     currRow = 3
#     currCol = 3
    
#     if(currRow <= dataLen and currRow >= 0 and currCol <= dataLen and currCol >= currPlayer):
#         print(f" At row : {currRow}  & col : {currCol}")
        
#         #vertically
#         if currRow-1 <= dataLen and currRow-1 >= 0 and data[currRow-1][currCol] == currPlayer:
#             print("checking for upwards vertical")
#             checkforWinner(data,currRow,-1,currCol,0)
#         if currRow+1 <= dataLen and currRow-1 >= 0 and data[currRow+1][currCol] == currPlayer:
#             print("checking for downwards vertical")
#             checkforWinner(data,currRow,+1,currCol,0)
#         #horizontally
#         if currCol+1 <= dataLen and currCol+1 >= 0 and data[currRow][currCol+1] == currPlayer:
#             print("check for rightwards horizontal")
#             checkforWinner(data,currRow,0,currCol,+1)
#         if currCol-1 <= dataLen and currCol-1 >= 0 and data[currRow][currCol-1] == currPlayer:
#             print("check for leftwards horizontal")
#             checkforWinner(data,currRow,0,currCol,-1)
#         #skewed as forward slash
#         if currRow+1 <= dataLen and currRow+1 >= 0 and currCol+1 <= dataLen and currCol+1 >= 0 and data[currRow+1][currCol+1] == currPlayer:
#             print("check for incrementing forward slash")
#             checkforWinner(data,currRow,+1,currCol,+1)
#         if currRow-1 <= dataLen and currRow-1 >= 0 and currCol-1 <= dataLen and currCol-1 >= 0 and data[currRow-1][currCol-1] == currPlayer:
#             print("check for incrementing forward slash")
#             checkforWinner(data,currRow,-1,currCol,-1)
#         #skewed as back slash
#         if currRow-1 <= dataLen and currRow-1 >= 0 and currCol+1 <= dataLen and currCol+1 >= 0 and data[currRow-1][currCol+1] == 0:
#             print("check for incrementing back slash")
#             checkforWinner(data,currRow,-1,currCol,+1)
#         if currRow+1 <= dataLen and currRow+1 >= 0 and currCol-1 <= dataLen and currCol-1 >= 0 and data[currRow+1][currCol-1] == 0:
#             print("check for decrementing back slash")
#             checkforWinner(data,currRow,+1,currCol,-1)
           
#     else:
#         print("Invalid play")
# judge()