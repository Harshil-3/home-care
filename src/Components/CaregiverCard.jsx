import React from 'react'
import {MapPin} from "lucide-react"
import { Link } from 'react-router-dom';



function CaregiverCard({caregiver}) {
  const {id}=caregiver;
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex  gap-4 relative hover:shadow-md transition ">

      {caregiver.badge && (
        <span className="absolute bottom-3 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
          {caregiver.badge}
        </span>
      )}

      <div className="w-45 h-45 flex justify-center items-center rounded-lg object-cover bg-purple-400">
        <div className='w-24 h-24 rounded-full bg-purple-600 border-4 border-white flex items-center justify-center text-white text-4xl font-bold shadow-lg'>
          {caregiver.name[0]}
        </div>
      </div>

      <div className="flex flex-col flex-1">

        <div className="flex justify-between">
          <h3 className="font-semibold">{caregiver.name}</h3>
          
        </div>

        <p className="text-sm text-gray-500">
          ⭐ {caregiver.rating} ({caregiver.reviews} reviews)
        </p>

        <p className='flex'>
          <MapPin /> {caregiver.location}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {caregiver.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-sm text-gray-500">
            {caregiver.experience} experience
          </span>

        <div className="flex justify-between items-center mt-auto pt-3">
          <span className="text-blue-600 font-semibold">
            ₹{caregiver.price}/hr
          </span>

          <Link to={`/caregiver/${id}`}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors">
            View Profile
          </Link>
        </div>
        <div>
        </div>

      </div>
    </div>
  )
}

export default CaregiverCard