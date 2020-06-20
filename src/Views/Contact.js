import React from "react";

import Parallax from "../components/Parallax/Parallax.js";
import Header from "../components/Header/Header.js";
import Hlinks from "./Hlinks";
import ContactCards from "./ContactCards.js";

function Contact() {
  return (
    <>
      <Header
        brand="SAWAE BRANDS"
        rightLinks={<Hlinks />}
        color="transparent"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax image={require("../assets/img/bg4.jpg")}  style={{display:"flex", justifyContent: "space-around" }}>
        <ContactCards 
        cardheader="General Info"
        title="Help Desk"
        email="abdelnacerr@gmail.com"
        call= "0711264219"
        person = "Mohamed Abdinasir"
        />  
         <ContactCards 
        cardheader="General Manager"
        title="Manager"
        email="abdelnacerr@gmail.com"
        call= "0711264219"
        person = "Sharif Mohamed"
        /> 
      </Parallax>
    </>
  );
}

export default Contact;
