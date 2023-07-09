import { useState,useContext, useEffect } from "react";
//Importing all the context objects
import { GlobalPrice,LbValue,LbValue1 } from "../App";
//Importing the upperButtons constant to get all the button's data
import {upperButtons} from "../constansts/index";

function UprBtns(){
    //To Consume the context useContext is used
    // eslint-disable-next-line no-unused-vars
    const [price,setPrice]=useContext(GlobalPrice);
    // eslint-disable-next-line no-unused-vars
    const [lbV,setlbV]=useContext(LbValue);
    // eslint-disable-next-line no-unused-vars
    const [lbV1,setlbV1]=useContext(LbValue1);

    //The state will store the text-value of the current button
    //Bydefault the current button is "Academic Writing"
    const [active, setActive]=useState("Academic Writing");
    
    //This function is called when a particular button is clicked
    function handleClick({name,id}){
        //It stores the id of the current clicked button
        setlbV1(id);
        //It sets the price of the selected paper type
        setPrice(upperButtons[lbV1][lbV]);
        //This highlights the clicked button
        setActive(name);

    }

    //The useEffect hook will run only once at the time of reload of the page
    useEffect(()=>{
        //Sets the initial price 
        setPrice(upperButtons[lbV1][lbV]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    //This creates all the Upper Buttons
    const uprBtns = upperButtons.map((btn) =>
  <button className="bg-blue rounded-[12px] p-[8px]" style={{color:active === btn.name ? "black":"white"}} onClick={()=>{handleClick(btn)}}
  key={btn.id}>{btn.name}</button>
);

    return(

        <div className="flex justify-between w-[500px] mx-[3px] my-[25px]">

            {uprBtns}

        </div>

    );
}

export default UprBtns;