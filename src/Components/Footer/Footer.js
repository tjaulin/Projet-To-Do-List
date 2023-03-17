import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer has-background-primary has-text-white is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
        <p className="credit">&copy; Created by <a href='https://www.linkedin.com/in/thomas-jaulin-07b93a197/' target={'_blank'} rel="noreferrer">Thomas Jaulin</a></p>
        <p class="buttons">
          <button class="button is-primary">
            <span class="icon">
              <a href="https://github.com/tjaulin" target={"_blank"} rel="noreferrer" className='has-text-white'>
                <i class="fab fa-github" title='Mon GitHub'></i>
              </a>
            </span>
          </button>
          <button class="button is-primary">
            <span class="icon">
              <a href="https://www.linkedin.com/in/thomas-jaulin-07b93a197/" target={"_blank"} rel="noreferrer" className='has-text-white'>
                <i class="fa-brands fa-linkedin" title='Mon LinkedIn'></i>
              </a>
            </span>
          </button>
          <button class="button is-primary">
            <span class="icon">
              <a href="https://mes-projets.vercel.app/" target={"_blank"} rel="noreferrer" className='has-text-white'>
                <i class="fa-solid fa-globe" title='Mes Projets'></i>
              </a>
            </span>
          </button>
        </p>
    </footer>
  )
}
