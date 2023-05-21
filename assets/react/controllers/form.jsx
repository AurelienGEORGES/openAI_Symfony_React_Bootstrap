import React, { useState } from 'react'

const form = (props) => {

    const [prompt, setPrompt] = useState('')

    return (
        <section className='border-form my-1 p-5 screen-size'>
            <form action={props.formURL} method="get">
                <label
                    htmlFor="Enter-Prompt"
                    className="d-block my-3 fs-4 text-white fw-normal"><b>{props.labelTitle}</b></label>
                <textarea
                    rows="5"
                    cols="100"
                    name="prompt"
                    maxLength="500"
                    autoComplete="off"
                    onChange={(e) => setPrompt(e.target.value)}
                    className="d-block my-3 p-3 focus-only my-textarea rounded-3 fs-3 fw-normal w-100"
                    placeholder={props.placeholderTitle}
                    required>
                </textarea>
                <button
                    type="submit"
                    className="d-block btn btn-outline-light my-3 fs-3 fw-normal"><b>{props.buttonTitle}</b>
                </button>
            </form>
        </section>
    )
}

export default form
