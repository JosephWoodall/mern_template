import {useEffect, useState} from "react";
const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState("No data :(");
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/hello`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data.msg);
    }
    getData();
  }, []); 

  return (
    <>
      <h1>Template MERN App!</h1>
      <p>Data from server: {data}</p>
      <img src="cat_coughing.jpg" alt="Cat that is Coughing lol"></img>
    </>
  );
}

export default App;
