// import React from 'react'
// import { useRouter } from 'next/router'

// function Home() {

//     const navigate = useRouter();
//     const viewNavigation = (newRoute)=>{
//         try {
//             console.log(newRoute)
//             console.log(document)
//             if (!document.startViewTransition) {
//                  navigate.push(newRoute);
//             }else {
//                 return document.startViewTransition(() => {
//                     navigate.push(newRoute);
//                  });
//             } 
//         } catch (error) {
//             console.log(error)
//         }
        
//     }

//     return (
//         <div>
//             <h2>Home</h2>
//         <button onClick={()=>viewNavigation('home')}>contact us</button>
//      </div>
//     )
// }

// export default Home
const Home = () => (
    <div>{4 + 2}</div>
    );
export default Home
    