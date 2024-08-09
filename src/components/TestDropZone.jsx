'use client'
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const TestDropZone = ({ fileName = "prueba", maxFiles = 1, tipo = 'picture' }) => {

    const [files, setFiles] = useState([]);
    const onDrop = useCallback((acceptedFiles) => {
        setFiles(acceptedFiles.map((file, index) => {
            let timestamp = Date.now();
            let newFileName = `${fileName}${timestamp}.${file.name.split('.').pop()}`;
            let newFile = new File([file], newFileName, { type: file.type });
            return Object.assign(newFile, {
                preview: URL.createObjectURL(newFile)
            });
        }));
    }, [fileName]);


    const [img, setImg] = useState('prueba1708638964547.svg');
    const [imgId, setImgId] = useState('1');
    // ...resto del código...

    const uploadFiles = () => {
        files.forEach(file => {
            const formData = new FormData();
            formData.append('file', file);

            fetch('http://localhost:33402/upload', {
                // fetch('http://api.qurux.net/upload', {
                // fetch('https://sever-qurux.onrender.com/upload', {
                // fetch('https://sever-qurux.vercel.app/upload', {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('data', data);
                    setImg(data.file.filename)
                    setImgId(data.id)
                    console.log(img);

                    // Realizar la mutación
                })
                .catch(error => {
                    console.error(error);
                });
        });
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxFiles
    });

    const thumbs = files.map(file => (
        <div className='h-20 w-20' key={file.name}>
            <div>
                <img src={file.preview} alt="preview" />
            </div>
        </div>
    ));

    return (
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{thumbs}</ul>
            </aside>
            <button onClick={uploadFiles}>Upload Files</button>
            <p>imagen previamente subida</p>
            <div className="w-14 h-14 overflow-hidden rounded-full">
                <img className="w-full h-full object-cover" src={"http://localhost:33402/files/" + img} />
            </div>
        </div>
    );
};

export default TestDropZone;