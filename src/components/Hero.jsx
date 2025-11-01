import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="flex items-center gap-8 py-10">
      <div className="w-36 h-36 rounded-xl overflow-hidden border-2 border-white/10">
        <img src="/public/assets/IMG_2267.jpg" alt="Ahmed" className="w-full h-full object-cover"/>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Ahmed Sayed Mansour</h1>
        <h2 className="text-xl text-indigo-300 mt-1">Software Engineer</h2>
        <p className="text-muted mt-4 text-gray-300 max-w-xl">
          Computer and AI graduate passionate about building full-stack web apps and solving real-world problems.
        </p>
        <div className="mt-4 flex gap-3">
          <a href="/CV.pdf" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Download CV</a>
          <a href="https://github.com/AHMED-SAYED-MANSOUR" className="px-4 py-2 rounded-md border border-white/10">GitHub</a>
        </div>
      </div>
    </section>
  )
}
