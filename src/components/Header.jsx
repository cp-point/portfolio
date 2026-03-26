import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'project', label: 'PROJECT' },
  { id: 'career', label: 'CAREER' },
  { id: 'profile', label: 'PROFILE' },
]

export default function Header() {
  const [isFloating, setIsFloating] = useState(false)
  const [activeId, setActiveId] = useState('intro')

  useEffect(() => {
    const onScroll = () => {
      setIsFloating(window.scrollY > 80)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -50% 0px',
      }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`header ${isFloating ? 'is-floating' : ''}`}>
      <h1 className="logo">logo</h1>

      <nav className="nav">
        {NAV_ITEMS.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-item ${activeId === item.id ? 'is-active' : ''}`}
          >
            {item.label}

            {activeId === item.id && (
              <motion.span
                className="nav-indicator"
                layoutId="nav-indicator"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </a>
        ))}
      </nav>
    </header>
  )
}