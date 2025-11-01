import React from 'react'

const projects = [
  {
    title: 'PGPara Payment Gateway',
    desc: 'Standalone payment method like PayPal/Stripe — handles payment APIs and backend transactions.',
    repo: 'https://github.com/AHMED-SAYED-MANSOUR'
  },
  {
    title: 'E-Commerce Platform (React)',
    desc: 'Store with categories, filters and fake payment gateway (React).',
    repo: 'https://github.com/AHMED-SAYED-MANSOUR'
  },
  {
    title: 'Physiotherapy Management System',
    desc: 'Admin dashboard for clinic management with AdminLTE UI.',
    repo: 'https://github.com/hady-asaker/EhgzEstshara/'
  },
  {
    title: 'CRUD React Project',
    desc: 'Create, Read, Update, Delete operations with an intuitive UI.',
    repo: 'https://github.com/AHMED-SAYED-MANSOUR'
  }
]

export default function Projects(){
  return (
    <section className="py-8">
      <h3 className="text-2xl font-semibold mb-4">Projects</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map(p => (
          <div key={p.title} className="card">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <div className="mt-3 flex gap-2">
              <a href={p.repo} target="_blank" rel="noreferrer" className="text-indigo-300">View Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
