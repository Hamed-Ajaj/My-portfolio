import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <div name='home' id='home' className='w-full h-screen bg-[#0a192f] font-body'>
      
      {/* COntainer */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* text */}
        <motion.div 
        initial={{opacity:0, y:-100}}
        whileInView={{opacity:1,y:0, transition:{duration:1,ease:'easeOut',type:'spring',stiffness:100}}}
        className='text-gray-300  space-y-3'> 
            <h1 className='text-5xl text-white font-bold'>Hi, I'm <span className='text-[#64ffda] pb-[3px] border-b-4 rounded-b border-[#64ffda]'>Hamed</span>
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>
                I'm a Front End Developer
            </h2>
            <p className='text-lg text-gray-700 '>I'm a self-taught Front End developer driven by a passion for web development. My expertise includes HTML, CSS, JavaScript, and modern frameworks like React. I'm committed to continuous learning, staying updated on industry trends, and mastering new technologies.</p>
        </motion.div>

        {/* button */}
        <div className='flex mt-8'>
          <motion.button 
          initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0, transition:{duration:0.7}}}
          className='flex group justify-center items-center px-5 py-3 bg-[#64ffda] text-gray-900 rounded hover:bg-[#0a192f] border border-[#64ffda]
           hover:text-[#64ffda] '>
            <Link to="work"  smooth={true}  duration={500} className='flex justify-center items-center '>
             View Work <span className='group-hover:rotate-90 duration-200 '><HiArrowNarrowRight className='ml-3'/></span>
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Home
