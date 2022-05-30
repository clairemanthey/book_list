import React, { useState } from "react";


const AddTask = ({ onAdd}) => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");

    const onSubmit = (e) => {
    	e.preventDefault()

    	if(!title){
    		alert("Please add a book")
    		return
    	}

    	onAdd({ title, author})

    	setTitle("");
    	setAuthor("");
    }

	return(
		<form className="add-form" onSubmit={onSubmit}>
		  <div className="form-control">
		    <label>Title</label> 
   		    <input 
   		      type="text" 
   		      placeholder="Add Title" 
   		      value={title} 
   		      onChange={(e) => setTitle(e.target.value)} />
          </div>
		  <div className="form-control">
		    <label>Author</label> 
   		    <input 
   		      type="text" 
   		      placeholder="Add Author"
   		      value={author}
   		      onChange={(e) => setAuthor(e.target.value)} 
   		       />
          </div>


          <input className="btn btn-block" type="submit" value="Add Book" />
		</form>
	)
}

export default AddTask