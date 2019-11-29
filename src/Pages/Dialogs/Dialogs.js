import React from "react";
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  const updateDialogMessage = e => {
    const body = e.target.value;
    props.messageChange(body);
  };

  const sendDialogMessage = () => {
    props.sendMessage();
  };

  const { dialogs, messages, newMessageBody } = props.dialogPage;
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsGroup}>
        {dialogs.map(item => (
          <DialogItem
            name={item.name}
            link={`/dialogs/${item.id}`}
            key={item.id}
          />
        ))}
      </div>
      <div className={classes.messages}>
        {messages.map(item => (
          <Message message={item.message} key={item.id} />
        ))}
        <div>
          <textarea
            onChange={updateDialogMessage}
            value={newMessageBody}
          ></textarea>
          <button onClick={sendDialogMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
