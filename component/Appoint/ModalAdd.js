import React from "react";
import { CalendarCheck2, Plus } from "lucide-react";
import { Tabs } from "antd";

const ModalAdd = () => {
  return (
    <div
      id="header-footer-modal-preview"
      className="modal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog " style={{ width: "80%" }}>
        <div className="modal-content">
          {/* BEGIN: Modal Header */}
          <div
            className="modal-header "
            style={{
              backgroundColor: "#249D93",
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          >
            <Plus
              className="top-menu__sub-icon "
              size={20}
              style={{ marginRight: 5 }}
            />
            <h2 className="font-medium text-base mr-auto">บันทึกรายการนัด</h2>
          </div>
          {/* END: Modal Header */}
          {/* BEGIN: Modal Body */}
          <div className="modal-body " style={{ marginTop: -20 }}>
            <div className="intro-y  px-5 pt-0 ">
              <div className="flex flex-col lg:flex-row border-b border-slate-200/200 dark:border-darkmode-600 pb-2 -mx-5">
                <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                  <div className="w-20 h-20 sm:w-20 sm:h-20 flex-none lg:w-20 lg:h-20 image-fit relative">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="dist/images/avatar.png"
                    />
                  </div>
                  <div className="ml-5">
                    <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
                      นายสุจินต์ สุกกล้า
                    </div>
                    <div className="text-slate-500">HN : 0008262</div>
                    <div className="text-slate-500">
                      เพศ : ชาย อายุ : 35 ปี{" "}
                    </div>
                  </div>
                </div>
                <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/10 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                  {/* <div className="font-medium text-center lg:text-left lg:mt-3 text-lg">
              <span>AN : 650000000</span>{" "}
              <span className="ml-4">ward : อายุรกรรมชาย</span>
            </div> */}
                  <div className="flex flex-col justify-center items-center lg:items-start mt-0">
                    <div className="truncate sm:whitespace-normal flex items-center mt-3">
                      <b>สิทธิการรักษา : </b> บัตรทอง ท. รายได้น้อย (ในเขต)
                    </div>
                  </div>
                </div>
                <div className="mt-1 lg:mt-0 flex-1 flex items-center justify-end px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0">
                  {/* <div className="mt-3">
              <button className="btn btn-outline-success w-24 h-24 inline-block mr-1 mb-0 text-2xl  items-center">
                <BedSingle className="top-menu__sub-icon " size={32} />{" "}
                <p>6401</p>
              </button>
            </div> */}
                  <div className="mt-3"></div>
                </div>
              </div>
            </div>
            <div>
              <ul
                className="nav nav-link-tabs col-6 "
                role="tablist"
                style={{ width: 500 }}
              >
                <li
                  id="example-5-tab"
                  className="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    className="nav-link w-full py-2 active"
                    data-tw-toggle="pill"
                    data-tw-target="#example-tab-5"
                    type="button"
                    role="tab"
                    aria-controls="example-tab-5"
                    aria-selected="true"
                  >
                    บันทึกรายการนัด
                  </button>
                </li>
                <li
                  id="example-6-tab"
                  className="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    className="nav-link w-full py-2"
                    data-tw-toggle="pill"
                    data-tw-target="#example-tab-6"
                    type="button"
                    role="tab"
                    aria-controls="example-tab-6"
                    aria-selected="false"
                  >
                    สั่ง Lab ล่วงหน้า
                  </button>
                </li>
                <li
                  id="example-6-tab"
                  className="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    className="nav-link w-full py-2"
                    data-tw-toggle="pill"
                    data-tw-target="#example-tab-7"
                    type="button"
                    role="tab"
                    aria-controls="example-tab-7"
                    aria-selected="false"
                  >
                    สั่ง x-ray ล่วงหน้า
                  </button>
                </li>
              </ul>
              <div className="tab-content mt-5">
                <div
                  id="example-tab-5"
                  className="tab-pane leading-relaxed active"
                  role="tabpanel"
                  aria-labelledby="example-5-tab"
                >
                  บันทึกรายการนัด
                </div>
                <div
                  id="example-tab-6"
                  className="tab-pane leading-relaxed"
                  role="tabpanel"
                  aria-labelledby="example-6-tab"
                >
                  สั่ง Lab ล่วงหน้า
                </div>
                <div
                  id="example-tab-7"
                  className="tab-pane leading-relaxed"
                  role="tabpanel"
                  aria-labelledby="example-7-tab"
                >
                  สั่ง x-ray ล่วงหน้า
                </div>
              </div>
            </div>
          </div>
          {/* END: Modal Body */}
          {/* BEGIN: Modal Footer */}
          <div className="modal-footer">
            <button
              type="button"
              data-tw-dismiss="modal"
              className="btn btn-outline-secondary w-20 mr-1"
            >
              ยกเลิก
            </button>
            <button type="button" className="btn btn-primary w-20">
              บันทึก
            </button>
          </div>
          {/* END: Modal Footer */}
        </div>
      </div>
    </div>
  );
};

export default ModalAdd;
