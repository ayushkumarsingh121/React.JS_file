 // First way to use color 
//  let design = {color: "red", backgroundColor: "yellow"};

//  let element1 = <h1 style={design}>Ayush</h1>;
//  let element2 = <h2>Kumar</h2>;

//  let element = (
//    <>
//      {element1}
//      {element2}
//    </>
//  );

//  let abc = ReactDOM.createRoot(document.getElementById("gojo"));
//  abc.render(element);




 // Second way to use color 
//  let element1 = <h1 style={{color: "blue", backgroundColor: "lightpink"}}>Ayush</h1>;
//  let element2 = <h2>Kumar</h2>;

//  let element = (
//    <>
//      {element1}
//      {element2}
//    </>
//  );

//  let abc = ReactDOM.createRoot(document.getElementById("gojo"));
//  abc.render(element);




 // Third way to use color 

 //  let design = {property: {color: "blue", backgroundColor: "pink"}}
 //  let element1 = <h1 style={design.property}>Ayush</h1>;
 //  let element2 = <h2>Kumar</h2>;
 
 //  let element = (
 //    <>
 //      {element1}
 //      {element2}
 //    </>
 //  );
 
 //  let abc = ReactDOM.createRoot(document.getElementById("gojo"));
 //  abc.render(element);



  // Fourth way to use color 
//  revisit karo es par
let design = {property: {color: "blue", backgroundColor: "pink"}}
 let element1 = <h1 style={design.property}>Ayush</h1>;
 let element2 = <h2>Kumar</h2>;

 let element = (
   <>
     {element1}
     {element2}
   </>
 );

 let abc = ReactDOM.createRoot(document.getElementById("gojo"));
 abc.render(element);

 