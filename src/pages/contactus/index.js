import { useState } from "react";

function Users() {
    
    const users = [
        {id:1,name:'zain',designation:'software engineer'},
        {id:2,name:'faraz',designation:'software engineer'},
        {id:3,name:'arsalan',designation:'lecturer'},
    ]

    const [details,setDetails]=useState({})
    const [isModalOpen,setIsModalOpen]=useState(false)

    const openDetails = (data)=>{
        setIsModalOpen(!isModalOpen)
        setDetails(data)
    }

    return (  
        <div className="App">
           {isModalOpen &&  <div>
                <p>{details.name}</p>
                <p>{details.designation}</p>
            </div>}
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>DESIGNATION</td>
                    </tr>
                </thead>
                <tbody>
                {users.map((item,index)=>{
                    return(
                         <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.designation}</td>
                            <td><button onClick={()=>openDetails(item)}>Details</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
