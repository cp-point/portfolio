import { useRef } from 'react'
import { motion } from 'framer-motion'
import Skills from '@/components/Skills'

export default function Profile() {
  const profileRef = useRef(null)

  return (
    <section id="profile" className="profile" ref={profileRef}>
      <motion.h2
        className="profile__title"
        initial={{
          x: 0,
          y: 0,
          scale: 0.5,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          y: 0,
          scale: 1.8,
          opacity: 1,
        }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        PROFILE
        <motion.span
          className="title-bg"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            duration: 0.65,
            delay: 1.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.h2>

      <div className="profile-inner">
        <motion.div
          className="profile-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-300px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="profile-image">
            <img src={`${import.meta.env.BASE_URL}assets/images/profile.svg`} alt="profile" />
          </div>
        </motion.div>

        <motion.div
          className="profile-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-300px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="profile-introduce">
            <strong>안녕하세요,</strong><br />
            <span>실무형 UI를 구축해온 퍼블리셔</span><br />
            <strong>이찬표</strong> 입니다.
          </div>

          <hr />

          <div className="profile-info">
            <p className="name"><strong>Lee Chan Pyo</strong></p>
            <p className="ph-num">010.4140.1210</p>
            <p className="email">dlcksvv83@gmail.com</p>
          </div>
        </motion.div>

        <div className="profile-right">
          <div className="skill-sticky">
            <h3 className="skill-title">SKILLS</h3>
            <Skills profileRef={profileRef} />
          </div>
        </div>
      </div>
    </section>
  )
}