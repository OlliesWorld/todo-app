import React from 'react'

export default function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "Morning! \u{1F31E}"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon!"
    } else {
        timeOfDay = "Evening!! \u{1F311}"
    }

    return (
        <>
            <h1 className="greeting">Good {timeOfDay}</h1>
        </>
    )
}