import React, { useState } from "react";
import menu from "../images/icon-menu.svg";
import BrandLogo from "../images/logo.svg";
import Menu from "./Menu";
import arrowUp from "../images/icon-arrow-up.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import calenderIcon from "../images/icon-calendar.svg";
import todoIcon from "../images/icon-todo.svg";
import planningIcon from "../images/icon-planning.svg";
import reminderIcon from "../images/icon-reminders.svg";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const Toggle = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },
};

const NavbarContainer = (props: Props) => {
  const [toogle, setToggle] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <nav className='flex z-50 relative w-full items-center justify-between p-4'>
      <div className='flex text-mediumGray space-x-4 items-center'>
        <img src={BrandLogo} alt='Brand-Logo' aria-details='Brand-Logo' />
        <ul className='lg:flex hidden  space-x-6'>
          <li
            onClick={() => setShow1(!show1)}
            className='flex 
            hover:text-almostBlack 
             cursor-pointer space-x-2 items-center'>
            <p>Features</p> <img src={show1 ? arrowUp : arrowDown} alt='' />
            <AnimatePresence>
              {" "}
              {show1 && (
                <motion.div
                  variants={Toggle}
                  initial='initial'
                  animate='animate'
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  exit='exit'
                  className='px-8 
                  hidden
                lg:block absolute top-12 left-4 p-4 rounded-lg bg-white shadow-lg z-50'>
                  <ul className='space-y-4'>
                    <li className=' hover:text-almostBlack flex cursor-pointer items-center  space-x-4'>
                      <img src={todoIcon} alt='todoIcon' />
                      <p>Todo List</p>
                    </li>
                    <li className=' hover:text-almostBlack flex cursor-pointer items-center space-x-4'>
                      <img src={calenderIcon} alt='calenderIcon' />
                      <p>Calender</p>
                    </li>
                    <li className=' hover:text-almostBlack flex cursor-pointer items-center space-x-4'>
                      <img src={reminderIcon} alt='reminderIcon' />
                      <p>Reminders</p>
                    </li>
                    <li className=' hover:text-almostBlack flex cursor-pointer items-center space-x-4'>
                      <img src={planningIcon} alt='planningIcon' />
                      <p>Planning</p>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li
            onClick={() => setShow2(!show2)}
            className='flex hover:text-almostBlack  cursor-pointer space-x-2 items-center'>
            <p>Company</p> <img src={arrowDown} alt='' />
            <AnimatePresence>
              {" "}
              {show2 && (
                <motion.div
                  variants={Toggle}
                  animate='animate'
                  initial='initial'
                  exit='exit'
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  className='px-8 hidden lg:block absolute top-12 left-50 p-4 rounded-lg bg-white shadow-lg z-50'>
                  <ul className='space-y-4'>
                    <li className=' hover:text-almostBlack cursor-pointer'>
                      History
                    </li>
                    <li className=' hover:text-almostBlack cursor-pointer'>
                      Our Team
                    </li>
                    <li className=' hover:text-almostBlack cursor-pointer'>
                      Blog
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li className='cursor-pointer hover:text-almostBlack '>Careers</li>
          <li className='cursor-pointer hover:text-almostBlack '>About</li>
        </ul>
      </div>

      <div className='hidden lg:block space-x-4 text-mediumGray hover:text-almostBlack'>
        <button>Login</button>
        <button className=' hover:ring-almostBlack cursor-pointer px-4 py-2 ring-2 ring-mediumGray rounded-xl'>
          Register
        </button>
      </div>
      <img
        className='cursor-pointer lg:hidden'
        onClick={() => setToggle(true)}
        src={menu}
        alt='menu'
        aria-details='menu toggler'
      />
      {toogle && <Menu setToggle={setToggle} />}
    </nav>
  );
};

export default NavbarContainer;
