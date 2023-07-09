//Importing all the components of the Calculator
import {
  UprBtns, 
  LwrBtns, 
  PaperTypes,
  QuantDead,
  PriceOrder
} from "./components/index";

//Importing useState & createContext to use ContextAPI for passing datas between childs & child and parents
import { useState,createContext } from "react";

//creating and exporting 3 context objects
export const GlobalPrice=createContext();
export const LbValue=createContext();
export const LbValue1=createContext();


function App() {

  //assigning datas which will be passed
  const [price,setPrice]=useState(12);
  const [lbV,setlbV]=useState("hs");
  const [lbV1,setlbV1]=useState(0);

  return (
    //The main div box of the calculator
    <div className="flex-col content-between bg-white rounded-[12px] shadow-md px-[20px] py-[40px] my-[28%]">
    {/* Placing All the components according to their sequence */}
    {/* Components are wrapped under 3 Provider Containers that provides the passed data to all the childs */}
    <GlobalPrice.Provider value={[price, setPrice]}>
    <LbValue.Provider value={[lbV,setlbV]}>
    <LbValue1.Provider value={[lbV1,setlbV1]}>
      <UprBtns />
      <LwrBtns />
      <PaperTypes />
      <QuantDead />
      <PriceOrder />
    </LbValue1.Provider>
    </LbValue.Provider>
    </GlobalPrice.Provider>
    </div>
  )
}

export default App;

