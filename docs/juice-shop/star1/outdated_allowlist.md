# Outdated Allowlist

***1 Star Challenge 11/28***

Let us redirect you to one of our crypto currency addresses which are not promoted any longer.

----

Start with open the Developertool in your browser and search for ***redirect***. 

Redirect Link: `href="./redirect?to=https://github.com/juice-shop/juice-shop"`

![redirect_link.png](../img/redirect_link.png)

and search for other typical **crypto** terms such as ***blockchain***.

Blockchain Link: `herf="https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm"`

![blockchain_link.png](../img/blockchain_link.png)

combine the successful hits and assemble a new url query.

`http://192.168.178.33:3000` + `/redirect?to=` + `https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm`

When you open the link in your private PENTEST network. You will see a empty page. 

````
http://192.168.178.33:3000/redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm
````

Go back to the start page once and the success message appears.

:::success Challenge completed!
You successfully solved a challenge: Outdated Allowlist (Let us redirect you to one of our crypto currency addresses which are not promoted any longer.)
:::
