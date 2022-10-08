import React from 'react'
import '../styles/App.css';
const App = () => {
  
  return (
     <div id="main">
      <h1 id="marco-polo">Marco</h1>
      <button id="marco-polo-toggler" onClick={onclickHandler}>
        Polo
      </button>
    </div>
  );
  
}
  const onclickHandler = () => {
  let a = document.getElementById("marco-polo");
  a.innerText === "Marco" ? (a.innerText = "Polo") : (a.innerText = "Marco");

  let b = document.getElementById("marco-polo-toggler");
  b.innerText === "Polo" ? (b.innerText = "Marco") : (b.innerText = "Polo");
  };


export default App;
