
import { use, useState } from "react";
import type { ItechList } from "../../types/Techlisttypes";
import AvailableTech from "./AvailableTech";

interface TechListProps {
    TechListPromise: Promise<ItechList[]>

}




const TechList = ({ TechListPromise }: TechListProps) => {
    // console.log(TechListPromise)
    const TechList = use(TechListPromise)
    // console.log(TechList,'TechList')
    const [buttonType, setbuttonType] = useState("avilable")
    // console.log(buttonType);
const handleUpdateBtnType =(type)=>{
setbuttonType(type);

}


    return (
        <><div className="container mx-auto">
            <div className="flex justify-between gap-4 mb-2">
                <h2 className="font-bold text-xl"></h2>
                <div>
                    <button 
                    onClick={()=>handleUpdateBtnType(available)}
                    className={`btn btn-success ${buttonType === 'available' ? 'btn-success' : ''}`}>Available</button>
                    {/* <button className={`btn btn-success ${buttonType==='selected'?'btn-success':''}`}>Seleted</button> */}
                </div>
            </div>
        </div><div>
                <AvailableTech TechList={TechList} />
            </div></>
    );
};

export default TechList;