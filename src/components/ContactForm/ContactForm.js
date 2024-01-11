import React from "react";
import styles from "./ContactForm.module.css";
import { Button } from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useState } from "react";

export const ContactForm = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    
    const onSubmit = (event) =>{

        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)

       event.preventDefault();

    }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
            
          <Button 
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button  text="VIA CALL" icon={<IoMdCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdMessage fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="4" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>
          <div>
            {name + " " + email + " " + text}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/Service_24_7.png" alt="contact_image" />
      </div>
    </section>
  );
};
