import React from 'react'
import { INPUT } from '../utils/validation';
import InputBase from './InputBase';
import '../../style/contact.css'

const Contact = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-4">Contact Me Directly</h2>
      <form className="form" action="https://formsubmit.co/gabe.souza0001@gmail.com" method="POST">
        {
          INPUT.map((item) => (
            <InputBase 
              name={item.name}
              placeholder={item.placeholder}
              type={item.type}
              label={item.label}
              row={item.type === 'textarea'? item.rows : null}
              className={'inputs form-control'}
            />
          ))
        }
        <label className="h4 mt-2" htmlFor="">Message</label>
        <textarea placeholder="Message..." className="form-control" name="message" id="message" cols="30" rows="4" required></textarea>
        <input type="submit" className="btn btn-primary mt-3 p-3 " />
      </form>
    </div>
  )
}
export default Contact;