var http = require('http');
var url = require('url');


const PORT=8080; 

function handleRequest(request, response){
  if(url.parse(request.url).pathname == "/") {
    response.end("<html>"
                 + "<head><meta http-equiv='refresh' content='20;url=http://localhost:3000/returncode'</head>"
                 +  "<h1>Authorization Endpoint</h1>"
                 + "<p>This request will hold</p>"
                 + "<ul>"
                 + "<li>client id</li>"
                 + "<li>response type</li>"
                 + "<li>scope</li>"
                 + "</ul>"
                 + "<p>The user (You!) will grant access to the resources in the scope "
                 + "but we have already taken care of that part (step 4-8). "
                 + "So now we just redirect you "
                 + "back to the client with an Authz code</p>"
                 + "<p>Note: These connections are of course HTTPS. You will be redirected back in 20 sec..."
                 + "</html>");
  } else {
    response.end("access_token: 12345");
  }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});