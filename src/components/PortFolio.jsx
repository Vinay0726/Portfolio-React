import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Banking Website",
    img: "https://img.freepik.com/premium-vector/bank-building-banking-icons_24908-75261.jpg?w=740",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda suscipit, perspiciatis blanditiis veritatis debitis sapiente nobis! Suscipit corporis aliquam eum dolores alias quidem voluptates explicabo? In saepe repudiandae dolore",
  },
  {
    id: 2,
    title: "Crud Operation",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fauth0.com%2Fblog%2Fbuild-a-laravel-6-app-with-authentication%2F&psig=AOvVaw21fGWEpvTRnYHp_g-Wiuon&ust=1723130487662000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKijgbiX44cDFQAAAAAdAAAAABAY://img.freepik.com/premium-vector/bank-building-banking-icons_24908-75261.jpg?w=740",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda suscipit, perspiciatis blanditiis veritatis debitis sapiente nobis! Suscipit corporis aliquam eum dolores alias quidem voluptates explicabo? In saepe repudiandae dolore",
  },
  {
    id: 3,
    title: "Jeera App",
    img: "httpshttps://www.google.com/url?sa=i&url=https%3A%2F%2Fcommunity.atlassian.com%2Ft5%2FJira-articles%2FA-better-navigation-for-Jira-Cloud-is-coming-soon-available-now%2Fba-p%2F1216077&psig=AOvVaw2qB70o4X2PcqKgwEM-xGFk&ust=1723130540952000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLijx9OX44cDFQAAAAAdAAAAABAK://img.freepik.com/premium-vector/bank-building-banking-icons_24908-75261.jpg?w=740",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda suscipit, perspiciatis blanditiis veritatis debitis sapiente nobis! Suscipit corporis aliquam eum dolores alias quidem voluptates explicabo? In saepe repudiandae dolore",
  },
];

const Single = ({ items }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section>
      <div className="container flex justify-center mt-24 gap-10 h-full w-full overflow-hidden">
        <div className="h-[350px] w-[350px]" ref={ref}>
          <img src={items.img} alt="" className="h-[350px] w-[350px]" />
        </div>
        <motion.div
          className="textcontainer flex flex-col justify-center items-start h-[350px] w-[350px]"
          style={{ y }}
        >
          <h2 className="text-5xl font-semibold w-full hover:scale-x-105">{items.title}</h2>
          <p className="text-l pt-10 w-full">{items.desc}</p>
          <a href="">
            <button
              type="button"
              className="py-2 mt-5 w-20 px-4 flex justify-center items-center gap-x-2 text-l font-medium rounded-lg border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 focus:outline-none focus:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none"
            >
              Live
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

function PortFolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="Projects" className="relative" ref={ref}>
      <div className="sticky top-0 left-0 pt-[50px] text-center text-orange-300 text-6xl font-bold">
        <h1>Featured Works</h1>
        <motion.div
          className="mt-4 h-[10px] bg-green-200 rounded-lg"
          style={{ scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single items={item} key={item.id} />
      ))}
    </div>
  );
}

export default PortFolio;
