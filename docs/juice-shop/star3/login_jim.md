# Login Bender

***3 Star Challenge 2/44***

Log in with Jim's user account.

---

Start Burpsuite

Intercept on 

login with "jim@juice-sh.op"

open request

copy the request into an new text-file

append on the email address from jim@juice-sh.op* an * Astarisc 

save and close file

open sqlmap in the terminal

run sqlmap -r /path/to/the/textfile --ignore-code=401

![login_jim.png](../img/login_jim.png)


:::success Challenge completed!
You successfully solved a challenge: Login Jim (Log in with Jim's user account.)
:::
