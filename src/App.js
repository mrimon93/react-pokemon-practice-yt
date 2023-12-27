import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState();
  const [name, setName] = useState();

  const URL = "https://pokeapi.co/api/v2/pokemon/ditto"

  useEffect( () => {
    axios.get(URL).then((response) => {
      //console.log(response.data
      setData(response.data);
      setName(response.data.name);
    }).catch(err) => {
      window.alert(err);
    }
  })

  return (
    <div className="App">
    <h1>Pokemon</h1>
    <h2>{name}</h2>
    </div>
  );
}

export default App;
