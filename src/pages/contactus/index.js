import React from 'react'
import { useRouter } from 'next/router'

const ContactUs = () => {

    const navigate = useRouter();
    const viewNavigation = (newRoute)=>{
        try {
            console.log(newRoute)
        if (!document.startViewTransition) {
             navigate.push(newRoute);
        }else {
            return document.startViewTransition(() => {
                navigate.push(newRoute);
             });
        } 
        } catch (error) {
            console.log(error)
            
        }
       
    }


return (
        <div> 
            <h2>Contact</h2>
           <button onClick={()=>viewNavigation('home')}>Home</button>
        </div>
    )
}

export default ContactUs;
