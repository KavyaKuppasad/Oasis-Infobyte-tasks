first = input("enter your number")
sign = input("enter sign (+, -, *, /, %)")
last = input("enter last number")

first = int(first)
last = int(last)

if sign == "+":
    print(first+last)
elif sign == "-":
    print(first-last)    
elif sign == "*":
    print(first*last)
elif sign == "/":
    print(first/last)
elif sign == "%":
    print(first%last)
else:
    print("invalid output")
