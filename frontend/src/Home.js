import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const nav=useNavigate();
    const Inp=() =>
    {
        nav("/input");
    }
    return(
        <>
        <div className='div1'>
        
            <img src="Moni.jpg" width="100px"length="100px"align="right"></img>
            
        </div>
        <div claassName='div2'>
        <input type="button" name='name1' placeholder='click me' align="center"  ></input>
        </div>
        <div className='div3'>
        <img src="Moni.jpg"width="100px"length="100px"align="right"></img>
        </div>
        <div>
            <button onClick={Inp}>input</button>
        </div>
        
        </>
    );
}
export default Home;
