#give details
curl https://jsonplaceholder.typicode.com/posts

#-I or --head for header info
curl -I https://jsonplaceholder.typicode.com/posts

#-o for store data in output file
curl -o op.txt https://jsonplaceholder.typicode.com/posts #to store posts
curl -oI op1.txt https://jsonplaceholder.typicode.com/posts #to store posts header

#limit transfer rate
curl -o a.jpeg --limit-rate 500B https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg

#post request using -d or --data
curl -d "title=hello&body=helloworld" https://jsonplaceholder.typicode.com/posts

#put use -X PUT flag with -d flag
curl -X PUT -d "title=hello&body=helloworld" https://jsonplaceholder.typicode.com/posts/3

#delete with -X DELETE flag
curl -X DELETE https://jsonplaceholder.typicode.com/posts/3


#Authendicate user using -u
curl -u username:pass site