import React, { useState } from "react";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import { IconName } from "react-icons/io5";
function SideBar() {
  const [open, setOpen] = useState(false);
  const menuList = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } transition-all relative duration-200
        pt-7 
         h-screen bg-dark-purple p-2`}
      >
   
          <div className="flex items-center ml-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
              className={`w-[44px] mr-2 relative duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h3
              className={`${
                !open && "scale-0"
              } text-white text-[22px] font-bold`}
            >
              Tubeguruji
            </h3>
          </div>
          <div
            className=" absolute -right-3 border-blue-900 bg-blue-900 border-2 rounded-full"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <AiFillLeftCircle
                className="text-white text-2xl
        transition-all rotate-[-180]"
              />
            ) : (
              <AiFillRightCircle className="text-white text-2xl" />
            )}
          </div>
  
        <ul className='pt-7'>
            {menuList.map((item,index)=>(
                <li className={`flex  rounded-md p-2
                cursor-pointer hover:bg-blue-800
                 text-gray-300 text-sm
                   
                  items-center gap-x-4 
                  group hover:font-bold
                  ${!open && " justify-center"}
               ${item.gap ? "mt-9" : "mt-2"} `}>
                    <img src={require(`./../Assets/${item.src}.png`)}
                    className="group-hover:scale-110"  />
                 
                   <span className={`${!open && "hidden"} origin-left duration-200  `}>
                {item.title}
              </span>
                </li>
            
            ))}
        </ul>
       
      </div>
    </div>
    
  );
}

export default SideBar;
