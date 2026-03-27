import React from "react";
import Img from "../assets/photo-1.png";
import Services from "./Services";
import TrustSection from "./TrustSection";
import Card from "./Card";

function Home() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <section className="grid md:grid-cols-2 gap-10 items-center px-8 py-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Quality Care for <br />
              Your <span className="text-blue-600">Loved Ones</span>, <br />
              at Home.
            </h1>

            <p className="text-gray-600 mt-6">
              Find verified, professional caregivers for elderly care, nursing,
              and childcare tailored to your family's needs.
            </p>

            <div className="bg-white shadow-md rounded-xl p-4 mt-8 flex flex-col md:flex-row gap-3">
              <select className="border p-3 rounded-lg w-full">
                <option>Elderly Care</option>
                <option>Child Care</option>
              </select>

              <input
                type="text"
                placeholder="Your Location"
                className="border p-3 rounded-lg w-full"
              />

              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>

          <div className="relative">
            <img src={Img} alt="" className="rounded-2xl shadow-lg" />

            <div className="absolute bottom-4 left-4 bg-white shadow-md px-5 py-3 rounded-xl">
              <h2 className="text-blue-600 font-bold text-xl">4.9/5</h2>
              <p className="text-gray-500 text-sm">Average Rating</p>
            </div>
          </div>
        </section>

        <Services />
        <TrustSection />
        <Card />
      </div>
    </>
  );
}

export default Home;
