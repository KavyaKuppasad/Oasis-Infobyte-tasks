#this is the simple encryption Password method
Password="this is a Secret"
print(Password)
Password=Password[::-1]
print(Password)
Password=Password.replace(" ","pwd")
print(Password)
Password="22748"+Password
print(Password)

#Now this is the Smiple Decryption Password Method 

print('\n Decrypting...')

Password = Password[5::]
print(Password)
Password=Password.replace('pwd',' ')
print(Password)
Password=Password[::-1]
print(Password)