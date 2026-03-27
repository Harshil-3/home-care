import React from 'react'
import CaregiverCard from './CaregiverCard';

const caregivers = [
    {
        id: "1",
        name: "yash",
        price: 450,
        rating: 4.9,
        reviews: 128,
        bio: "I am a compassionate and dedicated elderly care specialist with 8 years of experience. I hold certifications in geriatric care, dementia support, and first aid. I believe in providing dignified, respectful care that maintains the independence and quality of life of my clients.",
        specialty: "Elderly Care Specialist",
        Languages: ['Hindi', 'English', 'Marathi'],
        tags: ["Dementia Care", "Elderly", "CPR Certified"],
        availability: { Mon: '9AM-6PM', Tue: '9AM-6PM', Wed: '9AM-6PM', Thu: '9AM-6PM', Fri: '9AM-6PM', Sat: '10AM-4PM', Sun: 'Off' },
        education: "parul university",
        reviews_list: [
            { name: 'Priya S.', rating: 5, date: 'Dec 2024', text: 'Sarah is exceptional. My mother absolutely loves her. She is patient, kind and very professional.' },
            { name: 'Rajesh M.', rating: 5, date: 'Nov 2024', text: 'Wonderful caregiver. Very punctual and attentive. My father\'s health has improved significantly under her care.' },
            { name: 'Anita K.', rating: 4, date: 'Oct 2024', text: 'Very good overall. Professional and caring. Would definitely recommend to others.' },
        ],
        experience: "8 yrs",
        tags: ["Dementia Care", "Elderly", "CPR Certified"],
        location: "Ahmedabad",
        badge: "AVAILABLE"
    },
    {
        id: "2",
        name: "vraj",
        price: 650,
        rating: 4.8,
        reviews: 94,
        experience: "5 yrs",
        tags: ["Physical Therapy", "Mobility", "Multilingual"],
        location: "Surat",
        badge: "TOP RATED"
    },
    {
        name: "mital",
        price: 750,
        rating: 5.0,
        reviews: 42,
        experience: "4 yrs",
        tags: ["Meal Prep", "Personal Care", "CNA"],
        location: "junagadh",

    },
    {
        name: "Vijay Patel",
        price: 320,
        rating: 4.7,
        reviews: 215,
        experience: "22 yrs",
        tags: ["Veteran Care", "Disability", "Live-in"],
        
        location: "Rajkot",
        badge: "AVAILABLE"
    },
    {
        name: "Sunita Rao",
        price: 320,
        rating: 4.7,
        reviews: 215,
        experience: "22 yrs",
        tags: ["Veteran Care", "Disability", "Live-in"],
        
        location: "Rajkot",
        badge: "AVAILABLE"
    },
    {
        name: "Mohan Das",
        price: 320,
        rating: 4.7,
        reviews: 215,
        experience: "22 yrs",
        tags: ["Veteran Care", "Disability", "Live-in"],
        
        location: "Rajkot",
        badge: "AVAILABLE"
    },
    {
        name: "Kavitha Nair",
        price: 320,
        rating: 4.7,
        reviews: 215,
        experience: "22 yrs",
        tags: ["Veteran Care", "Disability", "Live-in"],
        
        location: "Rajkot",
        badge: "AVAILABLE"
    },
    {
        name: "Ravi Shankar",
        price: 320,
        rating: 4.7,
        reviews: 215,
        experience: "22 yrs",
        tags: ["Veteran Care", "Disability", "Live-in"],
        
        location: "Rajkot",
        badge: "AVAILABLE"
    },
    {
        name: "Ramesh Kumar",
        price: 320,
        rating: 4.7,
        reviews: 215,
        experience: "22 yrs",
        tags: ["Veteran Care", "Disability", "Live-in"],
        
        location: "Rajkot",
        badge: "AVAILABLE"
    },
];

function Find_care() {
    return (
        <>
        <div className="bg-gray-100 min-h-screen p-6">

            <div className="max-w-7xl mx-auto">

                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">

                    <div>
                        <h2 className="text-xl font-semibold">
                            Available Caregivers
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Showing 124 results in your area
                        </p>
                    </div>

                    <div className="flex gap-3">

                        <select className="border rounded-lg px-3 py-2 text-sm">
                            <option>Rating 4.5+</option>
                            <option>Rating 4+</option>
                            <option>Rating 3.5+</option>
                        </select>

                        <select className="border rounded-lg px-3 py-2 text-sm">
                            <option>Experience</option>
                            <option>10+ Years</option>
                            <option>5-10 Years</option>
                            <option>1-5 Years</option>
                        </select>

                        <select className="border rounded-lg px-3 py-2 text-sm">
                            <option>Recommended</option>
                            <option>Highest Rated</option>
                            <option>Lowest Price</option>
                        </select>

                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {caregivers.map((c, i) => (
                        <CaregiverCard key={i} caregiver={c} />
                    ))}
                </div>


            </div>
        </div>

        </>
        
    )
}

export default Find_care