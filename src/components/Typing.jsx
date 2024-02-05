import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

const Typing = () => {
    return (
        <>
            <ReactTypingEffect
                typingDelay={1000}
                speed={200}
                eraseSpeed={100}
                text={["Hello, Folks...!👋", "I am Amar...", "Nice to meet you!"]}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                    return (
                        <h1>
                            {text.split('').map((char, i) => {
                                const key = `${i}`;
                                return (
                                    <span
                                        className='font-semibold text-2xl'
                                        key={key}
                                        style={i % 2 === 0 ? { color: 'magenta' } : { color: "white" }}
                                    >{char}</span>
                                );
                            })}
                        </h1>
                    );
                }}
            />
            <p className='text-gray-400 mt-2 text-md'>
                Hello, I'm Amar, a frontend developer with one year of experience in the field. I specialize in JavaScript and frameworks such as Express, React, and Tailwind CSS.</p>
        </>
    )
}

export default Typing