import React, { useState,useEffect } from 'react';
import { EditorState, convertFromRaw , convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import axios from 'axios';


import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './FINAL_TEXT.css';
const FinalText_2 = () => {
   // const a='{"blocks":[{"key":"dhev8","text":"ASD","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}'
         // const content  = convertFromRaw(JSON.parse(a));
//   const [editorState, setEditorState] = useState(
//     () => EditorState.createWithContent(content),
//   );
const [editorState, setEditorState] = useState();
const[axiosdata,setAxiosData] = useState()

 
  const handleEditorChange = (state) => {
    //   console.log(this.state)
    setEditorState(state);
    console.log(state)
    
  }
 
  const sendData=()=>{

    const tnum="1"
    try {
        var contentState = editorState.getCurrentContent();
        const rawState = JSON.stringify(convertToRaw(contentState))
       axios.post('http://localhost:5000/criteria3/text1/add/1',{content: rawState, _id:tnum}) 
//     var fs = require('fs');
//     fs.writeFileSync("/c3t1_json.json", rawState, function(err) {
//     if (err) {
//         console.log(err);
//     }
// });
      console.log("button clicked")
     
   
   } catch(error) {

    
   }


}
const getData=async()=>{
    try{
        await axios
      .get("http://localhost:5000/criteria3/text1/display/1")
      .then((response) => response.data)
      .then((data) => {
        
        console.log("THIS IS THE DATA"+data.content);

        setAxiosData(data.content)
        const jsondata = convertFromRaw(JSON.parse(axiosdata));
        const editorState = EditorState.createWithContent(jsondata);
        setEditorState(editorState)
        
       
      });
    }catch(error){

    }
    console.log("THIS IS OUTSIDE"+axiosdata)
    // const jsondata = convertFromRaw(JSON.parse(axiosdata));
    // const editorState = EditorState.createWithContent(jsondata);
    // setEditorState(editorState)

}

// useEffect(()=>{
    
//     getData()
     
// },[])
  
  
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <button onClick={getData}>VIEW</button>
      <button onClick={sendData}>SAVE</button>
      
    </div>
  )
}
export default FinalText_2;