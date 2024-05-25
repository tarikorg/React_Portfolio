import { useState, useEffect } from 'react'

function AboutMe() {
    const [text, setText] = useState('')
    //useState is needed for cycle

    useEffect(() => {
        //animated version(will be typing out the last 4 letters in a loop)
        let isMounted = true
        let count = 0
        let textArr = ['f', 'o', 'l', 'i', 'o']
        let text = ''
        let interval = setInterval(() => {
            if (isMounted) {
                text += textArr[count]
                setText(text) //update
                count++ //iterate
                if (count === 5) { //iterate reset
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

            <div className='d-flex justify-content-center align-items-center align-middle '>
                <h1 className='fit-content m-3 text-light' style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginTop: '3rem' }}>Welcome To My Port{text}</h1>



            </div>



        </>
    )
}

export default AboutMe