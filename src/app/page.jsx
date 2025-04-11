"use client";

import { use, useEffect } from "react";

const HomePage = () => {

  let input = document.getElementById("input");

  useEffect(() => {
    console.log(xx.value);
    
  });

  
  
  return (<>
    Home page
    <input type="text" className="bg-red-400" id="input" onChange={(e) => console.log(e.target.value)}/>
  </>);
}
 
export default HomePage;