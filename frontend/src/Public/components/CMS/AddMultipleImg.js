import React, { useState } from "react";
import "../css/AddMultipleImg.css";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function AddMultipleImg () {
  const [file, setFile] = useState([]);

  function uploadSingleFile(e) {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
    console.log("file", file);
  }

  function upload(e) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }

  return (
    <form className="AllCont">
        <input type="text" placeholder="Title" className="WriteTitle" autoFocus={true}></input>
        <br/>
      <div className="AllImgPreview">
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <div className="AllImgDiv" key={item}>
                <img className="AllImages" src={item} alt="" />
                <label htmlFor="ImgsInput">
                        <HighlightOffIcon className="DeleteIcon"/>
                </label>
                <button type="button" id="ImgsInput" style={{display:"none"}} onClick={() => deleteFile(index)}/>
              </div>
            );
          })}
      </div>
    <br/>
      <div className="btnGroup">
        <label htmlFor="inputImg" className="writeBrowse">Browse</label>
        <input
          id="inputImg"
          type="file"
          style={{display:"none"}}
          disabled={file.length === 10}
          onChange={uploadSingleFile}
        >
        </input>
      
      <button
        type="button"
        className="writeUpload"
        onClick={upload}
      >
        Upload
      </button>
      </div>
      <br/>
      <label>Plese note that you can upload maximum of 10 images only</label>
    </form>
  );
}

export default AddMultipleImg;