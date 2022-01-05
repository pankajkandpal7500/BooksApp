import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("■ https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>name</td>
          <td>company</td>
          
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            
          <td>{item.name}</td>
          <td>{item.company}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;