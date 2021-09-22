// import React, { useState, useEffect } from 'react'
// import '../css/AddNewContent.css'
// import AddIcon from '@material-ui/icons/Add';
// import axios from "axios";


// function NewContent() {


//     // const [content_id,getid] = useState("");
//     const [content_description,setDescription] = useState("");
//     const [content_title,setTitle] = useState("");
//     const [state,setState]=useState({file:'',display_photo:'',message:'',success:false})
//     // const [posted_date,setPostedDate] = useState("");
 
//     const handleInput = (e) => {
//         let reader = new FileReader();
//         let file = e.target.files[0]
//         reader.onloadend = () => {
//           setState({
//             ...state,
//             file: file,
//             display_photo: reader.result,
//             message: ""
//           })
      
//         }
//         reader.readAsDataURL(file);
//       }

//       const contentadd = () => {
    
//         if (state.file) {
//         let formData = new FormData();
//         formData.append('file', state.file)
//         axios.post('http://localhost:17152/imageUpload', formData, {
//             'content-Type': 'multipart/form-data',
//     })
// }
//      axios.post('http://localhost:17152/add-content', {
//             display_photo: state.file.name,
//             content_description: content_description,
//             content_title: content_title,
//             // posted_date: posted_date,
            
//         }).then(() => {
//             alert("The new product was added successfully.")
//         });

 
//  }

//     return (
//         <div>
//             <div className="write">
//             <div className="imgContainer"></div>
//             <form className="writeForm">
//                 <div className="writeFormGroup">
//                     <label htmlFor="fileInput">
//                         <AddIcon className="writeIcon"/>
//                     </label>
//                     <input name="file" type="file" id="fileInput" style={{display:"none"}} onChange={handleInput} />
//                     <input name="content_title" type="text" placeholder="Title" className="writeInput" autoFocus={true}
//                      onChange={(event) => { setTitle(event.target.value); }}></input>
                    
//                 </div>
//                 <div className="writeFormGroup">
//                     <textarea name="content_description" placeholder="Add your content here" type="text" className="writeInput writeText"
//                     onChange={(event) => { setDescription(event.target.value); }}></textarea>
//                     <button onClick={contentadd} className="writeSubmit">Publish</button>
//                 </div>
//             </form>
//         </div>
//         </div>
//     )
// };

// export default NewContent

