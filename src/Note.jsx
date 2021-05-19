import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Tooltip from '@material-ui/core/Tooltip';
const Note = (props) => {

const deleteNote=()=>{
    props.deleteItem(props.id);

}
    return (
        <div className="note">
            <h2>{props.title}</h2>
            <br />
            <p>{props.content}</p>
            <Tooltip title="Delete">
            <button className='btn' onClick={deleteNote}>
           
            <DeleteOutlineIcon className="deleteicon"/></button>
            </Tooltip>
        </div>
    )
}

export default Note
