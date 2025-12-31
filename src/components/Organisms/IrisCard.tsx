'use client'
import { useRef } from 'react'
import '@/styles/Iris.css'

function ParallaxCard({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return

    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2

    el.style.transform = `
      translate3d(${x * 0.03}px, ${y * 0.03}px, 0)
    `
  }

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate3d(0,0,0)'
    }
  }

  return (
    <div
      ref={ref}
      className="skill-card"
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <span className="cta">Click to explore</span>
    </div>
  )
}

export default function Home() {
  return (
    <div className="page">
      <div className="card-grid">
        <ParallaxCard
          title="Education Background"
          subtitle="Foundation & self-directed learning"
        />
        <ParallaxCard
          title="Problem-solving Skills"
          subtitle="Breaking problems into systems"
        />
        <ParallaxCard
          title="Learning Attitude"
          subtitle="Fast adaptation & continuous growth"
        />
        <ParallaxCard
          title="Collaboration Style"
          subtitle="Clear communication & ownership"
        />
        <ParallaxCard
          title="Future Orientation"
          subtitle="IELTS 7.5 – long-term capability building"
        />
      </div>
    </div>
  )
}
