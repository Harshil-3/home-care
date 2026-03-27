import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import photo from "../assets/yash.jpeg";
import { ArrowLeft, Star, MapPin, Clock, Award, CheckCircle,MessageCircle,Shield } from "lucide-react"

const caregiver =
{
    id: "1",
    name: "yash",
    price: 450,
    rating: 4.9,
    reviews: 128,
    bio: "I am a compassionate and dedicated elderly care specialist with 8 years of experience. I hold certifications in geriatric care, dementia support, and first aid. I believe in providing dignified, respectful care that maintains the independence and quality of life of my clients.",
    specialty: "Elderly Care Specialist",
    experience: "8 yrs",
    Languages: ['Hindi', 'English', 'Marathi'],
    tags: ["Dementia Care", "Elderly", "CPR Certified"],
    availability: { Mon: '9AM-6PM', Tue: '9AM-6PM', Wed: '9AM-6PM', Thu: '9AM-6PM', Fri: '9AM-6PM', Sat: '10AM-4PM', Sun: 'Off' },
    img: photo,
    education:"parul university",
    reviews_list: [
        { name: 'Priya S.', rating: 5, date: 'Dec 2024', text: 'Sarah is exceptional. My mother absolutely loves her. She is patient, kind and very professional.' },
        { name: 'Rajesh M.', rating: 5, date: 'Nov 2024', text: 'Wonderful caregiver. Very punctual and attentive. My father\'s health has improved significantly under her care.' },
        { name: 'Anita K.', rating: 4, date: 'Oct 2024', text: 'Very good overall. Professional and caring. Would definitely recommend to others.' },
    ],
    location: "Ahmedabad",
    badge: "AVAILABLE"
};

function CaregiverDetailPage({}) {
    const [tab, setTab] = useState('about');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [hours, setHours] = useState(4);

    const total = caregiver.price * hours;

    return (
        <div className=' min-h-screen bg-slate-50'>
            <div className='max-w-7xl mx-auto ml-6 px-4 sm:px-6 lg:px-2 py-2'>
                <Link to="/Find_care" className='flex gap-2'>
                    <ArrowLeft />  Back caregiver
                </Link>
            </div>
            <div className='grid lg:grid-cols-3 gap-8 '>
                <div className='lg:col-span-2 space-y-6 ml-8'>
                    <div className="bg-white rounded-2xl border  border-slate-100 overflow-hidden">
                        <div className="h-32 bg-blue-400" />
                        <div className="px-6 pb-6">
                            <div className="flex items-end gap-4 -mt-12 mb-4">
                                <div className="w-24 h-24 rounded-2xl bg-blue-600 border-4 border-white flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                                    {caregiver.name[0]}
                                </div>
                                <div className="pb-2 mt-11 flex-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h1 className="text-2xl  font-bold text-slate-800">{caregiver.name}</h1>
                                    </div>
                                    <p className="text-blue-600 font-medium">{caregiver.specialty}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                                <div className="flex items-center gap-1"><Star size={15} className="fill-amber-400 text-amber-400" /><span className="font-bold text-slate-800">{caregiver.rating}</span><span>({caregiver.reviews} reviews)</span></div>
                                <div className="flex items-center gap-1.5"><MapPin size={14} className="text-slate-400" />{caregiver.location}</div>
                                <div className="flex items-center gap-1.5"><Clock size={14} className="text-slate-400" />{caregiver.experience} experience</div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {caregiver.tags.map(s => (
                                    <span key={s} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium border border-blue-100">{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1 bg-white border border-slate-100 rounded-2xl p-1  w-fit">
                        {['about', 'reviews', 'availability'].map(t => (
                            <button key={t} onClick={() => setTab(t)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${tab === t ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                    {tab === 'about' && (
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-6 mb-10">
                            <div>
                                <h3 className="font-bold text-slate-800 mb-2">About Me</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{caregiver.bio}</p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2"><Award size={16} className="text-teal-600" />Education</h4>
                                    <p className="text-sm text-slate-600">{caregiver.education}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-700 mb-3">Languages</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {caregiver.Languages.map(l => <span key={l} className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{l}</span>)}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2"><CheckCircle size={16} className="text-teal-600" />Verified Documents</h4>
                                <div className="grid sm:grid-cols-2 gap-2">
                                    {['Government ID', 'Medical License', 'Criminal Background Check', 'Health Certificate'].map(doc => (
                                        <div key={doc} className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle size={14} className="text-green-500 " />{doc}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {tab === 'reviews' && (
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-5">
                            <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                                <div className="text-center">
                                    <p className="text-5xl font-bold text-slate-800">{caregiver.rating}</p>
                                    <div className="flex gap-0.5 justify-center my-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
                                    </div>
                                    <p className="text-xs text-slate-500">{caregiver.reviews} reviews</p>
                                </div>
                                <div className="flex-1 space-y-1">
                                    {[5, 4, 3, 2, 1].map(n => (
                                        <div key={n} className="flex items-center gap-2">
                                            <span className="text-xs text-slate-500 w-3">{n}</span>
                                            <div className="flex-1 bg-slate-100 rounded-full h-2">
                                                <div className="bg-amber-400 h-2 rounded-full" style={{ width: n === 5 ? '75%' : n === 4 ? '18%' : n === 3 ? '5%' : '1%' }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {caregiver.reviews_list.map((r, i) => (
                                <div key={i} className="pb-4 border-b border-slate-50 last:border-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-bold">{r.name[0]}</div>
                                            <span className="font-semibold text-slate-800 text-sm">{r.name}</span>
                                        </div>
                                        <span className="text-xs text-slate-400">{r.date}</span>
                                    </div>
                                    <div className="flex gap-0.5 mb-2">
                                        {[...Array(r.rating)].map((_, j) => <Star key={j} size={12} className="fill-amber-400 text-amber-400" />)}
                                    </div>
                                    <p className="text-sm text-slate-600">{r.text}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {tab === 'availability' && (
                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="font-bold text-slate-800 mb-4">Weekly Schedule</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {Object.entries(caregiver.availability).map(([day, time]) => (
                                    <div key={day} className={`p-3 rounded-xl text-center border ${time === 'Off' ? 'bg-slate-50 border-slate-200' : 'bg-teal-50 border-teal-200'}`}>
                                        <p className="font-semibold text-slate-700 text-sm">{day}</p>
                                        <p className={`text-xs mt-1 ${time === 'Off' ? 'text-slate-400' : 'text-teal-600 font-medium'}`}>{time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl border border-slate-100 p-6 sticky top-24">
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-3xl font-bold text-slate-800">₹{caregiver.price}</span>
                            <span className="text-slate-500 text-sm">/hour</span>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Select Date</label>
                                <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Start Time</label>
                                <select value={selectedTime} onChange={e => setSelectedTime(e.target.value)}
                                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:border-teal-500 outline-none">
                                    <option value="">Select time</option>
                                    {['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'].map(t => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Duration: {hours} hours</label>
                                <input type="range" min={1} max={12} value={hours} onChange={e => setHours(+e.target.value)}
                                    className="w-full accent-teal-600" />
                                <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1 hr</span><span>12 hrs</span></div>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-2 text-sm">
                            <div className="flex justify-between text-slate-600"><span>₹{caregiver.price} × {hours} hours</span><span>₹</span></div>
                            <div className="flex justify-between text-slate-600"><span>Platform fee</span><span>₹50</span></div>
                            <div className="flex justify-between font-bold text-slate-800 pt-2 border-t border-slate-200"><span>{total}</span><span>₹</span></div>
                        </div>

                        <Link to={`/Bookingpage`}
                            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors text-center block mb-3">
                            Book Now
                        </Link>

                        <div className="mt-4 flex items-center justify-center gap-1 text-xs text-slate-400">
                            <Shield size={12} /> <span>Safe & secure booking guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CaregiverDetailPage