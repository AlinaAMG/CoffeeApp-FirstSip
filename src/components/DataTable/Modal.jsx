import React from "react";

function BaseModal({ title, onClose, onSubmit, onDelete, children }) {
  return (
    <div
      className="modal show fade"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-lg"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          {/* Body (dynamic) */}
          <div className="modal-body">
            {children}
          </div>

          {/* Footer (actions) */}
          <div className="modal-footer">
            {onDelete && (
              <button className="btn btn-danger me-auto" onClick={onDelete}>
                Delete
              </button>
            )}
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            {onSubmit && (
              <button className="btn btn-primary" onClick={onSubmit}>
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseModal;
