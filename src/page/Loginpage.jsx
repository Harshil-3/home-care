import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Loginpage() {
  const [tab, setTab] = useState("Customer");
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", role: "" });

  return (
    <div className=" flex justify-center ">
      <div className="w-full max-w-md">
        <div className="text-center">
          <div className="w-23 h-24 rounded-2xl flex items-center justify-center mx-auto  ">
            <img src={logo} alt="" />
          </div>
          <h2 className="font-bold text-xl">Wlecome back</h2>
          <p className="text-gray-500 mt-2">
            Sing in to your CareConnect account
          </p>
        </div>
        <div className="bg-white  shadow-xl rounded-3xl border border-slate-100 p-8 mt-8 mb-8 ">
          <div className="flex w-80 justify-center gap-1 bg-white border border-slate-100 rounded-2xl p-1  ml-6 mb-5">
            {["Customer", "Caregiver", "Admin"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-xl text-sm  font-medium capitalize transition-all ${tab === t ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {t}
              </button>
            ))}
          </div>
          {tab === "Customer" && (
            <div className="">
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }

                    className="w-full pl-10 pr-4 py-3  rounded-xl border border-slate-200 outline-none text-sm text-slate-700 transition-all"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    value={form.password}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, password: e.target.value }))
                    }
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-slate-200  outline-none text-sm text-slate-700 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3  text-black mt-4 border-2 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Sign In</span>
                  <ArrowRight size={16} />
                </button>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">
                  Don't have an account?{" "}
                  <Link
                    to="/Register"
                    className="text-gray-600 font-semibold hover:underline"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </div>
          )}
          {tab === "Caregiver" && (
            <div className="">
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none text-sm text-slate-700 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    value={form.password}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, password: e.target.value }))
                    }
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-slate-200  outline-none text-sm text-slate-700 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3  text-black mt-4 border-2 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Sign In</span>
                  <ArrowRight size={16} />
                </button>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">
                  Don't have an account?{" "}
                  <Link
                    to="/Register"
                    className="text-gray-600 font-semibold hover:underline"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </div>
          )}

          {tab === "Admin" && (
            <div className="">
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none text-sm text-slate-700 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    value={form.password}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, password: e.target.value }))
                    }
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-slate-200  outline-none text-sm text-slate-700 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3  text-black mt-4 border-2 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Sign In</span>
                  <ArrowRight size={16} />
                </button>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">
                  Don't have an account?
                  <Link
                    to="/Register"
                    className="text-gray-600 font-semibold hover:underline"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
