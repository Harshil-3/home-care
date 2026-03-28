import logo from "../assets/logo.png";
import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, Phone, User } from 'lucide-react';
import { Link } from 'react-router-dom';

function Register() {
  const [tab,setTab]=useState("Customer");
  const [form,setForm]=useState({name:"",email:"",phone: '', password: '', confirm: '', role: 'user', agreed: false });
  const [showPass,setShowPass]=useState("fasle");
  return (
    <div className='min-h-screen bg-gradient-to-br from-teal-50 to-slate-100 flex items-center justify-center px-4 pt-20 pb-10' >
      <div className='w-full max-w-md'>
        <div className="text-center mb-8">
          <div className="w-24 h-34  flex items-center justify-center mx-auto mb-4">
            <img src={logo} alt="" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Create Account</h1>
          <p className="text-slate-500 text-sm mt-1">Join thousands of families on CareConnect</p>
        </div>
        <div className='bg-white rounded-3xl shadow-xl border border-slate-100 p-8'>
          <div>
            {["Customer","Caregiver"].map((t)=>(
              <button key={t}
              onClick={()=> setTab(t)}
              className={`px-4 py-2 rounded-xl text-sm  font-medium capitalize transition-all ${tab === t ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {t}
              </button>
            ))}
          </div>
          {tab === "Customer" && (
            <>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="email" required value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
              <div className="relative">
                <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="tel" required value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))}
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type={showPass ? 'text' : 'password'} required value={form.password} onChange={e => setForm(f => ({...f, password: e.target.value}))}
                  placeholder="Min. 8 characters"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="password" required value={form.confirm} onChange={e => setForm(f => ({...f, confirm: e.target.value}))}
                  placeholder="Repeat your password"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 outline-none text-sm transition-all ${
                    form.confirm && form.password !== form.confirm ? 'border-rose-400 focus:ring-rose-100' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-100'
                  }`} />
                {form.confirm && form.password === form.confirm && (
                  <CheckCircle size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-500" />
                )}
              </div>
              {form.confirm && form.password !== form.confirm && (
                <p className="text-xs text-rose-500 mt-1">Passwords do not match</p>
              )}
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" required checked={form.agreed} onChange={e => setForm(f => ({...f, agreed: e.target.checked}))}
                className="w-4 h-4 mt-0.5 rounded border-slate-300 accent-teal-600 flex-shrink-0" />
              <span className="text-xs text-slate-600">I agree to the <Link to="/terms" className="text-teal-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-teal-600 hover:underline">Privacy Policy</Link></span>
            </label>
            <button
                  type="submit"
                  className="w-full py-3  text-black mt-4 border-2 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Link to="/user/dashboard">Create account</Link>
                </button>
            </>
            
            
          )}
          {tab === "Caregiver" && (
            <>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="email" required value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
              <div className="relative">
                <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="tel" required value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))}
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type={showPass ? 'text' : 'password'} required value={form.password} onChange={e => setForm(f => ({...f, password: e.target.value}))}
                  placeholder="Min. 8 characters"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="password" required value={form.confirm} onChange={e => setForm(f => ({...f, confirm: e.target.value}))}
                  placeholder="Repeat your password"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 outline-none text-sm transition-all ${
                    form.confirm && form.password !== form.confirm ? 'border-rose-400 focus:ring-rose-100' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-100'
                  }`} />
                {form.confirm && form.password === form.confirm && (
                  <CheckCircle size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-500" />
                )}
              </div>
              {form.confirm && form.password !== form.confirm && (
                <p className="text-xs text-rose-500 mt-1">Passwords do not match</p>
              )}
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" required checked={form.agreed} onChange={e => setForm(f => ({...f, agreed: e.target.checked}))}
                className="w-4 h-4 mt-0.5 rounded border-slate-300 accent-teal-600 flex-shrink-0" />
              <span className="text-xs text-slate-600">I agree to the <Link to="/terms" className="text-teal-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-teal-600 hover:underline">Privacy Policy</Link></span>
            </label>
            <button
                  type="submit"
                  className="w-full py-3  text-black mt-4 border-2 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Link to="/Caregiver/Dashboard">Create account</Link>
                </button>
            </>
            
          )}
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Register

