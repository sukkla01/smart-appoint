import React, { useEffect, useState } from "react";
import { CalendarCheck2, Plus } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";
import ModalAdd from "./ModalAdd";
import { Button, Modal, notification } from "antd";
import Lab from "./Lab";
import Xray from "./Xray";


const Appoint = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [formData, setFormData] = useState({ hn: "" });
  const [dataPatient, setDataPatient] = useState([1, 2, 3, 4, 5]);
  const [open, setOpen] = useState(false);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "แจ้งเตือน",
      description: "กรุณาระบุ HN",
      duration: 5,
      style: { backroundColor: "#164E63" },
    });
  };

  const title = (
    <div>
      <span>
        {/* <Plus
          className="top-menu__sub-icon "
          size={20}
          style={{ marginRight: 5 }}
        /> */}
      </span>
      <span>บันทึกรายการนัด</span>
    </div>
  );

  return (
    <div className="col-12 mt-6">
      <style jsx>{`
        .modalStyle2 .ant-modal-header {
            border-radius: 20px 20px 0 0;
            background-color: antiquewhite;
          }

        .txtRed{
            color :  red;
            margin-right : 10px
        }
      `}</style>

      <Modal
        headStyle={{ backgroundColor: 'red' }}
        title={title}
        // centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width="80%"
        className="modalStyle2"
        okText ='บันทึก'
        cancelText='ยกเลิก'

      >
        <div className="modal-body " style={{ marginTop: -30 }}>
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
                  <div className="text-slate-500">เพศ : ชาย อายุ : 35 ปี </div>
                </div>
              </div>
              <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/10 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                {/* <div className="font-medium text-center lg:text-left lg:mt-3 text-lg">
              <span>AN : 650000000</span>{" "}
              <span className="ml-4">ward : อายุรกรรมชาย</span>
            </div> */}
                <div className="flex flex-col justify-center items-center lg:items-start mt-0">
                  <div className="truncate sm:whitespace-normal flex items-center mt-3">
                    <b className="txtRed">สิทธิการรักษา : </b> บัตรทอง ท.
                    รายได้น้อย (ในเขต)
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
                <Lab />
              </div>
              <div
                id="example-tab-7"
                className="tab-pane leading-relaxed"
                role="tabpanel"
                aria-labelledby="example-7-tab"
              >
                <Xray />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* End Modal */}
      <div className="intro-y    h-10">
        <div className="flex  ">
          <CalendarCheck2 className="top-menu__sub-icon " size={32} />
          <span className="text-3xl  truncate ml-4">รายการนัด</span>
        </div>
        <br />
        {/* input */}
        <div className="grid grid-cols-8 ">
          <div>
            <label htmlFor="regular-form-1" className="form-label"></label>
            <input
              value={formData.hn}
              id="regular-form-1"
              type="text"
              className="form-control col-6"
              placeholder="กรอก HN"
              onChange={(e) => {
                // setIsCode(false)
                setFormData({ ...formData, hn: e.target.value });
              }}
            />
          </div>

          <button
            className="btn btn-success  mr-2 mb-2 ml-2 col-span-2  w-40"
            // data-tw-toggle="modal"
            // data-tw-target="#header-footer-modal-preview"
            onClick={() =>
              formData.hn == ""
                ? openNotificationWithIcon("error")
                : setOpen(true)
            }
          >
            <Plus
              className="top-menu__sub-icon "
              size={22}
              style={{ marginRight: 5 }}
            />
            บันทึกรายการนัด
          </button>
        </div>

        {/* input */}
        <div className="intro-y flex items-center h-2 mt-5">
          จำนวนการนัด 10 รายการ
          <div
            className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-0 sm:mt-0"
            style={{ width: 150 }}
          >
            <input
              id="show-example-1"
              data-target="#basic-accordion"
              className="show-code form-check-input mr-0 ml-3"
              type="checkbox"
            />
            <label className="form-check-label ml-2" htmlFor="show-example-1">
              เรียงเตียง
            </label>
          </div>
          <div
            className="form-check form-switch w-full  mt-0 sm:mt-0"
            style={{ width: 150 }}
          >
            <input
              id="show-example-1"
              data-target="#basic-accordion"
              className="show-code form-check-input mr-0 ml-3"
              type="checkbox"
            />
            <label className="form-check-label ml-2 " htmlFor="show-example-1">
              เรียงวันที่รับ
            </label>
          </div>
        </div>

        <div className="intro-y overflow-auto lg:overflow-visible mt-2 sm:mt-0">
          <table className="table table-report sm:mt-2">
            <tbody style={{ marginTop: -50 }}>
              {dataPatient.map((item, i) => {
                return (
                  <Link href={`/patient`}>
                    <tr className="intro-x cursor-pointer" key={i}>
                      <td className="w-20">
                        <div className="flex">
                          <div className="w-12 h-12 image-fit zoom-in">
                            <img
                              alt="Midone - HTML Admin Template"
                              className="tooltip rounded-full"
                              src="dist/images/avatar.png"
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-lg"> นายสุจินต์ สุกกล้า </span>

                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          <span className="mr-2"> HN : 0008262 </span> |
                          <span className="ml-2">คลินิก : ศัลยกรรมกระดูก</span>
                        </div>
                      </td>
                      <td className="text-left w-24">
                        <span className="text-sm"> 22/10/2565 </span>

                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          <span className="mr-2"> วันที่นัด</span>
                        </div>
                      </td>
                      <td className="text-center w-20">
                        <span className="text-sm"> 38 ปี </span>

                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          <span className="mr-2"> อายุ</span>
                        </div>
                      </td>

                      <td className="table-report__action w-32">
                        <div className="flex justify-center items-center">
                          <a className="flex items-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              icon-name="check-square"
                              data-lucide="check-square"
                              className="lucide lucide-check-square w-4 h-4 mr-1"
                            >
                              <polyline points="9 11 12 14 22 4" />
                              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                            </svg>
                            Edit
                          </a>
                          <a className="flex items-center text-danger">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              icon-name="trash-2"
                              data-lucide="trash-2"
                              className="lucide lucide-trash-2 w-4 h-4 mr-1"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                            Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                  </Link>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appoint;
