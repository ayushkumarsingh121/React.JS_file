// First way

// let element1 = <h1>Ayush</h1>;
// let element2 = <h2>Kumar</h2>;

// let element = (
//   <div>
//     {element1}
//     {element2}
//   </div>
// );

// let abc = ReactDOM.createRoot(document.getElementById("gojo"));
// abc.render(element);


// Second Way 

// let element1 = <h1>Ayush</h1>;
// let element2 = <h2>Kumar</h2>;

// let element = [
//   element1,
//   element2
// ];

// let abc = ReactDOM.createRoot(document.getElementById("gojo"));
// abc.render(element);


// third way => React.Fragment => we use this because when we use 1st and 2nd way we need to keep it inside the div tag and div tag space to kata hai hi 
// so if we use React.Fragment so ye direct hoga esko wrap krne ke liye kch nahi chaiye and eska yani React.Fragment eska short cut bhi hai vah short cut fourth way mai hai

// let element1 = <h1>Ayush</h1>;
// let element2 = <h2>Kumar</h2>;

// let element = (
//   <React.Fragment>
//     {element1}
//     {element2}
//   </React.Fragment>
// );

// let abc = ReactDOM.createRoot(document.getElementById("gojo"));
// abc.render(element);


// Fourth Way
let element1 = <h1>Ayush</h1>;
let element2 = <h2>Kumar</h2>;

let element = (
  <>
    {element1}
    {element2}
  </>
);

let abc = ReactDOM.createRoot(document.getElementById("gojo"));
abc.render(element);

// All way are right we can do anyone there is no any problem