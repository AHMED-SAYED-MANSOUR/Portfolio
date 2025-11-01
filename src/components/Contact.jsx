import React from 'react'

export default function Contact(){
  return (
    <section className="py-8">
      <div className="card">
        <h3 className="text-2xl font-semibold">Contact</h3>
        <p className="mt-3 text-gray-300">Feel free to reach out via email: <strong>ahmed.sa.mns@gmail.com</strong></p>
        <div className="mt-4 flex gap-3">
          <a href="mailto:ahmed.sa.mns@gmail.com" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Email Me</a>
          <a href="https://www.linkedin.com/in/ahmed-sayed-mansour-976bb0249/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-white/10">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
