import { useState } from "react";
import "./App.css";
import Logo from "./assets/logo2.png";
import { FaPlus } from "react-icons/fa";

import CompleteFlashcard from "./components/CompleteFlashcard";
import { Nav } from "./components/Nav/Nav";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Item from "./components/FAQ/FAQ";

function App() {
  return (
    <>
      <Nav />
      <div className="sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8 mx-auto inter my-6">
        <Breadcrumb />
        <h1 className="text-[32px] montserrat my-6 font-bold bg-gradient-to-b from-blue-950 to-blue-700 text-transparent bg-clip-text">
          Relations and Functions
        </h1>
        <ul className="flex flex-row gap-10 justify-center">
          <button className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] cursor-pointer hover:font-bold focus:font-bold focus:text-blue-800 focus:bg-[length:100%_2px] transition-all duration-300 ease-out">
            Study
          </button>
          <button className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] cursor-pointer hover:font-bold focus:font-bold focus:text-blue-800 focus:bg-[length:100%_2px] transition-all duration-300 ease-out">
            Quiz
          </button>
          <button className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] cursor-pointer hover:font-bold focus:font-bold focus:text-blue-800 focus:bg-[length:100%_2px] transition-all duration-300 ease-out">
            Test
          </button>
          <button className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] cursor-pointer hover:font-bold focus:font-bold focus:text-blue-800 focus:bg-[length:100%_2px] transition-all duration-300 ease-out">
            Games
          </button>
          <button className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] cursor-pointer hover:font-bold focus:font-bold focus:text-blue-800 focus:bg-[length:100%_2px] transition-all duration-300 ease-out">
            Others
          </button>
        </ul>
        <div className="overflow-hidden md:flex md:justify-center mt-4">
          <CompleteFlashcard />
        </div>
        <div className="mt-20 flex md:flex-row flex-col justify-between items-center">
          <div>
            <img src={Logo} alt="HyggeX" className="h-24" />
          </div>
          <div className="flex flex-row items-center gap-3 cursor-pointer">
            <div className="text-white bg-gradient-to-b from-blue-950 to-blue-700 p-2 rounded-full">
              <FaPlus size={28} />
            </div>
            <div className="text-[28px] font-semibold bg-gradient-to-b from-blue-950 to-blue-700 text-transparent bg-clip-text">
              {" "}
              Create Flashcard
            </div>
          </div>
        </div>
        <h1 className="text-[48px] font-bold bg-gradient-to-b from-blue-950 to-blue-700 text-transparent bg-clip-text mt-24 mb-12">
          FAQ
        </h1>
        <div className="flex flex-col gap-8 mb-24">
          <Item title="Can education flashcards be used for all age groups?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="How do education flashcards work?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Can education flashcards be used for test preparation?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
        </div>
      </div>
    </>
  );
}

export default App;
