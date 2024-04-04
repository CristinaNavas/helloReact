import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(700)

  return (
    <>
      
      <h1>Hello World desde React!</h1>
      <img src="src\assets\yoshi.jpg" alt="" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi libero saepe exercitationem earum alias recusandae repudiandae nulla! Blanditiis fuga tempora non numquam voluptates nihil explicabo assumenda nostrum alias? Delectus, officiis?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aliquam nisi veritatis nobis quae dolores temporibus ducimus delectus eum earum voluptates consequuntur soluta? Deserunt fugit adipisci doloribus vero libero perferendis?</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
