import { useState } from 'react'
import Logo from '../assets/HA-trs.png'
import { FaBars, FaTimes ,FaGithub,FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import {motion,AnimatePresence} from 'framer-motion'

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
  const ulVariants = {
    hidden:{
      opacity:0,
      height : 0,
      transition: {
        duration:0.3,
        ease:'easeInOut',
      }
    },
    visible:{
      opacity:1,
      height : '100vh',
      width : '100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      transition: {
        duration:0.3,
        ease:'easeInOut',
      }
    },
    exit:{
      opacity:0,
      height : 0,
      transition: {
        duration:0.3,
        ease:'easeInOut',
      }
    
    }
  }
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
            <motion.li 
              initial={{
                opacity:0,
                x:-10
              }}
              animate={{
                opacity:1,
                x:0,
                transition:{
                  duration:0.5,
                  ease:'easeInOut'
                }
              }}  
            className='inline-block px-4 py-2 hover:text-white cursor-pointer'>
                <Link to="home"  smooth={true}  duration={500}>
                  Home
                </Link>
            </motion.li>
            <motion.li 
            initial={{
              x:-10,
              opacity:0
            }}
            animate={{
              x:0,
              opacity:1,
              transition:{
                duration:0.6,
                ease:'easeInOut'
              }
            }} 
            className='inline-block px-4 py-2 hover:text-white cursor-pointer'>
                <Link to="about"  smooth={true}  duration={500}>
                  About
                </Link>
            </motion.li>
            <motion.li 
              initial={{
                x:-10,
                opacity:0
              }}
              animate={{
                x:0,
                opacity:1,
                transition:{
                  duration:0.7,
                  ease:'easeInOut'
                }
              }} 
            className='inline-block px-4 py-2 hover:text-white cursor-pointer'>
                <Link to="skills"  smooth={true}  duration={500}>
                  Skills
                </Link>
            </motion.li>
            <motion.li 
              initial={{
                x:-10,
                opacity:0
              }}
              animate={{
                opacity:1,
                x:0,
                transition:{
                  duration:0.75,
                  ease:'easeInOut'
                }
              }} 
            className='inline-block px-4 py-2 hover:text-white cursor-pointer'>
            <Link to="work"  smooth={true}  duration={500}>
                  Work
                </Link>
            </motion.li>
            <motion.li 
              initial={{
                x:-10,
                opacity:0
              }}
              animate={{
                opacity:1,
                x:0,
                transition:{
                  duration:0.8,
                  ease:'easeInOut'
                }
              }} 
            className='inline-block px-4 py-2 hover:text-white cursor-pointer'>
            <Link to="contact"  smooth={true}  duration={500}>
                  Contact
                </Link>
            </motion.li>
        </ul>
      </div>

      {/* hamburger */}
      <div className='block md:hidden z-10 cursor-pointer' onClick={handleClick}>
        {nav ? <FaTimes className='text-2xl'/>:<FaBars className='text-2xl'/>}
      </div>

        {/* ! mobile menu */}
        <AnimatePresence>
        <motion.div
          variants={ulVariants}
          initial='hidden'
          animate={nav?"visible":"hidden"}
          exit='exit'
          className={"absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]  space-y-8 text-4xl transition "}
        >
          <motion.ul 
           className='flex flex-col justify-center items-center space-y-8 text-4xl transition'
           initial={{
            opacity:0,
           }}
            animate={{
              opacity:1,
              transition:{
                duration:1,
                ease:'easeInOut'
              }
            }}
            exit={{
              opacity:0,
              transition:{
                duration:1,
                ease:'easeInOut'
              }
            
            }}
          >
          <motion.li>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              <motion.p
                whileHover={{scale:1.1}}
              >
                Home
              </motion.p>
            </Link>
          </motion.li>
          <motion.li>
            <Link  onClick={handleClick} to='about' smooth={true} duration={500}>
              <motion.p
                whileHover={{scale:1.1}}
              >
                About
              </motion.p>
            </Link>
          </motion.li>
          <motion.li>
            <Link  onClick={handleClick} to='skills' smooth={true} duration={500}>
              <motion.p
                whileHover={{scale:1.1}}
              >
                Skills
              </motion.p>
            </Link>
          </motion.li>
          <motion.li>
            <Link  onClick={handleClick} to='work' smooth={true} duration={500}>
              <motion.p
              whileHover={{scale:1.1}}
              >
                Work
              </motion.p>
            </Link>
          </motion.li>
          <motion.li>
            <Link  onClick={handleClick} to='contact' smooth={true} duration={500}>
              <motion.p
                whileHover={{scale:1.1}}
              >
                Contact
              </motion.p>
            </Link>
          </motion.li>
              </motion.ul>
        </motion.div>
      </AnimatePresence>

      {/* social icons */}
      <div className='hidden fixed flex-col top-[35%] left-0 md:flex'>
        <ul>
          {data.map(({id,name,link,download,styles,icon})=>{
            return(
              <li key={id} className={'flex justify-between items-center w-[160px] h-[60px] rounded-r-xl   px-2 py-1 -ml-[120px] hover:-ml-[3px]  duration-300 '+styles}>
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
