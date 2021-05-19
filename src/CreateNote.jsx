import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
const CreateNote = (props) => {
    const[expand,setExpand]=useState(false)
    const[note,setNote]=useState({
        title:'',
        content:'',
    });
    const inputEvent=(event)=>{
        const{
            name,value}=event.target;
        setNote((preData)=>{
            return{
                ...preData,
                [name]:value,
            };
        });
        console.log(note)
    }
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        })

    }

    const expandIt=()=>{
        setExpand(true);
    }
    const bToNormal=()=>{
        setExpand(false);
    }
    return (

        <>
    
        <div className="main_note"  onDoubleClick={bToNormal}>
       <form>
          { expand ?<input type="text" value={note.title} name="title" onChange={inputEvent} placeholder="Title" autoComplete="off" />:null}
           <textarea 
            value={note.content}
            name="content" 
           onChange={inputEvent} id="" cols="5" rows="5"
            placeholder="Write a note...."
             onClick={expandIt}
            
              ></textarea>
              {expand?(
           <Tooltip title="Add">
            < Button className="new_btn" onClick={addEvent}> 
            <AddIcon/>
            </Button>
            </Tooltip>):null}

        </form>     
        </div>
    </>
    )
}

export default CreateNote;
