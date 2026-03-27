import React from 'react'

function Card() {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-100">
      <div className="grid md:grid-cols-2 gap-6">
        
        
        <div className="relative rounded-2xl overflow-hidden h-64">
          
          <div className="absolute inset-0 bg-blue-600/80"></div>

          <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
            <h3 className="text-xl font-semibold">Need Care?</h3>

            <p className="text-sm max-w-xs">
              Find trusted caregivers for your loved ones with ease and confidence.
            </p>

            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg w-fit font-medium hover:bg-gray-100">
              Get Started
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-64">
 
          <div className="absolute inset-0 bg-gray-900/80"></div>

          <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
            <h3 className="text-xl font-semibold">Are You a Caregiver?</h3>

            <p className="text-sm max-w-xs">
              Join our network and connect with families looking for your skills.
            </p>

            <button className="bg-white text-gray-900 px-4 py-2 rounded-lg w-fit font-medium hover:bg-gray-200">
              Join Now
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Card