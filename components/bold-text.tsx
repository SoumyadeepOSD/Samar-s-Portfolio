import React from 'react'

const BoldText = ({ label }: { label: string }) => {
    return (
        <div className="flex flex-col items-center justify-center my-10">
            <h1 className="text-5xl font-bold bg-gradient-to-br from-cyan-500 to-blue-800 text-transparent bg-clip-text">
                {label}
            </h1>
            <span className="bg-gradient-to-l from-blue-950 via-blue-700 to-blue-950 h-1 w-60"/>
        </div>
    )
}

export default BoldText