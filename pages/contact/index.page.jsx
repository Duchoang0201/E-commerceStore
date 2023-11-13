import React from "react";

import Contact from "../_components/Contact/Contact";

function ContactCom() {
  return (
    <div className="container mt-[80px] mb-[140px] ">
      <div className="my-[80px] flex flex-row justify-between">
        {" "}
        <span>Home / Contact</span>
      </div>

      <Contact />
    </div>
  );
}

export default ContactCom;
