'use client'
import { useRef, useEffect, forwardRef, useLayoutEffect, useState } from 'react'
import '@/styles/Iris.css'
import GradientBackground from '@/components/Templates/GradientBackground'

const ParallaxCard = forwardRef<HTMLDivElement, { title: string; onClick: () => void }>(({
  title,
  onClick,
}, ref) => {
  return (
    <div
      ref={(el) => {
        if (typeof ref === 'function') ref(el)
        else if (ref) ref.current = el
      }}
      className="skill-card"
      onClick={onClick}
    >
      <h3>{title}</h3>
    </div>
  )
})

ParallaxCard.displayName = 'ParallaxCard'

export default function Home() {
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [typingText, setTypingText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const cardContents: { [key: string]: string } = {
    'Education Background': `Graduated from FPT University in early 2026.`,
    'Problem-solving Skills': `I approach problem-solving by first identifying the core nature of the problem using the 5W1H framework.
After clarifying the problem, I select an appropriate method to address it and execute the solution following the PDCA (Plan–Do–Check–Act) cycle.

After each problem, I actively summarize lessons learned and extract reusable patterns or methodologies. As a result, when facing similar problems in the future, I can typically solve them in less than 50% of the time compared to the initial attempt.`,
    'Learning Attitude': `I constantly ask "why" and "how can this be done better?"
I believe that anyone can be a valuable source of learning, regardless of whether their approach is fully correct. Every perspective helps me refine my own thinking and improve continuously.`,
    'Collaboration Style': `I strongly value active listening and always strive to understand what others truly want to convey.
By placing myself in others' positions, I aim to collaborate more effectively and support the team toward better outcomes.

I believe everyone wants to do their best. Even if their problem-solving approach is not optimal, I am willing to adapt my working style, align with them, and progress together toward a successful result.
I define my principles clearly, while remaining flexible enough to thrive in different working environments, as long as the shared goal is achieved.`,
    'Future Orientation': `Vietnam is entering a golden 20-year development period, and regardless of my role, I aspire to contribute to the country's long-term growth.

My future direction is to continuously deepen my expertise in science, engineering, creativity, and innovation, with the goal of building solutions that create a better future for the Vietnamese people.`
  }

 const handleCardClick = (title: string) => {
  setSelectedCard(title)
  setTypingText('')
  // remove setIsTyping(true) — let effect handle it
}

  const handleClose = () => {
    setSelectedCard(null)
    setTypingText('')
    setIsTyping(false)
  }

 useEffect(() => {
  if (!selectedCard) {
    setTypingText('')
    return
  }

  const fullText = cardContents[selectedCard] || ''
  if (!fullText) return

  // Capitalize first letter properly
  const capitalizedText = fullText.charAt(0).toUpperCase() + fullText.slice(1)

  let index = 0
  setTypingText('') // ensure clean start

  const interval = setInterval(() => {
    if (index < capitalizedText.length) {
      setTypingText(capitalizedText.substring(0, index + 1))
      index++
    } else {
      setIsTyping(false)
      clearInterval(interval)
    }
  }, 50)

  setIsTyping(true)

  return () => clearInterval(interval)
}, [selectedCard])

  const positions = [
    { left: '50%', top: '50%', scale: 1.2 }, // center
    { left: '20%', top: '20%', scale: 1 },
    { left: '80%', top: '20%', scale: 1 },
    { left: '80%', top: '80%', scale: 1 },
    { left: '20%', top: '80%', scale: 1 },
  ]

  useLayoutEffect(() => {
    if (selectedCard === null) {
      let currentCenter = 0

      const setPositions = () => {
        cardsRef.current.forEach((card, i) => {
          if (card) {
            const pos = positions[(i + currentCenter) % 5]
            card.style.left = pos.left
            card.style.top = pos.top
            card.style.transform = `translate(-50%, -50%) scale(${pos.scale})`
          }
        })
      }

      setPositions()

      const interval = setInterval(() => {
        currentCenter = (currentCenter + 1) % 5
        setPositions()
      }, 8000)

      return () => clearInterval(interval)
    }
  }, [selectedCard])

  return (
    <GradientBackground>
    <div className="page">
      <div className="card-grid">
        {selectedCard ? (
          <div className="content-display">
            <h2>{selectedCard}</h2>
            <p>{typingText}</p>
            {!isTyping && (
              <button onClick={handleClose} className="close-button">Close</button>
            )}
          </div>
        ) : (
          <>
            <ParallaxCard
              ref={(el) => { if (el) cardsRef.current[0] = el }}
              title="Education Background"
              onClick={() => handleCardClick('Education Background')}
            />
            <ParallaxCard
              ref={(el) => { if (el) cardsRef.current[1] = el }}
              title="Problem-solving Skills"
              onClick={() => handleCardClick('Problem-solving Skills')}
            />
            <ParallaxCard
              ref={(el) => { if (el) cardsRef.current[2] = el }}
              title="Learning Attitude"
              onClick={() => handleCardClick('Learning Attitude')}
            />
            <ParallaxCard
              ref={(el) => { if (el) cardsRef.current[3] = el }}
              title="Collaboration Style"
              onClick={() => handleCardClick('Collaboration Style')}
            />
            <ParallaxCard
              ref={(el) => { if (el) cardsRef.current[4] = el }}
              title="Future Orientation"
              onClick={() => handleCardClick('Future Orientation')}
            />
          </>
        )}
      </div>
    </div>
    </GradientBackground>
  )
}
