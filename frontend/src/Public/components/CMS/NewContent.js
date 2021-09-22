import React, { useState, useEffect } from 'react'
import '../css/AddNewContent.css'
import AddIcon from '@material-ui/icons/Add';

import axios from "axios";

    

function NewContent() {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    const [state,setState]=useState({file:'',display_photo:'',message:'',success:false})
    const [title, setTitle] = useState("");
    const [contentDescription, setContentDescription] = useState("");
    const [postDate, setPostDate] = useState(new Date());

 
    const handleInput = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0]
        reader.onloadend = () => {
          setState({
            ...state,
            file: file,
            display_photo: reader.result,
            message: ""
          })
      
        }
        reader.readAsDataURL(file);
    }

    const add_content = async () => {
        console.log("button pressed")
        if (state && title && contentDescription) {
    
            if (state.file) {
                let formData = new FormData();
                formData.append('file', state.file)
                await axios.post('http://localhost:17152/imageUpload', formData, {
                    'content-Type': 'multipart/form-data',
                })
                await axios.post('http://localhost:17152/addContent', {
                    display_photo: state.file.name,
                    title: title,
                    contentDescription: contentDescription,
                    postDate: postDate,

                }).then(() => {
                    alert("The new event was added successfully.")
                    window.location.replace("/app/ProductList");
                });
                
            } 
            
        }
        else {
            alert("Image, Title, Description are required.")
        }
};

    return (
        <div>
            <div className="write">
            <div className="imgContainer">{selectedFile &&  <img className="writeImg" src={preview} alt="Preview"/> }</div>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <AddIcon className="writeIcon"/>
                    </label>
                    <input name="file" type="file" id="fileInput" style={{display:"none"}}  onChange={handleInput} required/>

                    <input name="content_title" type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={(event) => { setTitle(event.target.value); }} required></input>
                    
                </div>
                <div className="writeFormGroup">
                    <textarea name="content_description" placeholder="Add your content here" type="text" className="writeInput writeText" onChange={(event) => { setContentDescription(event.target.value); }}></textarea>
                    <button className="writeSubmit"                    
                        onClick={add_content}
                    >Publish</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default NewContent




