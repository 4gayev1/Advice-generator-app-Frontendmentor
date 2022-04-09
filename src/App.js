import { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceFive } from '@fortawesome/free-solid-svg-icons';



import "./style.css";
function App() {

const [alma,setAlma] = useState(true);
const [quote,setQuote] = useState({id:[],advice:[]}) 

  useEffect(()=>{
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => setQuote({id:data.slip.id,advice:data.slip.advice}));
    
},[alma])


  return (

    <div className="body">
     
      <div className="quoteDiv">

        <h3 className="quoteH">Advice #{quote.id}</h3>
        <p className="quoteP">"{quote.advice}"</p>
        <button className="changeButton" onClick={()=>{setAlma(!alma)}}>  <FontAwesomeIcon className="icon" icon={faDiceFive}/></button>

      </div>

    </div>

  );
}

export default App;

