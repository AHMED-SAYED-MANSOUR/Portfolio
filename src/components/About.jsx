import React from 'react'

export default function About(){
  return (
    <section className="py-8">
      <div className="card">
        <h3 className="text-2xl font-semibold">About Me</h3>
        <p className="mt-3 text-gray-300">
          I graduated from Cairo University (Computers & AI). I'm focused on full-stack development, backend integrations,
          and system design. I enjoy competitive programming and building practical solutions.
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-300">
          <li><strong>Location:</strong> Giza, Egypt</li>
          <li><strong>Email:</strong> ahmed.sa.mns@gmail.com</li>
          <li><strong>Education:</strong> B.Sc. Computers & AI — Cairo University</li>
          <li><strong>GPA:</strong> 3.10</li>
        </ul>
      </div>
    </section>
  )
}
