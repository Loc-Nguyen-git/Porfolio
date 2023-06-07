import { Link } from 'react-router-dom'
import React, { useEffect, useState} from 'react'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { github, linkedin } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`} >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to="/" 
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}  
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className="text-white text-[18px] font-bold cursor-pointer flex"> Loc Nguyen &nbsp;<span className='sm:block hidden'> | Frontend Developer </span></p>
          
        </Link>
        <div>
        <a href={`https://github.com/Loc-Nguyen-git`} target="_blank" rel="noreferrer">
          <img            
            src={github}
            alt={github}
            className="w-[50px] h-[50px]"
          />
          </a>      
        </div>

        <div>
        <a href={`https://www.linkedin.com/in/loc-ng28`} target="_blank" rel="noreferrer">
          <img
            src={linkedin}
            alt={linkedin}
            className="w-[50px] h-[50px]"
          />
          </a>
        </div>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${
                active === link.title ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' 
          onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ?  'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${
                active === link.title ? "text-white"
                : "text-secondary"
              } font-poppins text-[16px] font-medium cursor-pointer`}
              onClick={() =>{setToggle(!toggle); setActive(link.title)}}
            >
              <a href={`#${link.id}`}> {link.title}</a>
            </li>
            ))}
          </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar