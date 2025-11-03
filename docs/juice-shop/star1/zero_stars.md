# Zero Stars

***1 Star Challenge 2/28***

Give a devastating zero-star feedback to the store.

---

Start your 'burpsuite', go to **Proxy** Menu and click **Open browser**.
Now enter the url `localhost:3000/#/contact` to open the *Juice Shop* and navigate to `Customer Feedback`.
Create a new feedback.

*EXAMPLE:*
````
Authoer:    anonymous
Comment:    "This is a comment"
Rating:     3 Star
CAPTCHA:    9
````

Befor you *Submit* the from, activate 'Intercept on' in Burpsuite. 
Now you can see a *POST* request to `http://localhost:3000/api/Feedback/` in a list.
You can see every Information of this *Rquest*.

````json
{
  "captchaId": 4,
  "captcha": 9,
  "comment": "This is a comment (anonymous)",
  "rating": 3
}
````

Change "RATING" to `0`

````json
{
  "captchaId": 4,
  "captcha": 9,
  "comment": "This is a comment (anonymous)",
  "rating": 0 <--
}
````

Click `Forword` to send the new POST Request.


:::success Challenge completed!
You successfuly solved a challenge: Zero Stars (Give a devastating zero-star feedback to the store.)
:::