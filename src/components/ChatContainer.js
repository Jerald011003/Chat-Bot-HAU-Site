import React, { useContext } from "react";
import { ContextApp } from "../utils/Context";
import { LuPanelLeftOpen } from "react-icons/lu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiSendPlane2Fill } from "react-icons/ri";
import Chat from "./Chat";
function ChatContainer() {
  const {
    setShowSlide,
    showSlide,
    setMobile,
    Mobile,
    chatValue,
    setChatValue,
    handleSend,
    handleKeyPress,
  } = useContext(ContextApp);

  return (
    <div
      className={
        showSlide
          ? "h-screen w-screen bg-white-500 flex items-start justify-between flex-col p-2"
          : "h-screen w-full lg:w-[calc(100%-300px)] bg-white flex items-start justify-between flex-col p-2"
      }
      style={{
        backgroundImage: "url('/campus.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
      }}
    >

      <span
        className="rounded px-3 py-[9px] hidden lg:flex items-center justify-center cursor-pointer text-gray m-1 hover:bg-gray-600 hover:text-white duration-200"
        title="Open sidebar"
        onClick={() => setShowSlide(!showSlide)}
      >
        {showSlide && <LuPanelLeftOpen />}
      </span>
      <span
        className="rounded px-3 py-[9px] lg:hidden border-white flex items-center justify-center cursor-pointer text-white mt-0 mb-3 hover:bg-gray-600 hover:text-white   border border-gray-600"
        title="Open sidebar"
        onClick={() => setMobile(!Mobile)}
      >
        
        <HiOutlineMenuAlt2 fontSize={20} />
      </span>
      {/* chat section */}
      <Chat />
      
      {/* chat input section */}
      <div className=" w-full  m-auto flex items-center justify-center flex-col gap-2 my-2">
        <span className="flex gap-2 items-center justify-center bg-white rounded-lg shadow-md w-[90%] lg:w-4/5 xl:w-4/5">
          <input
            type="text"
            placeholder="Chat ISay-A..."
            className="h-full  text-gray bg-transparent px-3 py-4 w-full border-none outline-none text-base"
            value={chatValue}
            onChange={(e) => setChatValue(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          
          <RiSendPlane2Fill
            title="send message"
            className={
              chatValue.length <= 0
                ? "text-gray-400 cursor-auto mx-3 text-xl"
                : "text-white cursor-pointer mx-3 text-3xl bg-red-500 p-1 rounded shadow-md "
            }
            onClick={handleSend}
          />
      
        </span>
        <p className="lg:text-xs text-gray-400 text-center text-[10px]">
         
        </p>
      </div>
    </div>
  );
}

export default ChatContainer;
