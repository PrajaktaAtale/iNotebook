import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title mx-4">{note.title}</h5>
            <DeleteIcon className="delete mx-1" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted Successfully","success");}}/>
            <EditIcon className="edit mx-1" onClick={()=>{updateNote(note)}}/>
          </div>
          <p className="card-text my-2">{note.description}</p>
          <p className="card-text">{note.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
