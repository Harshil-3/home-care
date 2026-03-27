import { Calendar,Clock } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Bookingpage() {
    const [form, setForm] = useState({
    date: '', time: '', hours: 4, specialNotes: '',
    address: '', landmark: '', pincode: '', city: 'Mumbai',
    payment: 'upi', upiId: '', cardNum: '', cardExpiry: '', cardCvv: '',
  });
  return (
    <div className='min-h-screen bg-slate-50 '>
        <div className='max-w-7xl mx-auto ml-6 px-4 sm:px-6 lg:px-2 py-2'>
            <Link to="/caregiver/:id" className='flex gap-2 text-xl'>
                ‹ Back
            </Link>

            <h1 className='text font-bold text-slate-800 mb-6'>Book a Service</h1>

            <div className='lg-col-span-2'>
                <div className="space-y-5">
                    <h2 className="font-bold text-slate-800 text-lg">Service Details</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Select Date</label>
                        <div className="relative">
                          <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input type="date" value={form.date} onChange={e => setForm(f => ({...f, date: e.target.value}))}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Start Time</label>
                        <div className="relative">
                          <Clock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <select value={form.time} onChange={e => setForm(f => ({...f, time: e.target.value}))}
                            className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:border-teal-500 outline-none appearance-none">
                            <option value="">Select time</option>
                            {['7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM'].map(t => <option key={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Duration: {form.hours} hours</label>
                      <input type="range" min={1} max={12} value={form.hours} onChange={e => setForm(f => ({...f, hours: +e.target.value}))}
                        className="w-full accent-purple-600" />
                      <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1 hour</span><span>12 hours</span></div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Special Notes / Instructions</label>
                      <textarea value={form.specialNotes} onChange={e => setForm(f => ({...f, specialNotes: e.target.value}))}
                        rows={4} placeholder="Any specific requirements, health conditions, or instructions for the caregiver..."
                        className="w-full px-4 py-3 border border-black-200 rounded-xl text-sm    outline-none resize-none" />
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Bookingpage