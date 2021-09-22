// import React, { useState, useEffect } from 'react'
// import '../css/AddNewContent.css'
// import AddIcon from '@material-ui/icons/Add';

// //import { Link, useHistory } from 'react-router-dom';
// import axios from "axios";

    

// function NewContent() {
//     const [selectedFile, setSelectedFile] = useState()
//     const [preview, setPreview] = useState()

//     // create a preview as a side effect, whenever selected file is changed
//     useEffect(() => {
//         if (!selectedFile) {
//             setPreview(undefined)
//             return
//         }

//         const objectUrl = URL.createObjectURL(selectedFile)
//         setPreview(objectUrl)

//         // free memory when ever this component is unmounted
//         return () => URL.revokeObjectURL(objectUrl)
//     }, [selectedFile])

//     const onSelectFile = e => {
//         if (!e.target.files || e.target.files.length === 0) {
//             setSelectedFile(undefined)
//             return
//         }

//         // I've kept this example simple by using the first image instead of multiple
//         setSelectedFile(e.target.files[0])
//     }

//     return (
//         <div>
//             <div className="write">
//             <div className="imgContainer">{selectedFile &&  <img className="writeImg" src={preview} alt="Preview"/> }</div>
//             <form className="writeForm">
//                 <div className="writeFormGroup">
//                     <label htmlFor="fileInput">
//                         <AddIcon className="writeIcon"/>
//                     </label>
//                     <input name="file" type="file" id="fileInput" style={{display:"none"}} onInput={onSelectFile} />
//                     <input name="content_title" type="text" placeholder="Title" className="writeInput" autoFocus={true}></input>
                    
//                 </div>
//                 <div className="writeFormGroup">
//                     <textarea name="content_description" placeholder="Add your content here" type="text" className="writeInput writeText"></textarea>
//                     <button className="writeSubmit">Publish</button>
//                 </div>
//             </form>
//         </div>
//         </div>
//     )
// }

// export default NewContent




