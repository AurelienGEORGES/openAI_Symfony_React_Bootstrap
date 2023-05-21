import React, { useState } from 'react';

const FileInputMP3 = () => {
    const [file, setFile] = useState(null);

    const handleDrop = (e) => {
        e.preventDefault();
        setFile(e.dataTransfer.files[0]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
    }

    return (
        <section className='border-form my-1 p-5 screen-size'>
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className='border-form m-2'
            >
                {file ? (
                    <div>
                        <p className="d-block fs-4 text-white fw-normal">{file.name}</p>
                        <button onClick={() => setFile(null)} className='d-block btn btn-outline-light my-3 fs-3 fw-normal'>Remove</button>
                    </div>
                ) : (
                    <label className='d-block fs-4 text-white fw-normal ms-1'>
                        <b>Choose a mp3 file : </b>
                        <input type="file" accept=".mp3" onChange={handleChange} className='title-border d-block m-2 fs-5 fw-normal'/>
                    </label>
                )}
            </div>
            <form onSubmit={handleSubmit}>
                <label className='d-block m-2 fs-4 text-white fw-normal'><b>MP3 file : </b></label>
                <button type="submit" disabled={!file} className='d-block btn btn-outline-light m-2 fs-3 fw-normal'>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default FileInputMP3;
