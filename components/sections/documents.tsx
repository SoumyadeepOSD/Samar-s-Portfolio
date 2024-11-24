import React from 'react'
import BoldText from '../bold-text'
import DropDownItem from '../dropdown'
import { aadhaarImage, drivingImage, panImage, rationcardImage, vaccinationImage, voterImage } from '../images'


const Documents = () => {
  return (
    <div>
        <BoldText label="Documents"/>
        <div className="flex flex-col items-start justify-center">
        <DropDownItem imageUrl={aadhaarImage} qualification={"Aadhar Card"} institution={""}/>
        <DropDownItem imageUrl={drivingImage} qualification={"Driving Licence"} institution={""} />
        <DropDownItem imageUrl={panImage} qualification={"Pan Card"} institution={""} />
        <DropDownItem imageUrl={voterImage} qualification={"Voter Card"} institution={""} />
        <DropDownItem imageUrl={rationcardImage} qualification={"Ration Card"} institution={""} />
        <DropDownItem imageUrl={vaccinationImage} qualification={"Vaccination Status"} institution={""} />
        </div>
    </div>
  )
}

export default Documents