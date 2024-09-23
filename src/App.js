import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users , setUsers] = useState([])

  const promise = () => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=5" , {
      method : "GET"
    }).then((response) => {
      return response.json()
    }).then((data) => {
      setUsers(data)
    })

  }


  useEffect(() => {
    
    promise()

  }, [] )


  return (
    <div className="App">

    {users.map((el) => {
      return(
        <div>

          <h1 style={{margin: "auto" , marginTop: "20px" , padding: "5px", color: "white", backgroundColor: "black"  , width: "800px" , height: "100px" , border: "2px solid"}}
          >{el.url}</h1>
  
        </div>
      )
    })}

    </div>
  );
}

export default App;
