import { useState } from 'react'
import Logo from '../assets/HA-trs.png'
import { FaBars, FaTimes ,FaGithub,FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
  const data = [
    {
      id:1,
      name:"LinkedIn",
      icon:<FaLinkedin size={30}/>,
      link:"https://www.linkedin.com/in/hamed-ajaj19/",
      styles:"bg-blue-600"
    },
    {
      id:2,
      name:"GitHub",
      icon:<FaGithub size={30}/>,
      link:"https://github.com/Hamed-Ajaj",
      styles:"bg-slate-800"
    },
    {
      id:3,
      name:"Email",
      icon:<HiOutlineMail size={30}/>,
      link:"mailto:hamedsgaming@gmail.com",
      styles:"bg-[#529f84]"
    },
    {
      id:5,
      name:"Resume",
      icon:<BsFillPersonLinesFill size={30}/>,
      link:"/public/Hamed ajajCV.pdf",
      styles:"bg-gray-500",
      download:true
    }
  ]
    const [nav,setNav] = useState(false);

    const handleClick = () =>setNav(!nav)

  return (
    // !logo
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
      <Link to="home"  smooth={true}  duration={500}>
        <img src={Logo} alt="logo" className='w-[80px]   
        cursor-pointer'/>
      </Link>
      </div>

      {/* menu */}
      <div className='hidden md:flex text-lg'>
      <ul >
            <li className='inline-block px-4 py-2 hover:text-white cursor-pointer'>
                <Link to="home"  smooth={true}  duration={500}>
                  Home
                </Link>
            </li>
            <li className='inline-block px-4 py-2 hover:text-white cursor-pointer'>
                <Link to="about"  smooth={true}  duration={500}>
                  About
                </Link>
            </li>
            <li className='inline-block px-4 py-2 hover:text-white cursor-pointer'>
                <Link to="skills"  smooth={true}  duration={500}>
                  Skills
                </Link>
            </li>
            <li className='inline-block px-4 py-2 hover:text-white cursor-pointer'>
            <Link to="work"  smooth={true}  duration={500}>
                  Work
                </Link>
            </li>
            <li className='inline-block px-4 py-2 hover:text-white cursor-pointer'>
            <Link to="contact"  smooth={true}  duration={500}>
                  Contact
                </Link>
            </li>
        </ul>
      </div>

      {/* hamburger */}
      <div className='block md:hidden z-10 cursor-pointer' onClick={handleClick}>
        {nav ? <FaTimes className='text-2xl'/>:<FaBars className='text-2xl'/>}
      </div>

      {/* ! mobile menu */}
        <ul className={nav?"absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center space-y-6 text-4xl transition ":"hidden"}>
        <li>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link  onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link  onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link  onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link  onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
            </ul>
  

      {/* social icons */}
      <div className='hidden fixed flex-col top-[35%] left-0 md:flex'>
        <ul>
          {data.map(({id,name,link,download,styles,icon})=>{
            return(
              <li key={id} className={'flex justify-between items-center w-[160px] h-[60px] rounded-r-xl   px-2 py-1 -ml-[120px] hover:-ml-[5px]  duration-300 '+styles}>
                <a href={link} download ={download} className='flex justify-between items-center w-full text-gray-300'>
                    {name} {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
