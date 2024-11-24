"use client";

import React from 'react';
import BoldText from '../bold-text';
import {Facebook, MailCheckIcon, PhoneCallIcon} from "lucide-react";

const Contact = () => {
  const sendEmail = ()=>{
    window.location.href="mailto:sdb.b1802@gmail.com"
  }
  return (
    <div className="text-white">
      <BoldText label="Contact Me" />
      <div className="flex flex-col items-start justify-between rounded-lg border-slate-600 border-2 p-3 gap-5">
        <div className="flex flex-row gap-2 items-start hover:cursor-pointer">
          <PhoneCallIcon/>
          +91-9038897785
        </div>
        <div className="flex flex-row gap-2 items-start hover:cursor-pointer" onClick={sendEmail}>
          <MailCheckIcon/>
          sdb.b1802@gmail.com
        </div>
        <div className="flex flex-row gap-2 items-start hover:cursor-pointer" 
          onClick={() => {
            window.open("https://www.facebook.com/samar.dasbhowmick.1", "_blank");
          }}
        >
          <Facebook/>
          facebook.com/samar.dasbhowmick.1
        </div>       
      </div>
    </div>
  )
}

export default Contact