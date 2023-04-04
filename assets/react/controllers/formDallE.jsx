import React, { useState } from 'react'

const formDallE = () => {

    const [promptDallE, setPromptDallE] = useState('')

    return (
        <section className='title-border my-5 p-5 w-100'>
            <h2 className="title-gradient text-center p-5 fs-2 fw-normal">Generate an image with OpenAI</h2>
            <form action="https://127.0.0.1:8000/image/generator" method="get">
                <label
                    htmlFor="Enter-PromptDallE"
                    className="d-block my-3 fs-4 text-white fw-normal">
                    Dall-e IA will generate an image guided by your prompt instructions :
                </label>
                <textarea
                    id="textareaImageId"
                    rows="5"
                    cols="100"
                    name="promptDallE"
                    maxLength="500"
                    autoComplete="off"
                    onChange={(e) => setPromptDallE(e.target.value)}
                    className="d-block my-3 p-3 focus-only my-textarea rounded-3 fs-3 fw-normal w-100"
                    placeholder="enter your text for Dall-e IA here..."
                    required>
                </textarea>
                <button
                    type="submit"
                    className="d-block btn btn-outline-light my-3 fs-3 fw-normal">
                    Send to Dall-e
                </button>
            </form>
        </section>
    )
}

export default formDallE