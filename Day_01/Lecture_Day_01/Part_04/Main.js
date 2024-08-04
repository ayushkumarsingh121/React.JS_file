
// CASE 1
//let abc = ReactDOM.createRoot(document.getElementById("bloodGroup"));
// abc.render(<h1>My blood Group is O+</h1>);


// CASE 2
// let element = <h1>My blood Group is O+</h1>
// let abc = ReactDOM.createRoot(document.getElementById("bloodGroup"));
// abc.render(element);


//CASE 3 => this method where we pass the value through {} is called Interpolation 
// well in this case we pass the value of message through {} in element 
let message = "My blood Group is O+"
let element = <h1>{message}</h1>
let abc = ReactDOM.createRoot(document.getElementById("bloodGroup"));
abc.render(element);


// CASE 1, CASE 2, CASE 3 all are same 

// JSX => JavaScript with XML (HTML like code) 