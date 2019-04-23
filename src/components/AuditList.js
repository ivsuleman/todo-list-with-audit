import React, { Component } from "react";
import Scroll from "./Scroll";
import "../styles/audit.css";

class AuditList extends Component {
  render() {
    const auditList = this.props.audit.length ? (
      this.props.audit.map(audit => {
        return (
          <div className="collection-item" key={audit.id}>
            <span>action date: {audit.date}</span>
            <span> | {audit.action}</span>
            <div>
              <span>{audit.id}</span>
              <span> | {audit.name}</span>
              <span> | {audit.description}</span>
              <span> | creation date: {audit.date}</span>
            </div>
          </div>
        );
      })
    ) : (
      <p className="center orange-text">Nothing has been recorded so far</p>
    );

    return (
      <div className="audit-list collection">
        <div>
          <h5 className="center blue-text">ToDo Audit List</h5>
          <Scroll>{auditList}</Scroll>
        </div>
      </div>
    );
  }
}

export default AuditList;
