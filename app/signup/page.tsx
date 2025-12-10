'use client';

import { useState } from 'react';
import Link from 'next/link';
import GmailLogo from '../components/GmailLogo';
import FacebookLogo from '../components/FacebookLogo';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for signup logic
    console.log('Sign up:', formData);
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
          <p className="text-[#4b5563]">Create your account to get started</p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white rounded-3xl shadow-xl border-2 border-[#e5e7eb] p-8">
          <h2 className="text-2xl font-bold text-[#111827] mb-6 text-center">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e7eb] focus:border-[#0cc0df] focus:outline-none transition-colors text-[#111827]"
                placeholder="John Doe"
              />
            </div>

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
              <label htmlFor="password" className="block text-sm font-medium text-[#374151] mb-2">
                Password
              </label>
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#374151] mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e7eb] focus:border-[#0cc0df] focus:outline-none transition-colors text-[#111827]"
                placeholder="••••••••"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#e5e7eb]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[#6b7280]">Or continue with</span>
              </div>
            </div>

            <div className="space-y-3">
              <button 
                type="button"
                onClick={() => console.log('Sign up with Gmail')}
                className="w-full bg-white border-2 border-[#e5e7eb] text-[#374151] px-6 py-3 rounded-xl text-sm font-medium hover:border-[#0cc0df] transition-colors flex items-center justify-center gap-2"
              >
                <GmailLogo size={20} />
                Sign up with Gmail
              </button>
              <button 
                type="button"
                onClick={() => console.log('Sign up with Facebook')}
                className="w-full bg-white border-2 border-[#e5e7eb] text-[#374151] px-6 py-3 rounded-xl text-sm font-medium hover:border-[#1877F2] transition-colors flex items-center justify-center gap-2"
              >
                <FacebookLogo size={20} />
                Sign up with Facebook
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0cc0df] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#6b7280]">
              Already have an account?{' '}
              <Link href="/signin" className="text-[#0cc0df] hover:text-[#0a9fb8] font-semibold transition-colors">
                Sign In
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#e5e7eb]">
            <p className="text-xs text-center text-[#9ca3af]">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
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

