import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
    const data =[
        {
            id:1,
            skill:'HTML',
            img:HTML,
        },
        {
            id:2,
            skill:'CSS',
            img:CSS,
        },
        {
            id:3,
            skill:'JavaScript',
            img:JavaScript,
        },
        {
            id:4,
            skill:'ReactJs',
            img:ReactImg,
        },
        {
            id:5,
            skill:'Github',
            img:GitHub,
        },
        {
            id:6,
            skill:'TailwindCss',
            img:Tailwind,
        },
    ]
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
            {data.map(({id,skill,img}) =>{
                return(
                    <div key={id} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={img} alt="HTML" className='w-20 mx-auto'/>
                        <p className='my-4'>{skill}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Skills
