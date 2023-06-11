import React, { useState } from 'react'

const form = (props) => {

    const [prompt, setPrompt] = useState('')

    return (
        <section className='p-2 screen-size border-form'>
            <form action={props.formURL} method="get">
                <label
                    htmlFor="Enter-Prompt"
                    className="d-block my-3 ms-2 fs-4 text-white fw-normal font-label"><b>{props.labelTitle}</b></label>
                <textarea
                    rows="5"
                    cols="100"
                    name="prompt"
                    maxLength="500"
                    autoComplete="off"
                    onChange={(e) => setPrompt(e.target.value)}
                    className="d-block my-3 ps-2  focus-only my-textarea rounded-3 fs-3 fw-normal w-100"
                    placeholder={props.placeholderTitle}
                    required>
                </textarea>
                <div class="btn-modeles">
                <button type='submit' className='ms-1 my-3'><span>{props.buttonTitle}</span><i></i>
                </button>
                </div>
            </form>
        </section>
    )
}

export default form
