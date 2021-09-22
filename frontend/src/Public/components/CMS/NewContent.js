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

    // const [content_id,getid] = useState("");
    const [content_description,setDescription] = useState("");
    const [content_title,setTitle] = useState("");
    const [state,setState] = useState({file:'',display_photo:'',message:'',success:false});
    const [posted_date,setPostedDate] = useState("");
   
    // var today = new Date();
    // var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    // const posted_date = date;

    const handleInput = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0]
        reader.onloadend = () => {
          setState({
            ...state,
            file: file,
            displayPhoto: reader.result,
            message: ""
          })
      
        }
        reader.readAsDataURL(file);
      }

    const contentadd = ()=>{
    //   console.log(content_id);
    //   console.log(file);
    
        if (state.file) {
        let formData = new FormData();
        formData.append('file', state.file)
        axios.post('http://localhost:17152/imageUpload', formData, {
            'content-Type': 'multipart/form-data',
        })
    
        axios.post('http://localhost:17152/addContent', {
            content_title: content_title,
            content_description: content_description,
            display_photo: state.file.name,
            posted_date: posted_date,

        }).then(() => {
            alert("The post was added successfully.")
            window.location.replace("/contentHome");
            
        });
    };
};

    return (
        <div>
            <div className="write">
            <div className="imgContainer">{selectedFile &&  <img className="writeImg" src={preview} alt="Preview"/> }</div>
            <form className="writeForm" onSubmit={contentadd}  >
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <AddIcon className="writeIcon"/>
                    </label>
                    <input name="file" type="file"  id="fileInput" style={{display:"none"}} onChange={handleInput}  onInput={onSelectFile}  /><br/>
                    <input name="content_title" type="text" placeholder="Title" className="writeInput" 
                    onChange={(event) => { setTitle(event.target.value); }} autoFocus={true}></input>
                    
                </div>
                <div className="writeFormGroup">
                    <textarea name="content_description" placeholder="Add your content here" type="text" className="writeInput writeText" onChange={(event) => { setDescription(event.target.value); }}>
                    </textarea>
                </div>
                <div>
                    <button type="submit" className="writeSubmit">Publish</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default NewContent;