import { useRef } from "react"
import emailjs from '@emailjs/browser';

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
            <p className="text-gray-400 py-4">// Submit the form below or contact me on my Email <a href="mailto: hamedsgaming@gmail.
            com"
            className="text-[#64ffda] font-medium underline hover:text-gray-400 transition">hamedsgaming@gmail.com</a> </p>
        </div>
        <input className="bg-[#ccd6f6] py-2 px-4 placeholder:text-gray-600"  type="text" name="user_name" placeholder="Name"/>
        <input className="bg-[#ccd6f6] py-2 px-4 placeholder:text-gray-600"  type="email" name="user_email" placeholder="Email"/>
        <textarea className="bg-[#ccd6f6] py-4 px-4 placeholder:text-gray-600 h-16 min-h-[3.2rem] " placeholder="Message" name="message" rows="10"></textarea>
        {/* eslint-disable-next-line react/no-unescaped-entities*/}
        <button type="submit" value="send" className="text-white border-2 hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-gray-600 transition duration-200 mx-auto py-3 px-5 my-8">Let's Go!</button>

      </form>
    </div>
  )
}

export default Contact
