
import {motion} from 'framer-motion'
import { SkillsData } from '../data/data';
const Skills = () => {
    
  return (
    
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className=''>
            <p className='text-4xl font-bold inline border-b-4 border-[#64ffda] '>Skills</p>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes*/}
            <p className='py-4 text-gray-500'>//These are the technologies that I worked With.</p>
        </div>
        <div className='w-full grid grid-cols-2 gap-4 sm:grid-cols-4 text-center py-8'>
            {SkillsData.map(({id,skill,img}) =>{
                return(
                    <motion.div key={id} 
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0, transition:{duration:0.5,ease:'easeOut'}}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true}}
                    className='shadow-md shadow-[#040c16] '>
                        <img src={img} alt="HTML" className='w-20 mx-auto'/>
                        <p className='my-4'>{skill}</p>
                    </motion.div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Skills
