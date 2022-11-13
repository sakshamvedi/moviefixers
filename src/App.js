import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

function App() {

 const[greet,setgreet] =React.useState("");
   const [search,setsearch] = React.useState("fdyfdgyvdfgv");
   const[value,setvalue] = React.useState("none");

  function date()
  {
    var currentdate = new Date();
     var x = currentdate.getHours();
     if(x>=15 && x<19)
     {
      setgreet("Happy Evening")
     }
     else if(x>19 && x<23)
     {
      setgreet("Happy Night's")
     }
     else if(x>=13 && x<15)
     {
      setgreet("Happy Afternoon's")
     }
     else{
      setgreet("Happy Mornings")
     }
    console.log(currentdate.getHours()+":"+currentdate.getMinutes() + " ");

  }

  const [movie,setmovie] = React.useState({d:[]});

 function searchs()
 {
     setmovie({d:[]});
    call();
 }

const [image,setimage] = React.useState("");

async function call(){
  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/auto-complete',
    params: {q: `${search}`},
    headers: {
      'X-RapidAPI-Key': '754b97025bmsh1e1ceb6b711f7e5p16efdajsnb427d46d0682',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };

  const data =axios.request(options).then(function (response) {
    console.log(response.data);
    setmovie(response.data);
    

  }).catch(function (error) {
    console.error(error);
  });
}

function getimage(data)
{
 
}

React.useEffect(()=>{
  date();
  call();
  
},[])


  return (
    <div>
     <div className ="time">
  <h1>{greet}</h1>
     </div>








<input className='searchbox'  id= "search" placeholder='Search any Movie Name' onChange={(e)=>setsearch(e.target.value)}   /> <button className='search' onClick={searchs}>Search</button>
<div className='cards1' id='card1'>
  
{
 movie.d.length>0  ? movie.d.map((data,index)=>{
  try{
    var x = data.i.imageUrl;
  }
  catch(error){
      console.log(error);
  }
return(
    <div className='moviecard'  id='movieimg'>
  <img src={x} className='movieimg'></img>
  <h1>{data.l}</h1>
  <hr></hr>
  <p1>Rank :{data.rank}</p1>
  
  <br></br>
  <br></br>
  <p2>Year :{data.y}</p2>
  <br></br>
  <br></br>
  <p3>Actors :{data.s}</p3>
  <hr></hr>
  <p4>{data.q}</p4>
  </div>




  
)

  }):<div className='loader' id='loader'><img src='https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-5468d589f84e.gif'></img> </div>
}
</div>
    </div>
  );
}

export default App;
