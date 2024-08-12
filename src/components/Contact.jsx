import React, { useRef, useState } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
import {motion,useInView} from "framer-motion";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref); //, { once: true }
   const formRef = useRef();
   const [success, setSuccess] = useState(false);
   const [error, setError] = useState(false);

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_85gwale",
         "template_l2ty6rc",
         formRef.current,
         "VIOFaisGRbGTs62FE"
       )
       .then(
         (result) => {
           setSuccess(true);

           setTimeout(() => {
             setSuccess(false);
           }, 5000);
           setError(false);
         },
         (error) => {
           setSuccess(false);
           setError(true);
           setTimeout(() => {
             setError(false);
           }, 5000);
         }
       );
   };

  return (
    <div>
      <div
        className="h-full w-full flex flex-col md:flex-row justify-center items-center gap-14 relative"
        ref={ref}
      >
        <motion.div
          className="h-[350px] w-[400px]  flex  flex-col justify-start items-start gap-5"
          initial={{ opacity: 0, y: 200 }}
          animate={{
            y: isInView ? 0 : -200,
            opacity: isInView ? 1 : 0,
            transition: {
              duration: 1,
              staggerChildren: 0.1,
            },
          }}
        >
          <h2 className="text-4xl ml-24 md:ml-0 text-gray-800 font-serif font-bold">
            Let's Connect
          </h2>
          <h3 className="text-2xl md:text-xl mt-10 ml-5 md:ml-0 flex justify-center items-center gap-2 font-medium text-gray-600 font-serif">
            Mail <MdOutlineMarkEmailUnread />
          </h3>
          <p className="-mt-5 ml-6 md:ml-0">vinay.thaware1@gmail.com</p>
          <h3 className="text-2xl md:text-xl ml-36 md:ml-0 font-medium flex justify-center items-center gap-2 text-gray-600 font-serif">
            Address
            <CiLocationOn />
          </h3>
          <p className="-mt-5 ml-36 md:ml-0">Nagpur</p>
          <h3 className="text-2xl md:text-xl ml-64 md:ml-0 font-medium flex justify-center items-center gap-2 text-gray-600 font-serif">
            Phone
            <IoCallOutline />
          </h3>
          <p className="-mt-5 ml-64 md:ml-0">+91 9373007087</p>
        </motion.div>
        <motion.div
          className="h-[350px]  w-[400px] absolute top-[45%] z-[2] md:mt-0 md:top-[12%] md:left-[51.5%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 5,
            delay: 3,
          }}
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="h-full w-full flex gap-10 flex-col items-start md:gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full h-14 border border-black p-2 rounded-md outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full h-14 border border-black p-2 rounded-md outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full border flex border-black p-2 rounded-md h-32 outline-none"
            />
            <div className="h-12 w-full">
              <button
                className="bg-orange-200 h-full w-full text-gray-800 font-bold rounded-md hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 flex justify-center items-center"
                type="submit"
                aria-label="Send Message"
              >
                <span className="mr-2">Send Message</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                  ></path>
                </svg>
              </button>
            </div>
            {error && (
              <p className="text-red-500"> Failed to send message.</p>
            )}
            {success && (
              <p className="text-green-500">
                Message sent successfully!
              </p>
            )}
          </form>
        </motion.div>
        <div className="h-[350px] w-[400px]">
          <motion.svg
            version="1.1"
            viewBox="0 0 1504 1384"
            className="w-full h-full -mt-36 md:-mt-10"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 3,
              delay: 1,
            }}
          >
            <path transform="translate(0)" fill="none" opacity="0" />
            <path transform="translate(670,139)" fill="#0B0A1B" />
            <path transform="translate(729,287)" fill="#0B060E" />
            <path transform="translate(670,139)" fill="none" />
            <path transform="translate(640,125)" fill="#0B060E" />
            <path
              transform="translate(673,133)"
              d="m0 0h64l41 1 32 5 36 8 25 7 33 11 29 12 28 13 22 12 22 13 21 14 18 13 16 13 11 9 13 12 8 7 24 24v2h2l7 8 12 14 13 16 13 18 11 16 13 21 11 19 14 27 13 30 10 27 9 28 9 36 6 33 2 19v114l-2 16-5 25-8 29-7 21-11 26-11 23-14 24-9 14-11 15-9 11-12 14-22 22-11 9-17 13-22 14-22 12-24 10-25 8-25 6-36 4h-31l-34-4-28-6-27-8-27-10-28-13-27-15-24-15-12-8-15-11-16-12-16-13-14-12-15-14-17-16-68-68-7-8-12-12-7-8-12-12-7-8-11-12-7-8-12-13-7-8-9-10-9-11-12-14-13-17-10-15-8-14-9-19-8-21-6-23-4-20-2-23 1-27 3-19 5-21 7-20 10-19 8-12 9-11 9-10 9-9 13-10 16-10 15-6 30-7 33-6 7-1h12l10 6 8 7 8 10 10 15 14 27 8 20 8 24 4 19v30l-4 12 4 1v2l-6 5-3 3-3-1 4-6-8 4-6 2-46 10-20 6-10 5-4 5v16l5 13 7 9 11 12 12 13 41 41 8 7 12 12 8 7 52 52 7 8 11 11 7 8 51 51 8 7 12 10 12 6 10 2h7l7-3 4-5 7-21 6-24 7-30 4-8 7-7 9-4 4-1h21l17 3 21 6 25 9 25 12 16 10 12 9 11 10 7 11 1 2v9l-10 52-7 26-7 14-12 16-9 11-14 14-11 9v1l23-4 25-6 21-8 23-12 16-11 13-10 7-7 8-7 12-13 10-12 12-17 9-15 12-22 13-31 8-24 7-29 4-27 1-17v-40l-3-37-4-25-8-37-9-30-8-22-8-19-9-20-15-28-12-20-11-16-8-11-9-12-11-13-18-20-19-19-8-7-14-12-17-13-18-13-22-14-26-14-24-12-19-8-24-9-33-10-28-6-33-5-21-2-17-1h-44l-30 2-36 5-27 6-35 10-32 12-20 9-16 8-19 10-20 12-22 15-13 10-14 11-11 10-8 7-10 9-10 10-7 8-12 13-13 16-14 19-10 15-8 13-10 18-13 25-12 28-12 34-7 25-7 32-5 36-2 29v44l3 34 3 23 8 37 8 28 11 31 16 36 12 23 12 20 8 12 12 17 10 13 14 17 12 13 25 25 11 9 11 10 13 10 17 12 12 8 18 11 24 13 17 8 13 6 23 9 33 11 28 7 27 5 32 4 49 3 10 3 10 6 7 8 5 11v18l-4 10-7 9-8 5-4 1h-56l-26-1-22-3-31-6-32-8-36-12-21-8-25-11-26-13-24-14-18-11-20-14-21-16-28-24-8-8-2-1v-2l-4-2-12-12-7-8-7-7-9-11-9-10-13-17-15-20-7-11-10-16-10-17-15-29-12-27-11-29-9-28-8-30-5-24-3-20-2-22v-119l3-24 4-24 7-30 8-28 9-26 11-27 10-22 10-19 10-18 12-19 10-15 13-18 11-14 9-11 13-15 16-17 16-16 8-7 9-8 11-9 13-11 11-8 23-16 21-13 25-14 26-13 31-13 18-7 36-11 29-7 31-6 24-3zm-3 6-26 2-32 5-29 6-26 7-36 12-29 12-24 11-23 12-22 13-17 11-16 11-17 13-16 13-11 10-8 7-17 16-14 15-12 13-9 11-11 14-12 16-10 15-12 19-14 25-13 26-14 34-8 22-8 26-8 31-5 28-5 38-1 11-1 42 1 38 4 38 5 30 7 30 9 31 11 31 13 30 12 25 13 23 11 18 8 12 9 13 13 17 13 16 10 11 7 8 31 31 8 7 14 12 13 10 20 15 15 10 21 13 25 14 22 11 30 13 34 12 35 10 38 8 26 4 21 2 26 1h26l10-2 6-4 6-7 3-7 1-5v-8l-3-12-7-9-10-5-3-1-11-1-38-2-27-3-29-5-33-8-26-8-27-10-24-11-26-13-21-12-25-17-16-12-10-8-13-11-24-22-9-9-7-8-11-12-9-11-14-18-14-20-8-13-13-22-15-30-12-29-12-36-6-23-6-28-5-36-2-35v-22l2-38 6-40 6-28 7-26 11-32 5-13 7-15 12-25 9-16 14-23 8-11 10-14 10-13 12-14 7-8 11-12 21-21 11-9 13-11 14-11 17-12 17-11 17-10 14-8 23-11 21-9 33-12 28-8 27-6 38-6 25-2h63l30 3 32 5 25 6 31 9 32 12 25 11 22 11 21 12 22 14 16 12 13 10 11 9 11 10 8 7 25 25 9 11 9 10 13 17 13 18 9 14 11 18 12 22 12 25 13 33 8 25 6 23 5 24 5 31 3 38v37l-4 36-8 36-9 27-10 23-8 16-8 15-12 19-9 12-8 10-12 14-12 12-11 9-13 10-19 12-16 8-19 8-22 6-24 4-26 2h-6l3-3 12-7 16-13 8-7 10-10 12-16 6-10 5-12 6-26 9-49-1-7-6-8-10-10-16-11-22-12-24-10-18-6-20-5-13-2h-14l-12 3-6 4-4 6-9 40-7 25-5 13-7 9-7 3h-14l-13-4-12-8-15-14-12-11-35-35-7-8-22-22-7-8-51-51h-2l-1-3-8-7-9-9-8-7-42-42-7-8-9-9-10-13-6-12-2-9v-9l3-8 9-8 15-6 51-13 19-7 4-5 2-6v-23l-4-20-8-26-9-22-8-16-10-17-9-12-10-10-7-4-8 1-25 4-11 2-17 3-19 5-12 5-16 10-11 9-12 11-10 11-10 14-9 17-8 20-6 22-2 10-1 10v41l3 20 7 28 7 20 11 24 14 23 9 12 9 11 12 14 13 15 9 10 7 8 9 10 11 12 9 10 11 12 16 17 9 9 1 2h2v2h2l2 4 75 75 8 7 15 14 11 9 17 14 19 14 14 10 19 12 15 9 18 10 15 8 28 12 16 6 27 8 22 5 29 4 12 1h35l26-3 28-6 30-10 26-12 18-10 14-9 11-8 13-10 13-12 21-21 9-11 13-17 15-23 12-22 10-21 10-25 9-27 8-31 4-21 3-31 1-20v-21l-2-37-4-36-6-32-7-28-9-30-9-25-12-28-11-23-13-23-13-22-14-21-14-19-13-16-12-14-15-16-20-20-8-7-14-12-16-13-18-13-27-18-22-13-35-18-30-13-24-9-24-8-27-7-36-7-29-4-27-2z"
              fill="#ECB23B"
            />
            <path transform="translate(726,306)" fill="#0B060F" />
            <path transform="translate(726,403)" fill="#0B0A1B" />
            <path transform="translate(681,199)" fill="#ECB33B" />
            <path transform="translate(343,367)" fill="#ECB23B" />
            <path transform="translate(738,313)" fill="#0B060E" />
            <path transform="translate(726,403)" fill="#0B060E" />
            <path transform="translate(673,133)" fill="#EDB33C" />
            <path
              transform="translate(723,298)"
              d="m0 0h14l20 1 29 4 29 6 25 7 20 7 21 9 25 12 23 13 22 15 13 10 11 9 17 16 8 7 14 15 7 8 13 16 10 14 10 15 10 17 10 18 12 27 9 25 8 27 6 30 3 22 2 25v15l-5 5-9 1h-14l-34-1-2-6-2-30-4-28-5-22-6-20-8-22-11-24-9-17-11-18-12-16-10-13-11-12-19-19-22-18-17-12-15-9-18-10-21-10-24-9-22-6-29-6-26-3-29-2-1-3v-59zm3 8-1 2v45l1 1 30 2 30 5 30 7 31 11 28 13 18 10 14 9 17 12 11 9 10 9 8 7 17 17 9 11 10 12 12 17 13 21 14 27 12 31 7 24 5 26 3 22 2 29 3 2h45l1-1v-22l-4-34-5-26-7-26-9-26-10-24-14-28-14-23-10-14-9-12-12-14-7-8-11-12-16-15-11-9-15-12-17-12-20-12-16-9-16-8-21-9-19-7-20-6-28-6-29-4-25-2z"
              fill="#F8C94B"
            />
            <path transform="translate(420,664)" fill="#0C060E" />
            <path
              transform="translate(681,199)"
              d="m0 0h63l30 3 32 5 25 6 31 9 32 12 25 11 22 11 21 12 22 14 16 12 13 10 11 9 11 10 8 7 26 26 9 11 9 10 13 17 13 18 9 14 11 18 12 22 3 6 3 11v2l-1 3-12-22-8-15-8-13-11-18-5-7-5-5-8-11-9-12-11-13-18-20-19-19-8-7-14-12-17-13-18-13-22-14-26-14-24-12-19-8-24-9-33-10-28-6-33-5-21-2-17-1h-44l-30 2-36 5-27 6-35 10-32 12-20 9-16 8-19 10-20 12-22 15-13 10-14 11-11 10-8 7-10 9-10 10-7 8-12 13-13 16-14 19-5 7-5 5-6 9-2 4-3 1-1-3 7-10 2-3 2-4 9-13 6-7 3-5 7-9 4-1 4-6 1-4 3-6 7-7 7-8 24-24 11-9 13-11 14-11 17-12 17-11 17-10 14-8 23-11 21-9 33-12 28-8 27-6 38-6z"
              fill="#F8C344"
            />
            <path
              transform="translate(728,395)"
              d="m0 0 23 1 27 4 28 7 23 8 20 9 16 8 20 12 18 13 11 10 8 7 13 12 7 8 8 9 11 14 8 12 11 18 8 15 9 21 9 26 6 26 4 29 1 14v11l-1 4-23 1-38-1-2-5-2-24-3-19-5-21-8-23-10-21-10-17-10-14-13-16-16-16-14-11-15-11-28-15-25-10-18-5-24-4-32-2-2-3v-53l2-6zm-2 8-1 44 1 4 31 3 20 4 20 6 16 6 25 12 15 9 12 9 10 8 10 9 17 17 13 17 10 15 9 16 9 19 8 24 5 21 3 20 1 18 2 3h47l1-1v-12l-4-31-5-25-6-20-11-28-13-25-10-16-12-17-13-15-7-8-10-10-11-9-9-8-17-12-23-14-23-11-23-9-18-5-25-5-15-2-13-1z"
              fill="#ECB23B"
            />
            <path
              transform="translate(1171,389)"
              d="m0 0 5 5 17 29 10 19 12 26 14 35 6 16-3-12v-3l-2-3 1-5 2 3 11 34 9 36 6 33 2 19v114l-2 16-5 25-8 29-7 21-11 26-11 23-14 24-9 14-11 15-9 11-12 14-22 22-11 9-17 13-22 14-22 12-24 10-25 8-25 6-36 4h-31l-34-4-28-6-27-8-27-10-28-13-27-15-24-15-12-8-1-2 5 2 2 1 1-2 3 1v2l4 2 4 4 4 2 6-1 13 8 18 10 15 8 28 12 16 6 27 8 22 5 29 4 12 1h35l26-3 28-6 30-10 26-12 18-10 14-9 11-8 13-10 13-12 20-20 9-11 13-17 15-23 12-22 10-21 10-25 9-27 8-31 4-21 3-31 1-20v-21l-2-37-4-36-6-32-7-28-9-30-9-25-12-28-11-23-13-23-12-20z"
              fill="#ECB23B"
            />
          </motion.svg>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center h-32 w-full">
        <p className="flex justify-center items-center gap-1 text-sm">
          Vinay Thaware <FaRegCopyright /> 2024
        </p>
        <img src="/logo.png" className="neon-blue h-16 w-16 " alt="" />
        <div className="flex justify-center items-center gap-10 ">
          <a href="http://linkedin.com/in/vinay-thaware-7116aa266">
            <motion.img
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.4 }}
              transition={{ duration: 0.2 }}
              className="h-4 w-4 md:h-6 md:w-6 blue "
              src="/linkedin.svg"
              alt=""
            />
          </a>
          <a href="https://github.com/Vinay0726">
            {" "}
            <motion.img
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.4 }}
              transition={{ duration: 0.2 }}
              className="h-4 w-4 md:h-6 md:w-6 blue"
              src="/github.svg"
              alt=""
            />
          </a>
          <a href="https://twitter.com/vinaythaware1">
            <motion.img
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.4 }}
              transition={{ duration: 0.2 }}
              className="h-4 w-4 md:h-6 md:w-6 blue"
              src="/twitter-x.svg"
              alt=""
            />
          </a>
          <a href="mailto:vinay.thaware1@gmail.com">
            <motion.img
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.4 }}
              transition={{ duration: 0.2 }}
              className="h-4 w-4 md:h-6 md:w-6 blue"
              src="/email.svg"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/mr.vinz_1?igsh=cmNxZ3h2MTR2YnBu">
            <motion.img
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.4 }}
              transition={{ duration: 0.2 }}
              className="h-4 w-4 md:h-6 md:w-6 blue"
              src="/instagram.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
