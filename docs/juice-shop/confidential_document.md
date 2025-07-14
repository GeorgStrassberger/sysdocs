# Confidential Document

***1 Star Challenge 3/28***

Access a confidential document.

---

Go to /about section and start the 'burpsuite' with 'intercapt on', click on the link for the Terms.
You will get a Markdown file.
Now look into your `burpsuite proxy` and open the GET Request. You can see the path to *http://localhost:3000/ftp/legal.md*. 
We can see an *FTP* server exists. 
Try to open there with `http://localhost:3000/ftp`. 

The file what we searching for is `acquisitions.md`.

````url
http://localhost:3000/ftp/acquisitions.md
````

:::success Challenge completed!
:::