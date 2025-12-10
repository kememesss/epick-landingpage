'use client';

import { useState } from 'react';
import Link from 'next/link';
import GmailLogo from '../components/GmailLogo';
import FacebookLogo from '../components/FacebookLogo';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for signin logic
    console.log('Sign in:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0cc0df]/20 via-white to-[#ff8c63]/20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-[#ff8c63] mb-2">Epick!</h1>
          </Link>
          <p className="text-[#4b5563]">Welcome back! Sign in to your account</p>
        </div>

        {/* Sign In Form */}
        <div className="bg-white rounded-3xl shadow-xl border-2 border-[#e5e7eb] p-8">
          <h2 className="text-2xl font-bold text-[#111827] mb-6 text-center">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e7eb] focus:border-[#0cc0df] focus:outline-none transition-colors text-[#111827]"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-[#374151]">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm text-[#0cc0df] hover:text-[#0a9fb8] transition-colors">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e7eb] focus:border-[#0cc0df] focus:outline-none transition-colors text-[#111827]"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#0cc0df] focus:ring-[#0cc0df] border-[#e5e7eb] rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#6b7280]">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0cc0df] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#6b7280]">
              Don't have an account?{' '}
              <Link href="/signup" className="text-[#0cc0df] hover:text-[#0a9fb8] font-semibold transition-colors">
                Sign Up
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#e5e7eb] space-y-3">
            <button 
              onClick={() => console.log('Sign in with Google')}
              className="w-full bg-white border-2 border-[#e5e7eb] text-[#374151] px-6 py-3 rounded-xl text-sm font-medium hover:border-[#0cc0df] transition-colors flex items-center justify-center gap-2"
            >
              <GmailLogo size={20} />
              Sign in with Gmail
            </button>
            <button 
              onClick={() => console.log('Sign in with Facebook')}
              className="w-full bg-white border-2 border-[#e5e7eb] text-[#374151] px-6 py-3 rounded-xl text-sm font-medium hover:border-[#1877F2] transition-colors flex items-center justify-center gap-2"
            >
              <FacebookLogo size={20} />
              Sign in with Facebook
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

