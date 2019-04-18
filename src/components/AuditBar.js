import React, { Component } from "react";

class AuditBar extends Component {
  state = {
    record: this.props.record,
    play: this.props.play
  };

  clickRecord = () => {
    this.setState({
      record: !this.state.record
    });
    this.props.toggleRecord();
  };

  clickPlay = () => {
    this.setState({
      play: !this.state.play
    });
    this.props.togglePlay();
  };

  render() {
    const isRecordMode = this.state.record;
    const isPlayMode = this.state.play;

    return (
      <div>
        <div className="center">
          <span onClick={() => this.clickRecord()}>
            {this.state.record ? (
              <a className="waves-effect waves-light btn-large red">
                <i className="material-icons">stop</i>
              </a>
            ) : (
              <a className="waves-effect waves-light btn-large red">
                <i className="material-icons">fiber_manual_record</i>
              </a>
            )}
          </span>

          <span onClick={() => this.clickPlay()}>
            {this.state.play ? (
              <a className="waves-effect waves-light btn-large">
                <i className="material-icons">stop</i>
              </a>
            ) : (
              <a className="waves-effect waves-light btn-large">
                <i className="material-icons">play_circle_outline</i>
              </a>
            )}
          </span>

          <span onClick={() => this.props.clearAudit()}>
            <a className="waves-effect waves-light btn-large orange">
              <i className="material-icons">cancel</i>
            </a>
          </span>
        </div>
        {isRecordMode ? (
          <h6 className="center red-text">Recording is on!</h6>
        ) : null}
        {isPlayMode ? (
          <h6 className="center green-text">Audit List Playing</h6>
        ) : null}
      </div>
    );
  }
}
export default AuditBar;
