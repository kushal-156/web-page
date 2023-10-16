def atm():


    import random
    import datetime

    print('\n', '\n')
    print('\t','Welcome To Lakshmi Chit Fund', '\n')
    now = datetime.datetime.now()
    print('\t',now)
    print('\n')
    c = input('Enter Your User ID : ')
    ap = input('Enter Your Name : ')
    print('Welcome', ap)




    balance = 0
     
    print('\n')
    print('''Press 1, 2, 3, 4  
1)   Cash Deposit
2)   Cash Withdraw
3)   Account Details
4)   Exit
''')
    

    while True:                        
        ch = int(input())


                        
        if ch == 1:
            print('\t','\t','Cash Deposite')
            print('\n')
            amt_add = int(input('Enter Amount : '))
            balance += amt_add
            print('\n','Amount Deposited !')

            print('\n','Return To Main Menu? (y/n)')
            ah = input()
            if ah == 'y':
                print('''Press 1, 2, 3, 4  
                1)   Cash Deposit
                2)   Cash Withdraw
                3)   Account Details
                4)   Exit
                ''')
            else:
                print('\n','\t','\t','Thanks Visit Again :) ')
                break
            
                                
        elif ch == 2:
            print('\t','\t','Cash Withdraw')
            print('\n')
            amt_with = int(input('Enter Amount To Withdraw : '))
            if balance == 0 or balance < amt_with:
                print('\n','Transaction Failed, Insufficient Balance')
            else: 
                balance -= amt_with
                print('\n','Amount Withdrawn')

            print('\n','Return To Main Menu? (y/n)')
            ah = input()
            if ah == 'y':
                print('''Press 1, 2, 3, 4  
                1)   Cash Deposit
                2)   Cash Withdraw
                3)   Account Details
                4)   Exit
                ''')
            else:
                print('\n','\t','\t','Thanks Visit Again :) ')
                break       
                    
        elif ch == 3:
            print('\t','\t','Account Details')
            print('\n')
            print(now)
            print('\n')
            print('User Name : ', ap)
            print('User ID : ', random.random())
            print('Current Balance : ', balance)

            print('\n','Return To Main Menu? (y/n)')
            ah = input()
            if ah == 'y':
                print('''Press 1, 2, 3, 4  
                1)   Cash Deposit
                2)   Cash Withdraw
                3)   Account Details
                4)   Exit
                ''')
            else:
                print('\n','\t','\t','Thanks Visit Again :) ')
                break
                    
        elif ch == 4:
            print('\n','\t','\t','Thanks Visit Again :) ')
            break 

atm()