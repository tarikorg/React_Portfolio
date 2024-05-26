import { useState, useEffect } from "react"

import PortfolioBox from "./components/PortfolioBox.jsx"


function Portfolio() {
    const [text, setText] = useState('')

    useEffect(() => {
        let isMounted = true
        let count = 0
        let textArr = ['f', 'o', 'l', 'i', 'o']
        let text = ''
        let interval = setInterval(() => {
            if (isMounted) {
                text += textArr[count]
                setText(text)
                count++
                if (count === 5) {
                    count = 0
                    text = ''
                }
            }
        }, 400)
        return () => {
            isMounted = false
            clearInterval(interval)
        }

    }, [])

    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className="text-light">Welcome To My Port{text}</h1>
            </div>
            <div className="d-flex justify-content-center">
                <PortfolioBox />
            </div>
        </>


    );
}

export default Portfolio