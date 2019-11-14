import React from "react";
import classes from "./Dialogs.module.scss";
import DialogItem from "../../components/Dialog-item/DialogItem";
import Message from "../../components/Message/Message";

class Dialogs extends React.Component {
  updateDialogMessage = e => {
    const body = e.target.value;
    this.props.updateDialogMessage(body);
  };

  sendDialogMessage = () => {
    this.props.sendDialogMessage();
  };

  render() {
    const { dialogs, messages, newMessageBody } = this.props.dialogPage;

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
              onChange={this.updateDialogMessage}
              value={newMessageBody}
            ></textarea>
            <button onClick={this.sendDialogMessage}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialogs;
