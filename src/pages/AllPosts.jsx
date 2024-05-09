import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import "bootstrap-icons/font/bootstrap-icons.css";

import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleApply = () => {
    // Add your apply functionality here
    closeSidebar(); // Close the sidebar after applying
  };

  return (
    <>
      <nav className="bg-gray-800 fixed top-18 w-full   shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              {/* <button className="text-white" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button> */}
              <div className="ml-4">
                <button
                onClick={toggleSidebar}
                  className="text-white"
                   
                >
                  Sort By
                </button>
                
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                className="block w-40 sm:w-64 bg-gray-700 border border-gray-600 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <i className="bi bi-search text-gray-500"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-x-0 z-50 transition-all duration-300 ${
          isOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="bg-gray-800 bg-opacity-75 w-1/2 md:w-1/5">
          <div className="flex justify-end p-4">
            <button className="text-white" onClick={closeSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-white mb-4">Filter Options</h2>
            <div className="border-b pb-3">
              <label htmlFor="citySelect" className="text-white font-bold">
                Select City:
              </label>
              <div className="input-group pt-3">
                <i className="bi bi-geo-alt text-white"></i>
                <input
                  type="search"
                  list="city"
                  className="form-control rounded focus:outline-none search-field"
                  id="filtercity"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onKeyUp={() => filterCitys()}
                />
                <datalist id="city">
                  <option value="Akola"></option>
                  <option value="Yavatmal"></option>
                  <option value="Nagpur"></option>
                  <option value="Amravati"></option>
                </datalist>
              </div>
            </div>
            <div className="border-b py-3">
              <label htmlFor="Category" className="text-white font-bold">
                Category
              </label>
              <div>
                <option
                  className="sort-option px-4 py-2 text-white cursor-pointer"
                  onClick={() => sortServices("All")}
                >
                  All
                </option>
                {/* Your PHP-generated options go here */}
              </div>
            </div>
            {/* Happy button */}
             
            {/* Apply button */}
            <div className="flex justify-center mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={handleApply}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      

      <Container className="">
        <div className=" w-full">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-2/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default AllPosts;
