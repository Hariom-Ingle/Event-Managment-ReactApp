import React, { useState } from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const [callClicked, setCallClicked] = useState(false);
  const [chatClicked, setChatClicked] = useState(false);

  const handleCallClick = () => {
    setCallClicked(true);
    setTimeout(() => {
      setCallClicked(false);
    }, 200);
  };

  const handleChatClick = () => {
    setChatClicked(true);
    setTimeout(() => {
      setChatClicked(false);
    }, 200);
  };

  return (
    <Link to={`/post/${$id}`}>
      <div
        className="w-auto flex bg-gray-200 border-solid border-2 rounded-xl column "
        style={{ width: "1200px" }}

      >
        <div className="w-96 justify-center">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <div className="  adjucement  flex coloum">


        </div>
        <div className="ml-6 flex-grow">
          <div className="flex justify-between items-center pt-2">
            <h2 className="text-xl font-bold">{title}</h2>
            <i className="p-5 bi bi-heart"></i>
          </div>
          <div className=" flex gap-1.5">
          <i class="bi bi-star-fill text-yellow-500 "></i>
          <i class="bi bi-star-fill text-yellow-500 "></i>
          <i class="bi bi-star-fill text-yellow-500 "></i>
          <i class="bi bi-star-half text-yellow-500 "></i>
          <i class="bi bi-star text-yellow-500"></i>
          </div>
          <div className="justify-between pt-2">
            <i className="bi bi-geo-alt not-italic">
              At Post oChatari Tq Patur dist AKola
            </i>
          </div>

          <div className="flex gap-5 mt-2">
            <button className=" rounded-md border-solid border-2 border-sky-500   bg-gray-300 py-1 px-2 text-xs ">Catering</button>            
            <button className=" rounded-md border-solid border-2 border-sky-500   bg-gray-300 py-1 px-2 text-xs   " > Lawns</button>         
            </div>
          <div className="pt-2 flex  gap-4 ">
            <Link to="tel:789456123">
              <button
                className={`rounded-lg py-1.5 px-2.5 bg-green-700 ${
                  callClicked ? "scale-105" : ""
                }`}
                onClick={handleCallClick}
              >
                <i className="bi bi-telephone not-italic"> 789456123 </i>
              </button>
            </Link>

            <Link to="https://wa.link/ldhknj">
              <button
                className={`rounded-lg py-1.5 px-2.5 bg-green-700 ${
                  chatClicked ? "scale-105" : ""
                }`}
                onClick={handleChatClick}
              >
                <i className="bi bi-whatsapp not-italic"> Chat</i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
