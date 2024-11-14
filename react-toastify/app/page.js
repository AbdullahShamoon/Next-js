"use client"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const notify = () => {
    toast('🦄 Wow so easy!')
  }
  return (
  
      <div className="">
      <button onClick={notify} className="btn border-4 border-black rounded-full m-4 p-2 text-xl font-bold ">Click</button>
      <ToastContainer />

      </div>
    
  );
}
