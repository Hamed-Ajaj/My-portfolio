import { useRef } from "react"
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zw4330l', 
      'template_4jfa6ak', 
      form.current, 
      'McM2c4wQ3bh3Mv1xr')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex items-center justify-center p-4'>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full space-y-4'>
        <div className='pb-8'>
            <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-[#64ffda]'>Contact</p>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes*/}
            <p className="text-gray-400 py-4 flex space-x-2"><motion.p
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5,ease: "easeInOut"}}
            className="mr-2"
            >//</motion.p> Submit the form below or contact me on my Email <a href="mailto: hamedsgaming@gmail.
            com"
            className="text-[#64ffda] font-medium underline hover:text-gray-400 transition">hamedsgaming@gmail.com</a> </p>
        </div>
        <motion.input 
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.5,ease: "easeInOut"}}
        className="bg-[#ccd6f6] py-2 px-4 placeholder:text-gray-600"  type="text" name="user_name" placeholder="Name"/>
        <motion.input 
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.5,ease: "easeInOut"}}
        className="bg-[#ccd6f6] py-2 px-4 placeholder:text-gray-600"  type="email" name="user_email" placeholder="Email"/>
        <motion.textarea 
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.5,ease: "easeInOut"}}
        className="bg-[#ccd6f6] py-4 px-4 placeholder:text-gray-600 h-16 min-h-[3.2rem] " placeholder="Message" name="message" rows="10"></motion.textarea>
        {/* eslint-disable-next-line react/no-unescaped-entities*/}
        <motion.button 
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        whileHover={{scale: 1.1, backgroundColor: '#64ffda',borderColor: '#64ffda', color: '#0a192f', transition: {duration: 0.3,ease: "easeInOut"}}}
        transition={{duration: 0.5,ease: "easeInOut"}}
        type="submit" value="send" className="text-white border-2   mx-auto py-3 px-5 my-8">Let's Go!</motion.button>

      </form>
    </div>
  )
}

export default Contact
