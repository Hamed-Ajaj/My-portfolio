

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex items-center justify-center p-4'>
      <form action="https://getform.io/f/7a09df68-3464-44f4-ad6f-78bfbc6bc64f" method="POST" className='flex flex-col max-w-[600px] w-full space-y-4'>
        <div className='pb-8'>
            <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-[#64ffda]'>Contact</p>
            <p className="text-gray-400 py-4">// Submit the form below or contact me on my Email <a href="mailto: hamedsgaming@gmail.
            com"
            className="text-[#64ffda] font-medium underline hover:text-gray-400 transition">hamedsgaming@gmail.com</a> </p>
        </div>
        <input className="bg-[#ccd6f6] py-2 px-4 placeholder:text-gray-600"  type="text" placeholder="Name" name="name" />
        <input className="bg-[#ccd6f6] py-2 px-4 placeholder:text-gray-600"  type="email" placeholder="Email" name="email" />
        <textarea className="bg-[#ccd6f6] py-4 px-4 placeholder:text-gray-600 h-16 min-h-[3.2rem] " placeholder="Message" name="message" rows="10"></textarea>
        <button className="text-white border-2 hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-gray-600 transition duration-200 mx-auto py-3 px-5 my-8">Let's Go!</button>

      </form>
    </div>
  )
}

export default Contact
