// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Create a middleware to parse the body of the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create a variable to store the comments
const comments = [];
// Create a route to get the comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
// Create a route to add a comment
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.json(comment);
});
// Start the server
app.listen(3000, () => {
    console.log('Server started');
});
```

### 4. Create the client

```javascript
// Path: client.js
// Create a function to get the comments
function getComments() {
    fetch('http://localhost:3000/comments')
        .then(response => response.json())
        .then(comments => {
            console.log(comments);
        });
}
// Create a function to add a comment
function addComment(comment) {
    fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment })
    })
        .then(response => response.json())
        .then(comment => {
            console.log(comment);
        });
}
// Call the functions
getComments();
addComment('Hello world');
```

### 5. Run the server

```bash
node comments.js
```

### 6. Run the client

```bash
node client.js
```

### 7. Expected output

```bash
Server started
[]
Hello world
```

### 8. Explanation

In the previous example, we created a simple web server to store comments. The server is a REST API that has two routes: one to get the comments and another to add a comment. The server is created using the Express framework, and we use the `body-parser` middleware to parse the body of the request. The server is listening on port 3000.

We also created a simple client to interact with the server. The client is a JavaScript file that uses the `fetch` function to make HTTP requests to the server. We created two functions: one to get the comments and another to add a comment. We also called