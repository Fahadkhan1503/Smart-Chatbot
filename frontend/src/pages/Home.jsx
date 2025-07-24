import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../components/Header";
import { ChatData } from "../context/ChatContext";
import { CgProfile } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import { LoadingBig, LoadingSmall } from "../components/Loading";
import { IoMdSend } from "react-icons/io";
import { marked } from "marked";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    console.log("Toggle clicked");
    setIsOpen(!isOpen);
  };
  const {
    fetchResponse,
    messages,
    prompt,
    setPrompt,
    newRequestLoading,
    loading,
    chats,
  } = ChatData();
  const submitHandler = (e) => {
    e.preventDefault();
    fetchResponse();
  };

  const messagecontainerRef = useRef();

  useEffect(() => {
    if (messagecontainerRef.current) {
      messagecontainerRef.current.scrollTo({
        top: messagecontainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-200 via-cyan-50 to-white text-gray-800">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 flex-col">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-4 bg-white border-b border-cyan-200 text-cyan-700 text-2xl"
        >
          <GiHamburgerMenu />
        </button>

        <div className="flex-1 p-3 mb-20 md:mb-0">
          <Header />

          {loading ? (
            <LoadingBig />
          ) : (
            <div
              className="flex-1 p-3 max-h-[600px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar"
              ref={messagecontainerRef}
            >
              {messages && messages.length > 0 ? (
                messages.map((e, i) => (
                  <div key={i}>
                    {/* User Message */}
                    <div className="mb-4 flex gap-3 justify-end w-full">
                      <div className="flex items-start gap-3 w-fit max-w-[80%]">
                        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-4 rounded-xl shadow-lg text-left">
                          {e.question}
                        </div>
                        <div className="bg-white p-3 rounded-full text-blue-700 text-2xl h-12 w-12 flex items-center justify-center shadow-md">
                          <CgProfile />
                        </div>
                      </div>
                    </div>

                    {/* Bot Message */}
                    <div className="mb-4 flex justify-start w-full">
                      <div className="flex flex-col md:flex-row items-start gap-3 w-fit max-w-[90%]">
                        <div className="bg-cyan-500 p-3 rounded-full text-white text-2xl h-12 w-12 flex items-center justify-center shadow-md">
                          <FaRobot />
                        </div>
                        <div className="p-4 rounded-xl bg-white border border-cyan-200 text-gray-800 shadow text-left">
                          <p
                            className="prose max-w-full"
                            dangerouslySetInnerHTML={{
                              __html: marked.parse(e.answer || ""),
                            }}
                          ></p>
                          {/* <p dangerouslySetInnerHTML={{ __html: e.answer }}></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="flex justify-center items-center text-center h-[400px] text-gray-500 text-xl ">
                  No Chat yet
                </p>
              )}
              {newRequestLoading && <LoadingSmall />}
            </div>
          )}
        </div>
      </div>

      {chats && chats.length === 0 ? (
        ""
      ) : (
        <div
          className={`fixed bottom-0 right-0 left-auto p-4 bg-white border-t border-cyan-100 w-full md:w-[75%] shadow-md transition-all duration-300 ${
            isOpen ? "hidden md:block" : ""
          }`}
        >
          {/* // <div className="fixed bottom-0 right-0 left-auto p-4 bg-white border-t border-cyan-100 w-full md:w-[75%] shadow-md"> */}
          <form
            onSubmit={submitHandler}
            className="flex justify-center items-center gap-2"
          >
            <input
              className="flex-grow p-4 bg-cyan-100 rounded-xl outline-none focus:ring-2 focus:ring-cyan-300 text-gray-800 placeholder-gray-500"
              type="text"
              placeholder="Enter a prompt here!!"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
            />
            <button className="p-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl text-white text-2xl hover:opacity-90 transition">
              <IoMdSend />
            </button>
          </form>
        </div>
      )}
    </div>
  );

  // original
  // return (
  //   <div className="flex h-screen bg-gray-900 text-white">
  //     <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
  //     <div className="flex flex-1 flex-col ">
  //       <button
  //         onClick={toggleSidebar}
  //         className=" md:hidden p-4 bg-gray-800 text-2xl"
  //       >
  //         <GiHamburgerMenu />
  //       </button>
  //       <div className="flex-1  p-6 mb:20 md:mb-0">
  //         <Header/>
  //         <div className="flex-1 p-6 max-h-[600px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar" ref={messagecontainerRef}>
  //           {
  //             messages && messages.length>0 ? messages.map((e, i) => (
  //               <div key={i}>
  //                 <div className="mb-4 p-4 rounded bg-blue-700 text-white flex gap-1">
  //                   <div className="bg-white p-2 rounded-full text-black text-2xl h-10">
  //                     <CgProfile />
  //                   </div>
  //                   {e.question}
  //                 </div>
  //                 <div className="mb-4 p-4 rounded bg-gray-700 text-white flex gap-1">
  //                   <div className="bg-white p-2 rounded-full text-black text-2xl h-10">
  //                     <FaRobot />
  //                   </div>
  //                   <p dangerouslySetInnerHTML={{ __html: e.answer }}></p>
  //                 </div>
  //               </div>
  //             )) : ( <p>No Chat yet</p>
  //           )}
  //           {newRequestLoading && <LoadingSmall />}
  //         </div>
  //       </div>
  //     </div>
  //     <div className="fixed bottom-0 right-0 left-auto p-4 bg-gray-900 w-full md:w-[75%]">
  //       <form onSubmit={submitHandler} className="flex justify-center items-center">
  //         <input className="flex-grow p-4 bg-gray-700 rounded-l text-white outline-none"
  //         type="text" placeholder="Enter a prompt here!!" value={prompt} onChange={e=> setPrompt(e.target.value)} required />
  //         <button className="p-4 bg-gray-700 rounded-r text-2xl text-white"> <IoMdSend /> </button>
  //       </form>
  //     </div>
  //   </div>
  // );
};

export default Home;
