
import Darkmood from "./Darkmood";
import { useState } from "react";




const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
 
  return (
      <div>
      <header className="body-font">
  <div className={'container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'}>
    <a className={'flex title-font font-medium items-center  mb-4 md:mb-0'}>
   
      <span className="ml-3 text-xl">Dark mood</span>
    </a>
    <nav className={'md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'}>
      <a className={'mr-5 hover:text-gray-900'}>First Link</a>
      <a className={'mr-5 hover:text-gray-900'}>Second Link</a>
      <a className={'mr-5 hover:text-gray-900'}>Third Link</a>
      <a className={'mr-5 hover:text-gray-900'}>Fourth Link</a>
    </nav>
    <Darkmood/>
        
  </div>

      </header>
      </div>
   
)
}

export default Navbar