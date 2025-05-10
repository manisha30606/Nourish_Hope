// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { AiOutlineClose } from "react-icons/ai"

// const MobileMenu = () => {
//   const [open, setOpen] = useState(false)

//   const hambugerButton = <GiHamburgerMenu style={{fontSize:40}} onClick={() => setOpen(!open)}/>

//   const closeButton = <AiOutlineClose style={{fontSize:40}} onClick={() => setOpen(!open)}/>

//   return (
//       <div className='sm:hidden cursor-pointer '>
//           {open? closeButton : hambugerButton}
//           {open && <Navbar/>}
//       </div>
//   );
// };

// export default MobileMenu;