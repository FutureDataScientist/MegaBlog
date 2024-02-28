n=5
t=1
if n==0:
    print(1)
for i in range(1,n+1):
    t=t*i
    
print(t)

def fac(num):
    if num==0:
        return 1
    elif num==1:
        return 1
    else:
        return num*fac(num-1)
    
num=7
if num<0:
    print("enter positive number")
print(fac(num))


m=10
a=0
b=1
c=0
t=0
for i in range(1,m+1):
    c=a+b
    print(a)
    a=b
    b=c
print(c)

def feb(p):
    if p<=1:
        return p
    else:
        return(feb(p-1)+feb(p-2))
p=10
k=0
if(p<=0):
    print("enter only positive numbers")
else:
    for i in range(p):
        print(feb(i))
        k+=feb(i)
print(k)