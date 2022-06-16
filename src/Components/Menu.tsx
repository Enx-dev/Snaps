import React, { useState } from "react";
import { createPortal } from "react-dom";
import closeIcon from "../images/icon-close-menu.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import calenderIcon from "../images/icon-calendar.svg";
import todoIcon from "../images/icon-todo.svg";
import planningIcon from "../images/icon-planning.svg";
import reminderIcon from "../images/icon-reminders.svg";

type Props = {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ setToggle }: Props) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return createPortal(
    <section className='fixed hide-scrollbar overflow-auto z-[1000] flex top-0 bottom-0 bg-almostBlack/75 right-0 left-0'>
      <div className=' absolute py-16 space-y-8 px-8 right-0  bg-almostWhite w-3/4 max-w-[300px]'>
        <img
          onClick={() => setToggle(false)}
          className='absolute cursor-pointer top-5 right-4'
          src={closeIcon}
          alt='close'
        />
        <ul className='space-y-4 text-mediumGray'>
          <li
            onClick={() => setShow1((prev) => !prev)}
            className=' hover:text-almostBlack flex cursor-pointer space-x-4 items-center'>
            <p>Features</p>
            <img src={show1 ? arrowUp : arrowDown} alt='controls' />
          </li>
          {show1 && (
            <div className='px-8'>
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
            </div>
          )}

          <li
            onClick={() => setShow2((prev) => !prev)}
            className=' hover:text-almostBlack flex cursor-pointer space-x-4 items-center'>
            <p>Company</p>
            <img src={show1 ? arrowUp : arrowDown} alt='controls' />
          </li>
          {show2 && (
            <div className='px-8'>
              <ul className='space-y-4'>
                <li className=' hover:text-almostBlack cursor-pointer'>
                  History
                </li>
                <li className=' hover:text-almostBlack cursor-pointer'>
                  Our Team
                </li>
                <li className=' hover:text-almostBlack cursor-pointer'>Blog</li>
              </ul>
            </div>
          )}
          <li className=' hover:text-almostBlack cursor-pointer'>Careers</li>
          <li className=' hover:text-almostBlack cursor-pointer'>About</li>
        </ul>
        <div className='flex flex-col space-y-4 text-mediumGray'>
          <button className=' hover:text-almostBlack cursor-pointer'>
            Login
          </button>
          <button className=' hover:text-almostBlack  cursor-pointer px-4 py-2 ring-2 ring-mediumGray rounded-xl'>
            Register
          </button>
        </div>
      </div>
    </section>,
    document.getElementById("menu")!
  );
};

export default Menu;
