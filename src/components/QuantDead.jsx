function QuantDead(){

    return(
        <div className="flex justify-between mx-[3px] my-[25px]">
            <div className="w-[45%]">
                <div>
                    <p>Quantity</p>
                </div>
                <div>
                    <input className="w-[100%] h-[40px] rounded-lg border border-grey text-center" type="number" />
                </div>
                <div className="flex justify-between">
                    <button className="bg-blue rounded-[12px] p-[8px] w-[45%] my-[5px]">Pages</button>
                    <button className="bg-blue rounded-[12px] p-[8px] w-[45%] my-[5px]">Words</button>
                </div>
            </div>

            <div className="w-[40%]">
                <div>
                    <p>Deadline</p>
                </div>
                <div >
                    <input className="w-[100%] h-[40px] rounded-lg border border-grey" type="date" />
                </div>
            </div>
        </div>
    );
}

export default QuantDead;