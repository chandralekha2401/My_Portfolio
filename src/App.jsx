import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Chandralekha Veerath</h1>
        <p>Full Stack Developer | MSc in Advanced Computer Science (Research)</p>
        <p>React • Node.js • Java • Spring Boot • MySQL</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Full Stack Developer with 2 years of experience designing and implementing scalable software solutions. Passionate about continuous learning and delivering impactful results through technology.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <p>🛠 Timesheet Management System – Built using Java (Spring Boot), AngularJS, and MySQL. Designed RESTful APIs and secure authentication.</p>
        <p>🧪 Internship Contributions – Implemented user-friendly features, explored Go for internal tools, and maintained PostgreSQL databases.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: cveerath2401@gmail.com</p>
        <p>Location: London, England</p>
        <a href="https://www.linkedin.com/in/clveerath" target="_blank">LinkedIn</a>
      </section>
    </div>
  );
}
export default App;