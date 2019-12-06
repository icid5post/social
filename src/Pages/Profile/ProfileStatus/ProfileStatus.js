import React, { useEffect, useState } from "react";

const ProfileStatus = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const editStatusOn = () => {
    setEditMode(true);
  };

  const editStatusOff = () => {
    setEditMode(false);
    props.updateProfileStatus(status);
  };

  const onChangeStatus = e => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input
            onChange={onChangeStatus}
            onBlur={editStatusOff}
            autoFocus={true}
            type="text"
            value={status}
          />
        </div>
      ) : (
        <div onDoubleClick={editStatusOn}>{props.status || "----"}</div>
      )}
    </div>
  );
};

export default ProfileStatus;
