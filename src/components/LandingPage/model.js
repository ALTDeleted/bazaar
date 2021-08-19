import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useWindowSize from "./useWindowSize";



//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

// const lastName = {
//   initial: {
//     y: 0,
//   },
//   animate: {
//     y: 0,
//     transition: {
//       delayChildren: 0.6,
//       staggerChildren: 0.04,
//       staggerDirection: 1,
//     },
//   },
// };

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);
  
  const windowSize = useWindowSize();

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div className='location'>
                <span>Aditya Team</span>
              </div>
              <div className='mua'>Devsnest</div>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>B</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>Z</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>R</motion.span>
              </motion.span>
              {/* <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}></motion.span>
                <motion.span variants={letter}></motion.span>
              </motion.span> */}
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: 524,
                  height: 650,
                }}
                animate={{
                  y:"10%",
                  width: windowSize.innerWidth,
                  height: windowSize.innerHeight,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("./images/spidy.jpeg").default}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -100 : -600,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              A fresh apporoach to  <br /> Shopping.
            </h2>
            <p>
            Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app. Consumers find a product of interest by visiting the website of the retailer directly or by searching among alternative vendors using a shopping search engine, which displays the same product's availability and pricing at different e-retailers. As of 2020, customers can shop online using a range of different computers and devices, including desktop computers, laptops, tablet computers and smartphones.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
