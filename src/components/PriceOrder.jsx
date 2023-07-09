import { useContext } from "react";
//Importing the context object
import { GlobalPrice } from "../App";

function PriceOrder(){

    //To Consume the context useContext is used
    // eslint-disable-next-line no-unused-vars
    const [price,setPrice]=useContext(GlobalPrice);

    return(

        <div className="flex justify-between mx-[3px] w-[500px] my-[25px]">

            <div>
                <div>
                    <p>Approx Price</p>
                </div>
                <div>
                    {/*This shows the total price for a particular type of paper*/}
                    <p className="text-3xl font-bold">$ {price}</p>
                </div>
            </div>
                
            <div>
                {/*The PROCCED TO ORDER button */}
                <button className="bg-yellow p-3 font-bold duration-500 hover:scale-110 hover:shadow-md rounded-[12px] w-[250px] h-[60px]">PROCEED TO ORDER</button>
            </div>
        </div>
    );
}


export default PriceOrder;