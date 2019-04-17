import React from "react";

const Audit = props => {
  return (
    <div>
      {props.auditMode ? (
        <span onClick={() => props.toggleAuditRecord()}>
          <a className="waves-effect waves-light btn-large red">
            <i className="material-icons">
              {props.auditMode ? "stop" : fiber_manual_record}
            </i>
          </a>
        </span>
      ) : (
        <span onClick={() => props.toggleAuditRecord()}>
          <a className="waves-effect waves-light btn-large red">
            <i className="material-icons">fiber_manual_record</i>
          </a>
        </span>
      )}
      <span>
        <a className="waves-effect waves-light btn-large">
          <i className="material-icons">play_circle_outline</i>
        </a>
      </span>
      <span onClick={() => props.clearAudit()}>
        <a className="waves-effect waves-light btn-large orange">
          <i className="material-icons">cancel</i>
        </a>
      </span>
    </div>
  );
};

export default Audit;
