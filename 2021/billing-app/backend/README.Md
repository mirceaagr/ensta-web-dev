#Add json server

To simulate a backend server we will be using json-server
https://github.com/typicode/json-server

You can install it globally by
npm install -g json-server

Create a db.json file that will serve as your mock database and run 
json-server --watch db.json

#Add rest client
For this course you can use any application to create/form requests (eg. Postman or CURL)
However, if you want to make requests directly from VS code install the REST Client plugin.

After that create a file called requests.http and add your requests inside.

