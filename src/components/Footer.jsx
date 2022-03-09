import React from 'react'
import {FaLinkedin, FaTwitter} from 'react-icons/fa'
import '../style/footer.css'

const Footer = () => {
  return (
    <footer className="footer container">
      <h3 className="display-5 pb-3">Let's Connect!</h3>
      <div className="icon-container">
        <a target="_blank" href="https://twitter.com/SouzaPgabe"><FaTwitter /></a>
        <a target="_blank" href="https://www.linkedin.com/in/gabriel-pereira-167155127/"><FaLinkedin /></a>
      </div>
    </footer>
  )
}
export default Footer