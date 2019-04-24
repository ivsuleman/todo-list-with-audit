import React, { Component } from "react";
import "../styles/audit.css";

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
                <i className="material-icons right">stop</i>stop recording
              </a>
            ) : (
              <a className="waves-effect waves-light btn-large red">
                <i className="material-icons right">fiber_manual_record</i>
                record
              </a>
            )}
          </span>

          <span onClick={() => this.clickPlay()}>
            {this.state.play ? (
              <a className="waves-effect waves-light btn-large">
                <i className="material-icons right">stop</i>stop playing
              </a>
            ) : (
              <a className="waves-effect waves-light btn-large">
                <i className="material-icons right">play_circle_outline</i>play
              </a>
            )}
          </span>

          <span onClick={() => this.props.clearAudit()}>
            <a className="waves-effect waves-light btn-large orange">
              <i className="material-icons right">cancel</i>clear
            </a>
          </span>
        </div>
      </div>
    );
  }
}
export default AuditBar;
