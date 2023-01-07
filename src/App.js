import React, {useState, useEffect} from "react";
import { DATA } from "./data/data";
import './App.css';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

function App() {
  const [url, setUrl] = useState(null);
  const changeUrl = (url) =>{
    setUrl(url);
  }

  useEffect(()=> {

  },[changeUrl]);
  return (
  <div className="App">
    
    <div className="header" >Radio-App</div>
    <div className="container">
      {DATA.map((item)=>{return(
        <a className="radio-station" onClick={()=>setUrl(item.url)}>
        <img src={item.image}/>
      </a>
   
      )})}
     
    </div>
    <div className="player">
      
      <AudioPlayer
        autoPlay={false}
        showSkipControls={false}
        showJumpControls={false}
        src={url}
        onPlay={e => console.log("onPlay")}
        // other props here
      />
    
          </div>
  </div>
  );
}

export default App;