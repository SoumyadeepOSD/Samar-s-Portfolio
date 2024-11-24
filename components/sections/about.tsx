import React from 'react'
import BoldText from '../bold-text'
import Image from 'next/image';
import { kplogoImage, profileImage } from '../images';

const About = () => {
    return (
        <div>
            <BoldText label="About" />
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-20">
                <Image
                    alt="profile"
                    src={profileImage}
                    height={450}
                    width={450}
                    style={{
                        height: 320,
                        width: 320
                    }}
                    className="rounded-3xl"
                />
                <div className="mx-10 md:mx-0">
                    <div className="text-white">
                        <p className="font-medium md:font-bold text-lg md:text-2xl text-ellipsis">Hi Everyone👋🏻, I&apos;m Samar Das Bhowmick</p>
                        <p className="font-medium md:font-bold text-lg md:text-2xl text-ellipsis">Sub-Inspector of Kolkata Police at</p>
                        <p className="font-medium md:font-bold text-lg md:text-2xl text-ellipsis">Enforcement Branch(Economic Offence Wing)</p>
                        <p className="font-medium md:font-bold text-lg md:text-2xl text-ellipsis border-2 border-cyan-600 rounded-lg p-3">Birthday🎈: 31/12/1969</p>
                    </div>
                    <Image
                        alt="kplogo"
                        src={kplogoImage}
                        height={500}
                        width={500}
                        style={{
                            height: 150,
                            width: 150
                        }}
                        className="rounded-3xl mt-2"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;

