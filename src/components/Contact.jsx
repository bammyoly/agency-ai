import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.appent("access_key", "471442da-980c-48b8-8749-8591e95c5069");
        try{
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if(data.success)
            {
                toast.success('Message Sent')
                event.target.reset();
            }
            else
            {
                toast.error(data.message)
            }
        } catch(error) {
            toast.error(error.message)
        }
    }

  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}
    id='contact' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 
    text-gray-700 dark:text-white'>
        <Title title='Send Us A Message' desc='We are always available to respond to your messages' />
        <motion.form 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

            <div>
                <p className='mb-2 text-sm font-medium'>Your Name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon} alt='' />
                    <input type='text' placeholder='Your Full Name' className='w-full p-3 text-sm outline-none' />
                </div>
            </div>

            <div>
                <p className='mb-2 text-sm font-medium'>Email Address</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.email_icon} alt='' />
                    <input type='email' placeholder='Your Email Address' className='w-full p-3 text-sm outline-none' required />
                </div>
            </div>

            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea rows={8} placeholder='Enter Message' className='w-full p-3 text-sm outline-none rounded-lg
                border border-gray-300 dark:border-gray-600'></textarea>
            </div>

            <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full 
            cursor-pointer hover-scale-103 transition-all'>Submit <img className='w-4' src={assets.arrow_icon} alt='' /></button>
        </motion.form>
    </motion.div>
  )
}

export default Contact
