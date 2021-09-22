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

//     const [content_id,getid] = useState("");
//     const [content_description,setDescription] = useState("");
//     const [content_title,setTitle] = useState("");
//     const [file,setFile] = useState(null);
//     const [posted_date,setPostedDate] = useState("");
   

//     const contentadd = ()=>{
//       console.log(content_id);
//       console.log(file);

//     //   const d1 = new Date(UploadDate);
//     //   const d2 = new Date(expDate);
//     //   if (d2< d1) {
//     //     alert("Expiry Date must be after the Date Upoaded");
//     //     return;
//     //   }


//       const formdata= new FormData();
//       const data = {
//         content_description:content_description,
//         content_title:content_title,
//         //file:file,
//         posted_date: Date.now(),
//         }

// console.log(data);
//         formdata.append("data", JSON.stringify(data)) 
//         formdata.append("file", file)

// console.log(formdata.get("data"));
// console.log(formdata.get("file"));

//        axios.post('http://localhost:17152/add-content', formdata
//        ).then(()=>{
//            console.log("success");

//          });

//          alert(" Added Successfully ");
//         // history.push("/AddForms");    //redirect path
//     };


//     return (
//         <div>
//             <div className="write">
//             <div className="imgContainer">{selectedFile &&  <img className="writeImg" src={preview} alt="Preview"/> }</div>
//             <form className="writeForm">
//                 <div className="writeFormGroup">
//                     <label htmlFor="fileInput">
//                         <AddIcon className="writeIcon"/>
//                     </label>
//                     <input name="file" type="file" id="fileInput" style={{display:"none"}} onInput={onSelectFile} onChange={(event)=>{setFile(event.target.files[0]);}} />
//                     <input name="content_title" type="text" placeholder="Title" className="writeInput" autoFocus={true}></input>
                    
//                 </div>
//                 <div className="writeFormGroup">
//                     <textarea name="content_description" placeholder="Add your content here" type="text" className="writeInput writeText"></textarea>
//                     <button OnClick={contentadd} className="writeSubmit">Publish</button>
//                 </div>
//             </form>
//         </div>
//         </div>
//     )
// }

// export default NewContent

import React, { useState, useEffect } from 'react'
import '../css/AddNewContent.css'
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";


function NewContent() {


    // const [content_id,getid] = useState("");
    const [content_description,setDescription] = useState("");
    const [content_title,setTitle] = useState("");
    const [state,setState]=useState({file:'',display_photo:'',message:'',success:false})
    // const [posted_date,setPostedDate] = useState("");
 
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

      const contentadd = () => {
    
        if (state.file) {
        let formData = new FormData();
        formData.append('file', state.file)
        axios.post('http://localhost:17152/imageUpload', formData, {
            'content-Type': 'multipart/form-data',
    })
}
     axios.post('http://localhost:17152/add-content', {
            display_photo: state.file.name,
            content_description: content_description,
            content_title: content_title,
            // posted_date: posted_date,
            
        }).then(() => {
            alert("The new product was added successfully.")
        });

 
 }

    return (
        <div>
            <div className="write">
            <div className="imgContainer"></div>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <AddIcon className="writeIcon"/>
                    </label>
                    <input name="file" type="file" id="fileInput" style={{display:"none"}} onChange={handleInput} />
                    <input name="content_title" type="text" placeholder="Title" className="writeInput" autoFocus={true}
                     onChange={(event) => { setTitle(event.target.value); }}></input>
                    
                </div>
                <div className="writeFormGroup">
                    <textarea name="content_description" placeholder="Add your content here" type="text" className="writeInput writeText"
                    onChange={(event) => { setDescription(event.target.value); }}></textarea>
                    <button onClick={contentadd} className="writeSubmit">Publish</button>
                </div>
            </form>
        </div>
        </div>
    )
};

export default NewContent


