import React from 'react'
import { Link } from "react-router-dom";

const PgaesHeader = ({img, title}) => {
  return (
    <section className="navigation">
      <div className="relative">
        <img
          src={img}
          alt="background"
          className=" object-cover  brightness-50  h-screen w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/40 via-transparent to-transparent">
          {/* <h2 className="text-3xl lg:text-4xl text-white  font-jost">
            {title || "about"}
          </h2> */}
          <ul className="flex justify-center space-x-2 text-gray-300 mt-4  p-2 px-5">
            <li>
              <Link to="/" className="text-gray-200 text-xl font-jost font-medium">
                {"home"}
              </Link>
            </li>
            <li className="text-gray-200 text-xl font-jost font-medium">
              //    {title||  "about"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PgaesHeader
