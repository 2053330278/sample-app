import React, { useState } from "react";
import axios from 'axios';
export const Input=()=>
{
    const [name,sname]=useState([]);
    const Submit=async()=>
    {
        try
        {
            const res=await axios.post("http://localhost:8000/input/"+name)
            {
                if(res.data)
                {
                    alert("saved");
                }
                else
                {
                    alert("try again");
                }
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }
    return (
        <>
        <label>name:</label>
        <input type="text" onChange={(e)=>sname(e.target.value)}></input>
        <button onClick={Submit}>Submit</button>
        </>
    )
}