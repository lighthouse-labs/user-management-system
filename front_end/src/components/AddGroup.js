import React, { useState } from "react";
import './Users.scss'
import axios from 'axios'
import { Link } from "react-router-dom";


export default function AddGroup(props) {



  const [name, setName] = useState("")

  const addgroup = (name) => {
    const data = {
      name
    }
    console.log(data)
    axios.post("http://localhost:3001/api/groups", data)
      .then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
      .then(res => {
        console.log(res, "mm")
      })
  }
  return (
    <div className="add">
      <h1>Add a new group</h1>
      <br />
      <div className="form_elements" >
        <div class="form-group">
          <input
            class="form-control"
            name="group_name"
            type="text"
            placeholder="Enter group name"
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </div>
        <Link to="/"> <button type="submit" class="btn btn-primary" onClick={() => addgroup(name)} >
          Add
        </button></Link>
      </div>
    </div>
  )

}