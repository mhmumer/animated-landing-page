"use client";

import Image from "next/image";
import { Pacifico } from "next/font/google";
import { delay, motion, stagger } from "framer-motion";
import BG from "@/public/img/bg.webp";
import Img1 from "@/public/img/img-1.webp";
import Img2 from "@/public/img/img-2.webp";
import Img3 from "@/public/img/img-3.webp";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {

  const bgAnimate = {
    hidden: {
      clipPath:'polygon(21% 27%, 77% 26%, 77% 77%, 21% 77%)',
    },
    show: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, )',
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
        delay:1,
      }
    }
  }
  const textAnimate1 = {
    hidden: {
      y: '100%',
      opacity:0,
    },
    show: {
      y: 0,
      opacity: 1, 
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
        staggerChildren: 0.4,
        delayChildren:1,
      }
    }
  }
  const textAnimate2 = {
    hidden: {
      x: "0"
    },
    show:(i:any) =>({
      x: i,
     
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      }
    })
  };

  const imageAnimate = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.6,
        delayChildren: 3,
        ease:'easeInOut'
      }
    }
  };

    const imageAnimateChild = {
      hidden: {
        x: 100,
        opacity:0
      },
      show: {
        x: 0,
        opacity:1,
        transition: {
          
          ease: "easeInOut",
        },
      },
    };

    const navAnimate = {
    hidden: {
      y:'-110%'
    },
    show: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        delay:1.5
      }
    }
    };
  
  const textParagraph = {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type:'spring',
        stiffness: 60,
        delay:2.8,
      },
    },
  };
  
  return (
    <main className="h-screen px-4 overflow-hidden">
      <div className="absolute inset-0 h-screen w-screen z-0">
        <Image
          alt=""
          src={BG}
          fill
          priority={true}
          sizes="(max-width:786px) 33vw, (max-width:1024px) 50vw, 100vw"
          className="object-cover  brightness-50"
        />
      </div>
      <motion.nav
        className="flex sm:flex-row flex-col z-10 relative justify-between py-2 items-center"
        variants={navAnimate}
        initial="hidden"
        animate="show"
      >
        <div
          className={`text-xl font-bold text-yellow-200 underline ?{pasifico.className}`}
        >
          BuildPainting
        </div>
        <ul className="w-[300px] flex justify-between items-center">
          <li className="font-semibold text-[#eaeaea]">Home</li>
          <li className="font-semibold text-[#eaeaea]">About</li>
          <li className="font-semibold text-[#eaeaea]">Contact</li>
        </ul>
      </motion.nav>
      <div className="relative top-[120px]">
        <motion.div
          className="relative left-[40%] sm:left-[25%]"
          variants={textAnimate1}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className={`lg:text-[7.2rem] sm:text-5xl text-xl text-[#eaeaea] tracking-tight font-bold ${pacifico.className}`}
            variants={textAnimate2}
            custom={-120}
          >
            Painting
          </motion.h1>
        </motion.div>
        <motion.div
          className="relative left-[20%]"
          variants={textAnimate1}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className={`lg:text-8xl sm:text-5xl text-xl text-yellow-200 tracking-tighter font-bold `}
            variants={textAnimate2}
            custom={80}
          >
            Experience
          </motion.h1>
        </motion.div>
      </div>
      <motion.div
        className="flex sm:flex-row flex-col  gap-4 absolute bottom-4"
        variants={imageAnimate}
        initial="hidden"
        animate="show"
      >
        <motion.div className="relative lg:w-[300px] lg:h-[200px] sm:w-[230px] sm:h-[200px] w-[200px] h-[100px]" variants={imageAnimateChild}>
          <Image
            src={Img1}
            alt=""
            className="object-cover rounded-sm saturate-150"
            fill
            sizes="(max-width:768px) 33vw (max-width:1024px) 50vw, 100vw"
          />
        </motion.div>
        <motion.div className="relative lg:w-[300px] lg:h-[200px] sm:w-[230px] sm:h-[200px] w-[200px] h-[100px]" variants={imageAnimateChild}>
          <Image
            src={Img2}
            alt=""
            className="object-cover rounded-sm saturate-150"
            fill
            sizes="(max-width:768px) 33vw (max-width:1024px) 50vw, 100vw"
          />
        </motion.div>
        <motion.div className="relative lg:w-[300px] lg:h-[200px] sm:w-[230px] sm:h-[200px] w-[200px] h-[100px]" variants={imageAnimateChild}>
          <Image
            src={Img3}
            alt=""
            className="object-cover rounded-sm saturate-150"
            fill
            sizes="(max-width:768px) 33vw (max-width:1024px) 50vw, 100vw"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
