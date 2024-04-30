import { useEffect, useState } from "react";
import Hangman from "./components/Hangman";
import Welcome from './components/Welcome';

const words = ['apple','banana','cherry','date','fig','grape','kiwi'];


const words3 = ['Table', 'Chair', 'Book', 'Pen', 'Computer', 'Lamp', 'Television'];

const words4 = ['Dog', 'Cat', 'Elephant', 'Lion', 'Giraffe', 'Dolphin', 'Eagle'];



function App(){
    const [isVisible, setIsVisible] = useState(false); 
    const [isVisible2, setIsVisible2] = useState(false); 
    const [isVisible3, setIsVisible3] = useState(false); 
    const [count, setCount] = useState(0)

    useEffect(()=>{
    
    
    const key =  setInterval(() =>{
      setCount(count => count + 1)
    },1000);
    return ()=>{
      clearInterval(key);
    };
    
    },[]);
return(
    
<div className='App' >
    Tiempo transcurrido: {count} 
<Welcome/>

<div className="uno">
    {
        isVisible && <Hangman words={words} />
    }
</div>
<div className="dos">
    {
        isVisible2 && <Hangman words={words3} />
    }
</div>
<div className="tres">
    {
        isVisible3 && <Hangman words={words4} />
    }
</div>
<div className="olo">
    <button className ="custom-button" onClick={()=>{
    setIsVisible(true),
    setIsVisible2(false),setIsVisible3(false)
    }

    }>food</button>

<button className ="custom-button2" onClick={()=>{
setIsVisible(false),setIsVisible2(true),setIsVisible3(false)

}

}>things</button>
<button className ="custom-button3" onClick={()=>{
setIsVisible(false),setIsVisible2(false),
setIsVisible3(true)

}

}>animals</button>
</div>
</div>

);
}
export default App;
