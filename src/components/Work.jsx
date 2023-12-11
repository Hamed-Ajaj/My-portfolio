import workImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
import {data} from '../data/data.js'
const Work = () => {
    const project = data
  return (
    <div name="work" className="w-full text-gray-300 md:h-screen bg-[#0a192f]">
        {/* container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#64ffda]">Work</p>
                 {/*eslint-disable-next-line react/jsx-no-comment-textnodes*/}
                <p className="py-6 text-gray-400 text-base font-medium">//Check out some of my recent work.</p>
            </div>
            {/* grid item */}
            <div  
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {/* grid item */}
                {project?.map((item, index) => (
                <div
                    key={index}
                    style={{ backgroundImage: `url(${item.image})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md 
                            flex justify-center text-center items-center mx-auto content-div "
                >
                    {/* Hover effect for images */}
                    <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">
                        {item.name}
                    </span>
                    <div className="pt-8 text-center ">
                        {/* eslint-disable-next-line */}
                        <a href={item.github} target="_blank">
                        <button
                            className="text-center rounded-lg px-4 py-3 m-2
                                    bg-white text-gray-700 font-bold text-lg"
                        >
                            Code
                        </button>
                        </a>
                        {/* eslint-disable-next-line */}
                        <a href={item.live} target="_blank">
                        <button
                            className="text-center rounded-lg px-4 py-3 m-2
                                    bg-white text-gray-700 font-bold text-lg"
                        >
                            Live
                        </button>
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work
