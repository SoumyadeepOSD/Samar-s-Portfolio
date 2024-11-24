import React from 'react'
import BoldText from '../bold-text'
import { bachelorImage, higherSecondaryImage, masterImage, secondaryImage } from '../images'
import DropDownItem from '../dropdown'

const Education = () => {
  return (
    <div className="text-white">
      <BoldText label="Education" />
      <div className="flex flex-col items-start justify-center mx-10">
        <DropDownItem imageUrl={masterImage} qualification={"Master of Arts - History(1998)"} institution={"Burdwan University"} />
        <DropDownItem imageUrl={bachelorImage} qualification={"Bachelor of Arts(1988)"} institution={"North Bengal University"} />
        <DropDownItem imageUrl={higherSecondaryImage} qualification={"Higher Secondary(1986)"} institution={"Sudarshanpur DPU Vidyachakra"} />
        <DropDownItem imageUrl={secondaryImage} qualification={"Secondary(1984)"} institution={"Sudarshanpur DPU Vidyachakra"} />
      </div>
    </div>
  );
}

export default Education