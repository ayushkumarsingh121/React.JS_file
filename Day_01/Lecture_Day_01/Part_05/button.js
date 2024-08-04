let handelClick=()=>{
  alert("chala ja bhai")
}

let element = <button onClick={handelClick}>Submit</button>

let abc = ReactDOM.createRoot(document.getElementById("data"))
abc.render(element)