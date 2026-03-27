import React from "react";
import { ShieldCheck,Banknote,Headset,Users,Smile,Medal,Clock } from "lucide-react";
import trust from "../assets/trust.jpg";

const features = [
  {
    title: "Verified Caregivers",
    description:
      "Every professional undergoes rigorous background checks and credential verification.",
    icon: <ShieldCheck />,
  },
  {
    title: "Secure Payments",
    description:
      "Automated, transparent billing with secure escrow for your peace of mind.",
    icon: <Banknote />,
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated care coordinators are available around the clock for any emergencies.",
    icon: <Headset />,
  },
];

const TrustSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div className="items-cente grid md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          <div className="bg-green-100 rounded-xl shadow-sm p-12 flex flex-col items-center  relative hover:shadow-md transition h-45 ">
            <Users  className="text-green-400 " />
            <h2 className="font-bold pt-3">2,500+</h2>
            <p>carrgivers</p>
          </div>
          <div className="bg-yellow-100 rounded-xl shadow-sm p-12 flex flex-col items-center relative hover:shadow-md transition h-45">
            <Smile className="text-yellow-400" />
            <h2 className="font-bold pt-3">50K+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="bg-red-100 rounded-xl shadow-sm p-12 flex flex-col items-center  relative hover:shadow-md transition h-45">
            <Medal className="text-red-400"/>
            <h2 className="font-bold pt-3">4.9⭐</h2>
            <p>Avg Rating</p>
          </div>
          <div className=" bg-purple-100 rounded-xl shadow-sm p-12 flex flex-col items-center  relative hover:shadow-md transition h-45">
            <Clock strokeWidth={3} className="text-purple-600" /> 
            <h2 className="font-bold pt-3">24/7</h2>
            <p>Support</p>
          </div>
        </div>

        <div>
          <p className="text-blue-500 font-semibold uppercase tracking-wide">
            Trust & Security
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Why Families Trust HomeCare Connect
          </h2>

          <div className="mt-8 space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                
                <div className="bg-white p-3 rounded-full shadow text-blue-500 text-lg">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;