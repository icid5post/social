import React from "react";

const ProfileStatus = props => {
  return (
    <div>
      {props.editMode ? (
        <div>
          <input
            onBlur={props.editStatusOff}
            autoFocus={true}
            type="text"
            value={props.status}
          />
        </div>
      ) : (
        <div onDoubleClick={props.editStatusOn}>{props.status}</div>
      )}
    </div>
  );
};

export default ProfileStatus;
