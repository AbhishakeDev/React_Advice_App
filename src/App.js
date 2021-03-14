import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";

function App() {
  const [Advice, setAdvice] = useState('');
  useEffect(() => {
    fetchAdvice();
  }, [])

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
        console.log(advice);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // const handler = () => {
  //   fetchAdvice();
  //   // window.location.reload();
  // }

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{Advice}</h1>
        <button onClick={fetchAdvice} className="button">
          <span>Give me Advice</span>
        </button>
      </div>
    </div>
  );
}

export default App;
