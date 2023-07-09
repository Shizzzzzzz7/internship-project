import { paperTypes } from "../constansts";

function PaperTypes(){


    //This creates all the options of papertypes
    const papers = paperTypes.map((paper)=>
         <option key={paper.id}>
            {paper.name}
        </option>
    );

    return(

        <div className="flex-col w-[500px] mx-[3px] my-[25px]">
        
            <div className="m-[5px]">
                <p>Type of Paper</p>
            </div>

            <div>
                {/*This creates the dropdown menu for the paper types*/}
                <select defaultValue={'DEFAULT'} className="w-[100%] h-[40px] rounded-lg border border-grey text-center">
                <option value="DEFAULT" style={{color:"gray"}} disabled>Select...</option>
                    {papers}
                </select>
            </div>
    
        </div>
    );
}


export default PaperTypes;