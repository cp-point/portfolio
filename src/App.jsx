import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '@/pages/Home'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} class="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


      {/* <div className='portfolio-wrap'>
        <section className='home'>
          <h2>Portfolio<br/>Chan Pyo Lee</h2>
        </section>
        <section className='career'>
          <h2>Career</h2>
        </section>
        <section className='project'>
          <h2>Project</h2>
        </section>
        <section className='profile'>
          <h2>Profile</h2>
        </section>
      </div> */}

      <Home />
    </>
  )
}