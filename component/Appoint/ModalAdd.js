import React from "react";
import { CalendarCheck2, Plus } from "lucide-react";

const ModalAdd = () => {
  return (
    <div
      id="header-footer-modal-preview"
      className="modal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog "  style={{ width: '80%' }}>
        <div className="modal-content">
          {/* BEGIN: Modal Header */}
          <div className="modal-header " style={{ backgroundColor : '#249D93',borderTopLeftRadius : 5,borderTopRightRadius : 5 }}>  
          <Plus
            className="top-menu__sub-icon "
            size={20}
            style={{ marginRight: 5 }}
          />
            <h2 className="font-medium text-base mr-auto">บันทึกรายการนัด</h2>
          </div>
          {/* END: Modal Header */}
          {/* BEGIN: Modal Body */}
          <div className="modal-body grid grid-cols-12 gap-4 gap-y-3">
              {/* body */}
          </div>
          {/* END: Modal Body */}
          {/* BEGIN: Modal Footer */}
          <div className="modal-footer">
            
            <button
              type="button"
              data-tw-dismiss="modal"
              className="btn btn-outline-secondary w-20 mr-1"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary w-20">
              Send
            </button>
          </div>
          {/* END: Modal Footer */}
        </div>
      </div>
    </div>
  );
};

export default ModalAdd;
