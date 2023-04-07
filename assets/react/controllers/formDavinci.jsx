import React, { useState } from 'react'

const formDavinci = () => {

    const [promptDavinci, setPromptDavinci] = useState('')

    return (
        <section className='title-border my-5 p-5 screen-size'>
            <h2 className="title-gradient text-center p-5 fs-2 fw-normal">The model used is Davinci of OpenAI to obtain AI text completion</h2>
            <form action="https://127.0.0.1:8000/completion/answer" method="get">
                <label
                    htmlFor="Enter-PromptDavinci"
                    className="d-block my-3 fs-4 text-white fw-normal">
                    Davinci model will complet your prompt :
                </label>
                <textarea
                    id="textareaImageId"
                    rows="5"
                    cols="100"
                    name="promptDavinci"
                    maxLength="500"
                    autoComplete="off"
                    onChange={(e) => setPromptDavinci(e.target.value)}
                    className="d-block my-3 p-3 focus-only my-textarea rounded-3 fs-3 fw-normal w-100"
                    placeholder="enter your text for Davinci model here..."
                    required>
                </textarea>
                <button
                    type="submit"
                    className="d-block btn btn-outline-light my-3 fs-3 fw-normal">
                    Send to Davinci
                </button>
            </form>
        </section>
    )
}

export default formDavinci