import React from "react";

export default function AddGroup(props) {
  return (
    <div>
      <p>Enter the group name</p>
      <div className="form_elements" >
        <div class="form-group">
          <input
            class="form-control"
            name="group_name"
            type="text"
            placeholder="Enter group name"
          // value={first_name}
          // onChange={event => {
          //   setFirst_name(event.target.value);
          //}}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  )

}