import { useState } from "react";

function GeometryShapes() {

    const [coordinates,setCoordinates] = []

    const onChange = (index,item) => {
        const temCoordinates = [...coordinates]
        temCoordinates[index] = item;
        useMemo(() => calculateCordinates(coordinates), [coordinates]);

    }
  
    return (  
        <div className="">
            <div>
                <button onClick={()=>setCoordinates([...coordinates,0])}></button>
                <label>Coordinate</label>
                {coordinates.map((item,index)=>{
                    return(
                        <input value={item} onChange={()=>{index,item}} />
                        )
                    })}
            </div>

        </div>
    );
}

function calculateCordinates([]) {
    //Here will be shapes coordinate calcuation logic
    return 
  }
  

export default GeometryShapes;
