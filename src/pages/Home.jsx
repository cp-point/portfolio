import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Profile from '@/components/Profile'
// import Project from '@/components/Project'
import Project2 from '@/components/Project2'
import Career from '@/components/Career'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        {/* <Project /> */}
        <Project2 />
        <Career />
        <Profile />
      </main>
      <Footer />
    </>
  )
}