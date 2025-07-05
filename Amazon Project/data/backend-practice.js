// creates a new HTTP message to send to the backend
// message = request
const xhr = new XMLHttpRequest(); 

xhr.addEventListener('load', () => {
  console.log(xhr.response); // setelah load, baru get response
});

// first parameter: type of HTTP message, like GET -> get some info from the backend
// another type: 
// POST --> create something, lets us send data to the backend
// PUT --> update something 
// DELETE --> delete something
// second parameter: where to send this HTTP message (in URL)
xhr.open('GET', 'https://supersimplebackend.dev'); 
xhr.send(); // send request

/*
Status Code:
- Starts with 4 or 5 (400, 404, 500) ==> failed
If starts with 4 ==> our problem
If starts with 5 ==> backend's problem

- Starts with 2 (200, 201, 204) ==> success
*/

/*
Type of Data that Backend can Respond:
1. text
2. JSON
3. HTML
4. Image
*/


