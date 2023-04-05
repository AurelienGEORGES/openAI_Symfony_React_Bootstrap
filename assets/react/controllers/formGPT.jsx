import React, { useState } from 'react'

const formGPT = () => {

    const [promptGPT, setPromptGPT] = useState('')

    return (
        <section className='title-border my-5 p-5 w-100'>
            <h2 className="title-gradient text-center p-5 fs-2 fw-normal">This chat use GPT-3 of OpenAI</h2>
            <form action="https://127.0.0.1:8000/chat/answer" method="get">
                <label
                    htmlFor="Enter-PromptGPT"
                    className="d-block my-3 fs-4 text-white fw-normal">
                    GPT will answer at your prompt :
                </label>
                <textarea
                    id="textareaImageId"
                    rows="5"
                    cols="100"
                    name="promptGPT"
                    maxLength="500"
                    autoComplete="off"
                    onChange={(e) => setPromptGPT(e.target.value)}
                    className="d-block my-3 p-3 focus-only my-textarea rounded-3 fs-3 fw-normal w-100"
                    placeholder="enter your text for GPT IA here..."
                    required>
                </textarea>
                <button
                    type="submit"
                    className="d-block btn btn-outline-light my-3 fs-3 fw-normal">
                    Send to GPT
                </button>
            </form>
        </section>
    )
}

export default formGPT