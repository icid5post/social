import React from "react";

class ProfileStatusContainer extends React.Component {
  state = {
    status: this.props.status,
    editMode: false
  };

  editStatusOn = () => {
    this.setState({
      editMode: true
    });
  };

  editStatusOff = () => {
    this.setState({
      editMode: false
    });
    this.props.updateProfileStatus(this.state.status);
  };

  onChangeStatus = e => {
    this.setState({
      status: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              onChange={this.onChangeStatus}
              onBlur={this.editStatusOff}
              autoFocus={true}
              value={this.state.status}
              type="text"
            />
          </div>
        ) : (
          <div onDoubleClick={this.editStatusOn}>
            {this.props.status || "set status"}
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatusContainer;
