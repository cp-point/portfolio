import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-inner">
        <div className="home-cont">
          <motion.p
            className="home-pub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            UI Publisher Portfolio
          </motion.p>

          <motion.h1
            className="home-title"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            다양한 서비스 UI / UX를 구축해온
            <br />
            <strong>경력자 퍼블리셔 이찬표</strong>입니다.
          </motion.h1>

          <motion.p
            className="home-desc"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            퍼블리싱(접근성, 반응형, 인터랙션), 프레임워크 기반 개발, 다양한 프로젝트 경험을 바탕으로
            <br />
            구축과 운영, 확장성 및 유지보수성을 고려한 실무형 서비스를 구현해 왔습니다.
          </motion.p>

          <motion.div
            className="home-actions"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
          >
            <a href="#project" className="home-btn home-btn--primary">프로젝트 보기</a>
            <a href="#profile" className="home-btn home-btn--secondary">프로필 보기</a>
          </motion.div>
        </div>

        <motion.div
          className="home-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="home-visual-box">
            <div className='home-visual-deco'></div>
            {/* <span className="home-visual-sub">PORTFOLIO</span> */}
            <strong className="home-visual-name">LEE CHAN PYO</strong>
            <p className="home-visual-year">2019 — NOW</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}