import React from "react";
function list(props)
{
    return (
        <div className="listdiv" onClick={()=>{
            props.deleteItem(props.id)
        }}>
            <li>{props.value}</li>
        </div>
        
    )
}
export default list;