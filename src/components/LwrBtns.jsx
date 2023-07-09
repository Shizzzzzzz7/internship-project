import { useState,useContext,useEffect } from "react";
//Importing all the context objects
import { GlobalPrice,LbValue,LbValue1 } from "../App";
//Importing the upperButtons & lowerButtons constant to get all the button's data
import {lowerButtons,upperButtons} from "../constansts/index";

function LwrBtns(){

    //Constants to determine the final price
    const lb=["hs","ug","b","p"];

    //To Consume the context useContext is used
    // eslint-disable-next-line no-unused-vars
    const [price,setPrice]=useContext(GlobalPrice);
    // eslint-disable-next-line no-unused-vars
    const [lbV,setlbV]=useContext(LbValue);
    // eslint-disable-next-line no-unused-vars
    const [lbV1,setlbV1]=useContext(LbValue1);

     //The state will store the text-value of the current button
    //Bydefault the current button is "High School"
    const [active, setActive]=useState("High School");

    //This function is called when a particular button is clicked
    function handleClick(name,id){
        //storing the constansts
        setlbV(lb[id]);
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
    const lwrBtns = lowerButtons.map((btn) =>
  <button className="bg-blue rounded-[12px] p-[8px]" style={{color:active === btn.name ? "black":"white"}} onClick={()=>{handleClick(btn.name,btn.id)}}
  key={btn.id}>{btn.name}</button>
);

    return(

        <div className="flex justify-between text-white w-[500px] mx-[3px] my-[25px]">

            {lwrBtns}

        </div>

    );
}

export default LwrBtns;