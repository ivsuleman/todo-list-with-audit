import React, { Component } from "react";

class AuditList extends Component {
  render() {
      const auditList = this.props.audit.length ? (
        
          <h3>Audit of actions: </h3>
      this.props.audit.map(audit => {
        return (
          <div className="collection-item" key={audit.id}>
            <span>action date: {audit.date}</span>
            <span> | {audit.action}</span>
            <span> | {audit.id}</span>
            <span> | {audit.name}</span>
            <span> | {audit.description}</span>
            <span> | creation date: {audit.date}</span>
          </div>
        );
      })
    ) : (
      <p className="center">Audit is empty!</p>
    );

    return <div className="auditList collection">{auditList}</div>;
  }
}

export default AuditList;
