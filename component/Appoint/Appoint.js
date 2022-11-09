import React, { useEffect, useState } from "react";
import { CalendarCheck2, Plus } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";
import ModalAdd from "./ModalAdd";

const Appoint = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [dataPatient, setDataPatient] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="col-12 mt-6">
      <ModalAdd />
      <div className="intro-y    h-10">
        <div className="flex  ">
          <CalendarCheck2 className="top-menu__sub-icon " size={32} />
          <span className="text-3xl  truncate ml-4">รายการนัด</span>
        </div>
        <br />
        <button
          className="btn btn-success  mr-2 mb-2"
          data-tw-toggle="modal"
          data-tw-target="#header-footer-modal-preview"
        >
          <Plus
            className="top-menu__sub-icon "
            size={22}
            style={{ marginRight: 5 }}
          />
          บันทึกรายการนัด
        </button>

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
                          <span className="ml-2">
                            {" "}
                            คลินิก : ศัลยกรรมกระดูก{" "}
                          </span>
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
