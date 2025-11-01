import React from 'react'

export default function Skills(){
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
    'Node.js','Express','MongoDB','PHP','Laravel','C++','Java','Python'
  ]
  return (
    <section className="py-8">
      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map(s => (
          <span key={s} className="px-3 py-1 rounded-full bg-white/5 text-sm">{s}</span>
        ))}
      </div>
    </section>
  )
}
