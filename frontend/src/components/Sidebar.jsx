import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { ChatData } from "../context/ChatContext";
import { MdDelete } from "react-icons/md";
import { LoadingSpinner } from "./Loading";
import { UserData } from "../context/UserContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { chats, createChat, createLod, setSelected, deleteChat } = ChatData();
  const {logoutHandler} = UserData();

  const deleteChatHandler = (id) => {
    if(confirm("Are you sure you want to delete this chat??")) {
      deleteChat(id);
    }
  }

  const clickEvent = (id) => {
    setSelected(id);
    toggleSidebar();
  }

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white p-6 transition-transform transform md:relative
      md:translate-x-0 md:w-1/4 md:block ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="md:hidden p-2 mb-6 bg-white border border-cyan-200 rounded-full text-3xl text-cyan-600 shadow-md hover:bg-cyan-100 transition"
        onClick={toggleSidebar}
      >
        <IoIosCloseCircle />
      </button>
  
      <div className="text-3xl font-bold text-cyan-700 mb-8 text-center tracking-wide">
        Faham Chatbot
      </div>
  
      <div className="mb-6">
        <button
          onClick={createChat}
          className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
        >
          {createLod ? <LoadingSpinner /> : " New Chat"}
        </button>
      </div>
  
      <div>
        <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider font-medium">Recent</p>
        <div className="max-h-[500px] overflow-y-auto mb-24 md:mb-0 thin-scrollbar space-y-3">
          {chats && chats.length > 0 ? (
            chats.map((e) => (
              <button
                key={e._id}
                onClick={() => clickEvent(e._id)}
                className="w-full flex justify-between items-center px-4 py-3 bg-white rounded-xl border border-cyan-200 hover:bg-cyan-100 transition-all shadow-sm"
              >
                <span className="text-gray-700 truncate max-w-[70%]">{e.latestMessage.slice(0, 38)}...</span>
                <button onClick={()=> deleteChatHandler(e._id)} className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition text-lg">
                  <MdDelete />
                </button>
              </button>
            ))
          ) : (
            <p className="text-gray-500 text-center">No Chats yet</p>
          )}
        </div>
      </div>
  
      <div className="absolute bottom-0 left-0 right-0 mb-6 px-6">
        <button onClick={logoutHandler} className="w-full py-3 font-bold bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-xl shadow-lg hover:opacity-90 transition">
           Logout
        </button>
      </div>
    </div>
  );
    
  
  
  
  // //Original
  // return (
  //   <div
  //     className={`fixed inset-0 bg-gray-800 p-4 transition-transform transform md:relative 
  //   md:translate-x-0 md:w-1/4 md:block ${
  //     isOpen ? "translate-x-0" : "-translate-x-full"
  //   }`}
  //   >
  //     <button
  //       className="md:hidden p-2 mb-4 bg-gray-700 rounded text-2xl"
  //       onClick={toggleSidebar}
  //     >
  //       <IoIosCloseCircle />
  //     </button>
  //     <div className="text-2xl font-semibold mb-6">Faham Chatbot</div>
  //     <div className="mb-4">
  //       <button onClick={createChat} className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded">
  //         {createLod?<LoadingSpinner/>: "New Chat + " }
  //       </button>
  //     </div>
  //     <div>
  //       <p className="text-sm text-gray-400 mb-2">Recent</p>
  //       <div className="max-h-[500px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar">
  //         {chats && chats.length > 0 ? (
  //           chats.map((e) => (
  //             <button key={e._id}
  //               className="w-full text-left py-2 px-2 bg-gray-700 hover:bg-gray-600 
  //           rounded mt-2 flex justify-between items-center"
  //           onClick={() => setSelected(e._id)}
  //             >
  //               <span>{e.latestMessage.slice(0,38)}...</span>
  //               <button className=" bg-red-600 text-white text-xl px-3 py-2 rounded-md hover:bg-red-700" ><MdDelete/></button>
  //             </button>
  //           ))
  //         ) : (
  //           <p> No Chats yet</p>
  //         )}
  //       </div>
  //     </div>
  //     <div className="absolute bottom-0  mb-6 w-full">
  //       <button className=" bg-red-600 text-white text-xl px-3 py-2 rounded-md hover:bg-red-700" >
  //      Logout
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default Sidebar;
