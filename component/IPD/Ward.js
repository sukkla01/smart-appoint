import React, { useEffect, useState } from "react";
import { Home, ChevronDown, Archive, LogOut } from "lucide-react";
import { useRouter } from "next/router";
import Link from 'next/link'

const Ward = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [dataPatient, setDataPatient] = useState([1, 2, 3, 4, 5]);

  const router = useRouter();
  const onPatient = (id) => {
    router.push("/patient").then(() => router.reload());
    // router.push({
    //     pathname: '/patient',
    //     query: { id: id },
    //   })
  };
  return (
    <div>
      {/* list */}
      <div className="col-12 mt-6">
        <div className="intro-y    h-10">
          <div className="flex  ">
         
              <Archive className="top-menu__sub-icon " size={32} />
              <span className="text-3xl  truncate ml-4">IPD Dashboard</span>
         
          </div>
          {/* 
          <Archive className="top-menu__sub-icon" color="#164E63" size={32} />

          <span className="text-3xl  truncate mr-5">IPD Dashboard</span> */}
        </div>

        <div className="intro-y block mt-5 items-center h-10">
          <button className="btn btn-success  mr-2 mb-2">
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
              icon-name="hard-drive"
              data-lucide="hard-drive"
              className="lucide lucide-hard-drive w-4 h-4 mr-2"
            >
              <line x1={22} y1={12} x2={2} y2={12} />
              <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
              <line x1={6} y1={16} x2="6.01" y2={16} />
              <line x1={10} y1={16} x2="10.01" y2={16} />
            </svg>
            อายุรกรรมหญิง{" "}
            <div className="ml-2 text-xs text-white px-1 rounded-full bg-danger ml-auto">
              10
            </div>
          </button>
          {data.map((item, i) => {
            return (
              <button className="btn btn-secondary  mr-2 mb-2" key={i}>
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
                  icon-name="hard-drive"
                  data-lucide="hard-drive"
                  className="lucide lucide-hard-drive w-4 h-4 mr-2"
                >
                  <line x1={22} y1={12} x2={2} y2={12} />
                  <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
                  <line x1={6} y1={16} x2="6.01" y2={16} />
                  <line x1={10} y1={16} x2="10.01" y2={16} />
                </svg>
                อายุรกรรมชาย
              </button>
            );
          })}
        </div>
        <br />

        <div className="intro-y flex items-center h-2 mt-8">
          จำนวนคนอายุรกรรม : 30 ชาย : 20 หญิง : 10 ประเภทผู้ป่วย : A : 0 B : 3 C
          : 4 D : 0
      
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
              <label
                className="form-check-label ml-2 "
                htmlFor="show-example-1"
              >
                เรียงวันที่รับ
              </label>
            </div>
         
        </div>

        <div className="intro-y overflow-auto lg:overflow-visible mt-2 sm:mt-0">
          <table className="table table-report sm:mt-2">
            {/* <thead>
              <tr>
                <th className="whitespace-nowrap"></th>
                <th className="whitespace-nowrap"></th>
                <th className="text-center whitespace-nowrap w-15">วันที่รับ</th>
                <th className="text-center whitespace-nowrap w-5">อายุ</th>
                <th className="text-center whitespace-nowrap w-5">เตียง</th>
              </tr>
            </thead> */}
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
                        <a className="font-medium whitespace-nowrap">
                          <span className="text-lg"> นายสุจินต์ สุกกล้า </span>
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          <span className="mr-2"> HN : 0008262 </span> |
                          <span className="ml-2"> AN : 6500006565 </span>
                        </div>
                      </td>
                      <td className="text-left w-24">
                        <a className="font-medium whitespace-nowrap">
                          <span className="text-sm"> 22/10/2565 10:00:23 </span>
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          <span className="mr-2"> วันที่รับ</span>
                        </div>
                      </td>
                      <td className="text-center w-20">
                        <a className="font-medium whitespace-nowrap">
                          <span className="text-sm"> 38 ปี </span>
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          <span className="mr-2"> อายุ</span>
                        </div>
                      </td>
                      <td className="text-center w-20">
                        <a className="font-medium whitespace-nowrap">
                          <span className="text-sm"> 6401 </span>
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          <span className="mr-2"> เตียง</span>
                        </div>
                      </td>
                      <td className="w-20">
                        <div className="py-1 px-2 rounded-full  w-10 bg-success text-white cursor-pointer font-medium">
                          <div className="text-center"> 3C</div>
                        </div>
                      </td>
                      <td className="table-report__action w-56">
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
        {/* <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" ="#">
                  
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
                    icon-name="chevrons-left"
                    className="lucide lucide-chevrons-left w-4 h-4"
                    data-lucide="chevrons-left"
                  >
                    <polyline points="11 17 6 12 11 7" />
                    <polyline points="18 17 13 12 18 7" />
                  </svg>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" ="#">
                  
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
                    icon-name="chevron-left"
                    className="lucide lucide-chevron-left w-4 h-4"
                    data-lucide="chevron-left"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </a>
              </li>
              <li className="page-item">
                
                <a className="page-link" ="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                
                <a className="page-link" ="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                
                <a className="page-link" ="#">
                  2
                </a>
              </li>
              <li className="page-item">
                
                <a className="page-link" ="#">
                  3
                </a>
              </li>
              <li className="page-item">
                
                <a className="page-link" ="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" ="#">
                  
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
                    icon-name="chevron-right"
                    className="lucide lucide-chevron-right w-4 h-4"
                    data-lucide="chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" ="#">
                  
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
                    icon-name="chevrons-right"
                    className="lucide lucide-chevrons-right w-4 h-4"
                    data-lucide="chevrons-right"
                  >
                    <polyline points="13 17 18 12 13 7" />
                    <polyline points="6 17 11 12 6 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <select className="w-20 form-select box mt-3 sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default Ward;
