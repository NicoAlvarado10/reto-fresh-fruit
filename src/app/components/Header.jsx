'use client'
import { useState } from "react";
import { Search, Menu } from "lucide-react";
import orange from "../../../public/orange.webp";
import { motion } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative h-screen max-xl:h-full">
      <nav className="flex justify-between items-center max-w-10/12 max-md:max-w-full mx-auto py-8 px-4 font-poppins max-md:bg-primary">
        <a className="text-3xl max-md:text-2xl" href="#">
          EAT <span className="font-semibold text-primary max-md:text-white">FRUITS</span>
        </a>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex items-center gap-8 font-semibold">
          <li><a className="hover:text-primary transition duration-150" href="#">Home</a></li>
          <li><a className="hover:text-primary transition duration-150" href="#">Healthfacts</a></li>
          <li><a className="hover:text-primary transition duration-150" href="#">About</a></li>
          <li><a className="hover:text-primary transition duration-150" href="#">Contact</a></li>
          <li><a className="hover:text-primary transition duration-150" href="#">Info</a></li>
        </ul>

        {/* Menú en pantallas pequeñas */}
        <div className="flex items-center gap-8 ">
          <a className="transition duration-150 text-white max-xl:text-black hover:text-black max-md:hidden" href="#">
            <Search size={30} />
          </a>
          {/* Botón de menú en dispositivos móviles */}
          <button
            onClick={toggleMenu}
            className=" hidden max-md:flex cursor-pointer transition duration-150 text-white max-xl:text-black hover:text-black"
          >
            <Menu size={30} />
          </button>
          <button
            className=" max-md:hidden cursor-pointer transition duration-150 text-white max-xl:text-black hover:text-black"
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Menú desplegable para móviles */}
      <div
        className={`absolute top-24 left-0 w-full bg-white transition-all duration-300 z-50 ${isMenuOpen ? "max-md:h-auto h-screen" : "h-0 overflow-hidden"}`}
      >
        {isMenuOpen && (
          <div className="flex flex-col items-center gap-4 py-4 bg-primary">
            <a className="hover:text-white transition duration-150 font-semibold" href="#">Home</a>
            <a className="hover:text-white transition duration-150 font-semibold" href="#">Healthfacts</a>
            <a className="hover:text-white transition duration-150 font-semibold" href="#">About</a>
            <a className="hover:text-white transition duration-150 font-semibold" href="#">Contact</a>
            <a className="hover:text-white transition duration-150 font-semibold" href="#">Info</a>
          </div>
        )}
      </div>

      <section className="max-w-10/12 mx-auto grid grid-cols-2 items-center gap-4 max-xl:gap-12 max-xl:grid-cols-1">
      <div>
    <motion.h1 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8}}
      className="my-4"
    >
      Get <span className="text-primary font-semibold ">FRESH</span><br /> <span className="text-primary font-semibold">FRUITS</span> Today
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-4 mb-10"
    >
      Orange is not just a tasty fruit, it's more. Get to know the multiple health benefits of adding orange in your daily diet
    </motion.p>

    <motion.a 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="inline-block px-6 py-3 rounded-4xl bg-primary font-semibold"
      href="#"
    >
      Know More
    </motion.a>
  </div>
        <div className="relative w-10/12 mx-auto img floating-letters">
          <motion.img
          initial={{opacity:0.5 , scale:0}}
          animate={{opacity:1 , scale:1}}
          transition={{duration:0.8}}
          className="object-cover" src={orange.src} alt="orange" />
          <motion.span
          initial={{ opacity: 0,  }}
          animate={{ opacity: 1, }}
          transition={{ duration: 0.8 }}
          className="letter text-8xl o">O</motion.span>

          <motion.span
           initial={{ opacity: 0,  }}
           animate={{ opacity: 1, }}
         transition={{ duration: 0.8 ,delay: 0.2}}
          className="letter text-8xl r">R</motion.span>

          <motion.span
           initial={{ opacity: 0,  }}
           animate={{ opacity: 1, }}
         transition={{ duration: 0.8, delay:0.3 }}
          className="letter text-8xl a">A</motion.span>

          <motion.span
           initial={{ opacity: 0,  }}
           animate={{ opacity: 1, }}
         transition={{ duration: 0.8, delay:0.4 }}
          className="letter text-8xl n">N</motion.span>

          <motion.span
           initial={{ opacity: 0,  }}
           animate={{ opacity: 1, }}
         transition={{ duration: 0.8, delay:0.5 }}
          className="letter text-8xl e">E</motion.span>

          <motion.span
           initial={{ opacity: 0,  }}
           animate={{ opacity: 1, }}
         transition={{ duration: 0.8, delay:0.6 }}
          className="letter text-8xl g">G</motion.span>
        </div>
      </section>
    </header>
  );
};
