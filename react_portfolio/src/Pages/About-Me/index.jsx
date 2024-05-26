import { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Figure } from 'react-bootstrap'

import aboutMePic from '../../assets/IMG_1034.jpg'
import TechStack from './components/TechStacks'

function AboutMe() {
    const [text, setText] = useState('')
    //useState is needed for cycle

    useEffect(() => {
        //animated version(will be typing out the last 4 letters in a loop)
        let isMounted = true
        let count = 0
        let textArr = ['M', 'e', '.', '.', '.']
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
            <div className='d-flex justify-content-start'>
                <h1 className='fit-content m-3 text-light' style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginTop: '3rem' }}>Learn About {text}</h1>
            </div>

            <Container fluid>
                <Row xs={1} md={3}>
                    <Col xs={12} md={4} className='text-light ' style={{ fontSize: '24px' }}>
                        <p className='font-weight-bold'>
                            My name is Muhsin Tarik. I am a full-stack web developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies,
                            aiming to create the best user experience possible. I am a quick learner and am always looking to expand my knowledge and skillset. I am currently seeking a position as a web developer.
                        </p>
                        <p className='font-weight-bold'>
                            I have experience with the following technologies:
                        </p>
                        <TechStack />
                    </Col>

                    <Col xs={7} md={8} >
                        <Figure className=''>
                            <Figure.Image
                                width={420}
                                height={420}
                                alt="171x180"
                                src={aboutMePic}
                                className='thumbnail blink rounded'
                            />
                        </Figure>
                    </Col>


                </Row>
            </Container>
        </>
    )
}

export default AboutMe