import React, { useEffect, useState } from "react";
import { CalendarCheck2, Plus } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";
import ModalAdd from "./ModalAdd";
import {
  Button,
  Modal,
  notification,
  Select,
  ConfigProvider,
  DatePicker,
  TimePicker,
} from "antd";
import Lab from "./Lab";
import Xray from "./Xray";

import * as moment from "moment";
import "moment/locale/th";
moment.locale("th");
import th_TH from "antd/lib/locale/th_TH";
import axios from "axios";
import config from "../../config";
const md5 = require("md5");
import jwt_decode from "jwt-decode";
import HistoryVn from "./HistoryVn";

const BASE_URL = config.BASE_URL;

const Appoint = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ cid: "", user_send: '' });
  const [dataPatient, setDataPatient] = useState([]);
  const [dataHistory, setDataHistory] = useState([]);
  const [open, setOpen] = useState(false);
  const [dataClinic, setDataClinic] = useState([]);
  const [dataDoctor, setDataDoctor] = useState([]);
  const [labAppoint, setLabAppoint] = useState([]);
  const [dataReason, setDataReason] = useState([]);
  const [dataPttype, setDataPttype] = useState([]);
  const [dataKskdepart, setDataKskdepart] = useState([]);
  const [activeModal, setActiveModal] = useState(2);
  const [checkLimit, setCheckLimit] = useState([
    { toapp: 0, totallimit: 0, isLimit: false },
  ]);

  const [filterData, setFilterData] = useState({
    vstdate: null,
    start_time: null,
    end_time: null,
    clinic: null,
    doctor: null,
    reason: null,
    next_pttype: null,
    kskdepart: null,
    lab: [],
    xray: [],
  });

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "แจ้งเตือน",
      description: "กรุณาระบุ เลขบัตรประชาชน 13 หลัก",
      duration: 5,
      style: { backroundColor: "#164E63" },
    });
  };
  const openNotificationWithIconSuccess = (type) => {
    notification[type]({
      message: "แจ้งเตือน",
      description: "บันทึกรายการนัดเรียบร้อยแล้ว",
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

  useEffect(() => {
    getHistoryAppoint()
    getClinic();
    getPttype();
    getReason();
    getKskdepart();
    getProfile()
    // getLabAppoint();
  }, []);

  const getProfile = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    setFormData({ ...formData, user_send: decoded.deptname })
  };

  const getPatientId = async (cid) => {
    const token = localStorage.getItem("token");
    let md5_cid = md5(cid);
    try {
      let res = await axios.get(`${BASE_URL}/get-patient-id/${md5_cid}`, {
        headers: { token: token },
      });
      setDataPatient(res.data);
      setOpen(true);
      // console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  const getHistoryAppoint = async () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    try {
      let res = await axios.get(`${BASE_URL}/get-history-appoint/${decoded.deptname}`, {
        headers: { token: token },
      });
      setDataHistory(res.data);
      console.log(res.data)

    } catch (error) {
      console.log(error);
    }
  };

  const getClinic = async () => {
    const token = localStorage.getItem("token");
    let tmp = [];
    try {
      let res = await axios.get(`${BASE_URL}/get-clinic-doctor-all`, {
        headers: { token: token },
      });

      res.data.map((item, i) => {
        tmp.push({
          value: item.clinic,
          label: item.name,
        });
      });
      setDataClinic(tmp);
    } catch (error) {
      console.log(error);
    }
  };
  const getPttype = async () => {
    const token = localStorage.getItem("token");
    let tmp = [];

    try {
      let res = await axios.get(`${BASE_URL}/get-pttype`, {
        headers: { token: token },
      });
      res.data.map((item, i) => {
        tmp.push({
          value: item.pttype,
          label: item.name,
        });
      });
      setDataPttype(tmp);
    } catch (error) {
      console.log(error);
    }
  };
  const getKskdepart = async () => {
    const token = localStorage.getItem("token");
    let tmp = [];

    try {
      let res = await axios.get(`${BASE_URL}/get-kskdepartment`, {
        headers: { token: token },
      });
      res.data.map((item, i) => {
        tmp.push({
          value: item.depcode,
          label: item.department,
        });
      });
      setDataKskdepart(tmp);
    } catch (error) {
      console.log(error);
    }
  };

  const getReason = async () => {
    const token = localStorage.getItem("token");
    let tmp = [];
    try {
      let res = await axios.get(`${BASE_URL}/get-oapp-cause`, {
        headers: { token: token },
      });
      console.lo;
      res.data.map((item, i) => {
        tmp.push({
          value: item.name,
          label: item.name,
        });
      });
      setDataReason(tmp);
    } catch (error) {
      console.log(error);
    }
  };

  const getDoctorAll = async () => {
    const token = localStorage.getItem("token");
    let tmp = [];

    try {
      let res = await axios.get(`${BASE_URL}/get-doctor-all`, {
        headers: { token: token },
      });
      setDataDoctor(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLabAppoint = async () => {
    const token = localStorage.getItem("token");

    try {
      let res = await axios.get(`${BASE_URL}/get-lab-appoint`, {
        headers: { token: token },
      });
      setLabAppoint(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const onChangeClinic = (value) => {
  //   setClinic(value);
  //   console.log(value);
  // };

  const onChangeDateAppoint = (date, dateString) => {
    setFilterData({ ...filterData, vstdate: dateString });
    if (filterData.clinic != "") {
      getDoctorAppoint(dateString, "");
    }
  };
  const onSelectClinic = (e) => {
    setFilterData({ ...filterData, clinic: e, doctor: null });
    if (filterData.vstdate != "") {
      getDoctorAppoint("", e);
    }
  };
  const onSelectDoctor = async (e) => {
    setFilterData({ ...filterData, doctor: e });
    const token = localStorage.getItem("token");

    try {
      let res = await axios.get(
        `${BASE_URL}/get-limit-appoint/${filterData.vstdate}/${filterData.clinic}/${e}`,
        {
          headers: { token: token },
        }
      );
      console.log(res.data);
      setCheckLimit({
        ...checkLimit,
        toapp: res.data[0].toapp,
        totallimit: res.data[0].slimit,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getDoctorAppoint = async (vstdate, clinic) => {
    const token = localStorage.getItem("token");

    let tmp_vstdate = vstdate == "" ? filterData.vstdate : vstdate;
    let tmp_clinic = clinic == "" ? filterData.clinic : clinic;
    let tmp = [];

    try {
      let res = await axios.get(
        `${BASE_URL}/get-limit-doctor/${tmp_vstdate}/${tmp_clinic}`,
        {
          headers: { token: token },
        }
      );
      res.data.map((item, i) => {
        tmp.push({
          value: item.doctor,
          label: item.tname,
        });
      });
      setDataDoctor(tmp);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetValueOapp = () => {
    setCheckLimit({ ...checkLimit, toapp: 0, totallimit: 0, isLimit: false });
    setFilterData({
      ...filterData,
      vstdate: null,
      start_time: null,
      end_time: null,
      clinic: null,
      doctor: null,
      reason: null,
      next_pttype: null,
      kskdepart: null,
      lab: [],
      xray: [],
    });
  };

  const onCancelModal = () => {
    setOpen(false);
    resetValueOapp();
  };



  const onSubmit = async () => {
    // setOpen(false)
    const token = localStorage.getItem("token");

    let data = {
      general: filterData,
      hn: dataPatient[0].hn,
      user_send: formData.user_send,
      lab: [],
      xray: []
    }

    try {
      let res = await axios.post(`${BASE_URL}/add-appoint`, data, {
        headers: { token: token },
      });
      setOpen(false)
      openNotificationWithIconSuccess('success')
      resetValueOapp()
    } catch (error) {
      console.log(error);
    }
  };


  const onModalXray = (isModal, data) => {

    console.log(data)
  }
  const onModalLab = (isModal, data) => {

    console.log(data)
  }
  const onModalHistory = async (data) => {
    setActiveModal(2)
    const token = localStorage.getItem("token");

    try {
      let res = await axios.get(`${BASE_URL}/get-oapp-id/${data}`, {
        headers: { token: token },
      });
      console.log(res.data[0]);
      setFilterData({
        vstdate: moment(res.data[0].nextdate).format('YYYY-MM-DD'),
        start_time: res.data[0].nexttime,
        end_time: res.data[0].endtime,
        clinic: res.data[0].clinic,
        doctor: res.data[0].doctor,
        reason: res.data[0].app_cause,
        next_pttype: res.data[0].next_pttype,
        kskdepart: res.data[0].depcode,
        lab: [],
        xray: [],
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="col-12 mt-6">
      <style jsx>{`
        .modalStyle2 .ant-modal-header {
          border-radius: 20px 20px 0 0;
          background-color: antiquewhite;
        }

        .txtRed {
          color: red;
          margin-right: 10px;
        }
      `}</style>
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
              value={formData.cid}
              id="regular-form-1"
              type="text"
              className="form-control col-6"
              placeholder="กรอก เลขบัตรประชน 13 หลัก"
              onChange={(e) => {
                // setIsCode(false)
                setFormData({ ...formData, cid: e.target.value });
              }}
            />
          </div>

          <button
            className="btn btn-success  mr-2 mb-2 ml-2 col-span-2  w-40"
            // data-tw-toggle="modal"
            // data-tw-target="#header-footer-modal-preview"
            onClick={() =>
              formData.cid == ""
                ? openNotificationWithIcon("error")
                : getPatientId(formData.cid)
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
          ประวัติการนัด จำนวน 10 รายการ
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
              {dataHistory.map((item, i) => {
                return (

                  <tr className="intro-x cursor-pointer" key={i}
                    onClick={() => {
                      getPatientId(item.cid)
                      setOpen(true)
                      setFormData({...formData,cid : item.cid})
                    }}
                  >
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
                      <span className="text-lg"> {item.tname} </span>

                      <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                        <span className="mr-2"> HN :  {item.hn} </span> |
                        <span className="ml-2">คลินิก :  {item.cname}</span>
                      </div>
                    </td>
                    <td className="text-left w-24">
                      <span className="text-sm"> {moment(item.nextdate).format('DD/MM/yyyy')} </span>

                      <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                        <span className="mr-2"> วันที่นัด</span>
                      </div>
                    </td>
                    <td className="text-center w-20">
                      <span className="text-sm">  {item.tage} ปี </span>

                      <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                        <span className="mr-2"> อายุ</span>
                      </div>
                    </td>

                    <td className="table-report__action w-32">
                      <div className="flex justify-center items-center">

                      </div>
                    </td>
                  </tr>

                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        headStyle={{ backgroundColor: "red" }}
        title={title}
        // centered
        open={open}
        onOk={onSubmit}
        onCancel={onCancelModal}
        width="80%"
        className="modalStyle2"
        okText="บันทึก"
        cancelText="ยกเลิก"
        bodyStyle={{ backgroundColor: "#F8FAFC" }}
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
                    {dataPatient.length > 0 ? dataPatient[0].tname : ""}
                  </div>
                  <div className="text-slate-500">
                    HN : {dataPatient.length > 0 ? dataPatient[0].hn : ""}
                  </div>
                  <div className="text-slate-500">
                    เพศ : {dataPatient.length > 0 ? dataPatient[0].sexname : ""}
                    อายุ : {dataPatient.length > 0 ? dataPatient[0].tage : ""}
                    ปี
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/10 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                {/* <div className="font-medium text-center lg:text-left lg:mt-3 text-lg">
              <span>AN : 650000000</span>
              <span className="ml-4">ward : อายุรกรรมชาย</span>
            </div> */}
                <div className="flex flex-col justify-center items-center lg:items-start mt-0">
                  <div className="truncate sm:whitespace-normal flex items-center mt-3">
                    <b className="txtRed">สิทธิการรักษา : </b>
                    {dataPatient.length > 0 ? dataPatient[0].ptname : ""}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center lg:items-start mt-0">
                  <div className="truncate sm:whitespace-normal flex items-center mt-3">
                    <b className="txtRed">ที่อยู่ : </b>
                    {dataPatient.length > 0 ? dataPatient[0].taddr : ""}
                  </div>
                </div>
              </div>
              <div className="mt-1 lg:mt-0 flex-1 flex items-center justify-end px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0">
                <div className="mt-3"></div>
              </div>
            </div>
          </div>
          <div>
            <ul
              className="nav nav-link-tabs  "
              role="tablist"
              style={{ width: 600 }}
            >
              <li
                id="example-4-tab"
                className="nav-item flex-1"
                role="presentation"
              >
                <button
                  className={activeModal == 1 ? "nav-link w-full py-2 active" : "nav-link w-full py-2 "}
                  data-tw-toggle="pill"
                  data-tw-target="#example-tab-4"
                  type="button"
                  role="tab"
                  aria-controls="example-tab-4"
                  aria-selected="true"
                  onClick={() => setActiveModal(1)}
                >
                  ประวัติการนัด
                </button>
              </li>
              <li
                id="example-5-tab"
                className="nav-item flex-1"
                role="presentation"
              >
                <button
                  className={activeModal == 2 ? "nav-link w-full py-2 active" : "nav-link w-full py-2 "}
                  data-tw-toggle="pill"
                  data-tw-target="#example-tab-5"
                  type="button"
                  role="tab"
                  aria-controls="example-tab-5"
                  aria-selected="true"
                  onClick={() => setActiveModal(2)}
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
                  className={activeModal == 3 ? "nav-link w-full py-2 active" : "nav-link w-full py-2 "}

                  data-tw-toggle="pill"
                  data-tw-target="#example-tab-6"
                  type="button"
                  role="tab"
                  aria-controls="example-tab-6"
                  aria-selected="false"
                  onClick={() => setActiveModal(3)}
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
                  className={activeModal == 4 ? "nav-link w-full py-2 active" : "nav-link w-full py-2 "}

                  data-tw-toggle="pill"
                  data-tw-target="#example-tab-7"
                  type="button"
                  role="tab"
                  aria-controls="example-tab-7"
                  aria-selected="false"
                  onClick={() => setActiveModal(4)}
                >
                  สั่ง x-ray ล่วงหน้า
                </button>
              </li>
            </ul>
            <div className="tab-content mt-2">
              <div
                id="example-tab-4"
                className={activeModal == 1 ? "tab-pane leading-relaxed active" : "tab-pane leading-relaxed"}
                role="tabpanel"
                aria-labelledby="example--tab"
              >
                {/* <button className="btn btn-success" onClick={() => setActiveModal(2)}>ddd</button> */}
                <HistoryVn onChange={onModalHistory} cid={formData.cid} />
              </div>
              <div
                id="example-tab-5"
                className={activeModal == 2 ? "tab-pane leading-relaxed active" : "tab-pane leading-relaxed"}

                role="tabpanel"
                aria-labelledby="example-5-tab"
              >
                <div className=" grid grid-cols-12 gap-3">
                  {/* //--------------------------------------------------------- เลือกวันที่  -------------------------------------------------------------------// */}
                  <div className="col-span-12 lg:col-span-8">
                    <div className="box intro-y mt-3">
                      <div className="box">
                        <div className="intro-y box p-5 mt-5 sm:mt-2">
                          <div className="col-span-12 lg:col-span-12 ">
                            <label style={{ marginRight: 27 }}>วันที่นัด</label>
                            <ConfigProvider locale={th_TH}>
                              <DatePicker
                                onChange={onChangeDateAppoint}
                                placeholder="------เลือกวันที่นัด------"
                                style={{ width: 245 }}
                                value={
                                  filterData.vstdate == null
                                    ? null
                                    : moment(filterData.vstdate, "YYYY-MM-DD")
                                }
                              />
                            </ConfigProvider>
                            <label style={{ marginRight: 35, marginLeft: 30 }}>
                              ช่วงเวลา
                            </label>
                            <TimePicker
                              placeholder="00:00"
                              defaultValue={moment("00:00", "HH:mm")}
                              format={"HH:mm"}
                              style={{ width: 105 }}
                              onChange={(time, timeString) => {
                                setFilterData({
                                  ...filterData,
                                  start_time: timeString,
                                });
                              }}
                              value={
                                filterData.start_time == null
                                  ? null
                                  : moment(filterData.start_time, "HH:mm")
                              }
                            />
                            <label style={{ marginRight: 10, marginLeft: 10 }}>
                              ถึง
                            </label>

                            <TimePicker
                              placeholder="00:00"
                              defaultValue={moment("00:00", "HH:mm")}
                              format={"HH:mm"}
                              style={{ width: 105 }}
                              onChange={(time, timeString) => {
                                setFilterData({
                                  ...filterData,
                                  end_time: timeString,
                                });
                              }}
                              value={
                                filterData.end_time == null
                                  ? null
                                  : moment(filterData.end_time, "HH:mm")
                              }
                            />
                          </div>
                          <div className="col-span-8 lg:col-span-8 mt-4">
                            <label style={{ marginRight: 30 }}>คลินิก</label>
                            <Select
                              style={{ width: 250, marginLeft: 5 }}
                              showSearch
                              placeholder="-----เลือกคลินิก----"
                              optionFilterProp="children"
                              onChange={(e) => onSelectClinic(e)}
                              // onSearch={onSearchClinic}
                              filterOption={(input, option) =>
                                (option?.label ?? "")
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                              options={dataClinic}
                              value={
                                (filterData.clinic = null
                                  ? null
                                  : filterData.clinic)
                              }
                            />

                            <label style={{ marginRight: 5, marginLeft: 20 }}>
                              เหตุผลการนัด
                            </label>
                            <Select
                              style={{ width: 250, marginLeft: 5 }}
                              showSearch
                              placeholder="-----เลือกเหตุผลการนัด----"
                              optionFilterProp="children"
                              onChange={(e) => {
                                setFilterData({ ...filterData, reason: e });
                              }}
                              // onSearch={onSearchClinic}
                              filterOption={(input, option) =>
                                (option?.label ?? "")
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                              options={dataReason}
                              value={
                                (filterData.reason = null
                                  ? null
                                  : filterData.reason)
                              }
                            />
                          </div>

                          <div className="col-span-8 lg:col-span-8 mt-4">
                            <label style={{ marginRight: 20 }}>แพทย์</label>
                            <Select
                              style={{ width: 250, marginLeft: 15 }}
                              showSearch
                              placeholder="-----เลือกแพทย์-----"
                              optionFilterProp="children"
                              onChange={(e) => onSelectDoctor(e)}
                              // onSearch={onSearchDoctor}
                              filterOption={(input, option) =>
                                (option?.label ?? "")
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                              options={dataDoctor}
                              value={
                                (filterData.doctor = null
                                  ? null
                                  : filterData.doctor)
                              }
                            />

                            <label style={{ marginRight: 10, marginLeft: 22 }}>
                              สิทธิครั้งหน้า
                            </label>
                            <Select
                              style={{ width: 250, marginLeft: 5 }}
                              showSearch
                              placeholder="-----เลือกสิทธิครั้งหน้า-----"
                              optionFilterProp="children"
                              onChange={(e) => {
                                setFilterData({
                                  ...filterData,
                                  next_pttype: e,
                                });
                              }}
                              // onSearch={onSearchDoctor}
                              filterOption={(input, option) =>
                                (option?.label ?? "")
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                              options={dataPttype}
                              value={
                                (filterData.next_pttype = null
                                  ? null
                                  : filterData.next_pttype)
                              }
                            />
                          </div>
                          <div className="col-span-8 lg:col-span-8 mt-4">
                            <label style={{ marginRight: 10, marginLeft: 335 }}>
                              ระบุห้องตรวจ
                            </label>
                            <Select
                              style={{ width: 250, marginLeft: 5 }}
                              showSearch
                              placeholder="-----เลือกห้องตรวจ-----"
                              optionFilterProp="children"
                              onChange={(e) => {
                                setFilterData({
                                  ...filterData,
                                  kskdepart: e,
                                });
                              }}
                              // onSearch={onSearchDoctor}
                              filterOption={(input, option) =>
                                (option?.label ?? "")
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                              options={dataKskdepart}
                              value={
                                (filterData.kskdepart = null
                                  ? null
                                  : filterData.kskdepart)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* //------------------------------------------------------------- เลือกวันที่  ------------------------------------------------------------------// */}

                  {/* //------------------------------------------------------------- จำนวนการนัด  ------------------------------------------------------------------// */}
                  <div className="col-span-12 lg:col-span-4">
                    <div className="box intro-y mt-3" style={{ height: 165 }}>
                      <div className="col-span-12 lg:col-span-12 px-4 py-4">
                        <div className="text-center mt-5">
                          <div style={{ fontSize: 26 }}>
                            {dataDoctor.length == 0 &&
                              filterData.vstdate != null &&
                              filterData.clinic != null
                              ? ""
                              : "จำนวนการนัด"}
                          </div>
                          <div style={{ fontSize: 26 }}>
                            {dataDoctor.length == 0 &&
                              filterData.vstdate != null &&
                              filterData.clinic != null
                              ? "ไม่มีแพทย์ออกตรวจ"
                              : ""}
                            {dataDoctor.length > 0 ? checkLimit.toapp : ""}
                            {dataDoctor.length > 0 ? "/" : ""}
                            {dataDoctor.length > 0 ? checkLimit.totallimit : ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* //------------------------------------------------------------- END จำนวนการนัด  ------------------------------------------------------------------// */}
                </div>
                <div className="grid grid-cols-12 gap-3">
                  {/* //--------------------------------------------------------- เหตุผลนัด  -------------------------------------------------------------------// */}
                  {/* <div className="col-span-12 lg:col-span-4">
                    <div className="box intro-y mt-3">
                      <div className="box">
                        <div className="intro-y box pl-5 pt-5 pb-5 mt-5 sm:mt-2">
                          <div className="col-span-8 lg:col-span-8 mt-4"></div>
                          <div className="col-span-8 lg:col-span-8 mt-4">
                            <label style={{ marginRight: 5, marginLeft: 11 }}>
                              รายการ x-ray
                            </label>
                            <Select
                              style={{ width: 200, marginLeft: 5 }}
                              showSearch
                              placeholder="-----เลือกสิทธิครั้งหน้า-----"
                              optionFilterProp="children"
                              onChange={(e) => {
                                setFilterData({ ...filterData, doctor: e });
                              }}
                              // onSearch={onSearchDoctor}
                              filterOption={(input, option) =>
                                (option?.label ?? "")
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                              options={dataDoctor}
                              value={
                                (filterData.doctor = null
                                  ? null
                                  : filterData.doctor)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* //------------------------------------------------------------- END เลือกวันที่  ------------------------------------------------------------------// */}

                  {/* //------------------------------------------------------------- START ระบุเพศ  ------------------------------------------------------------------// */}
                  {/* <div className="col-span-12 lg:col-span-8">
                    <div className="box intro-y mt-3">
                      <div className="col-span-12 lg:col-span-12 px-4 py-4">
                        <div style={{ fontSize: 16 }}>LAB (พิมพ์ลงใบนัด)</div>
                        <div className="form-check mt-5">
                          <>
                          
                            <div className="intro-y col-span-12 p items-center mt-0">
                              {labAppoint.map((item, i) => {
                                return (
                                  <button className="btn btn-defaults btn-sm  mr-2  mt-2">
                                    {item.name}
                                  </button>
                                );
                              })}
                            </div>

                          
                          </>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* //------------------------------------------------------------- END ระบุเพศ  ------------------------------------------------------------------// */}
                </div>
              </div>
              <div
                id="example-tab-6"
                className={activeModal == 3 ? "tab-pane leading-relaxed active" : "tab-pane leading-relaxed"}
                role="tabpanel"
                aria-labelledby="example-6-tab"
              >
                <Lab onChange={onModalLab} />
              </div>
              <div
                id="example-tab-7"
                className={activeModal == 4 ? "tab-pane leading-relaxed active" : "tab-pane leading-relaxed"}

                role="tabpanel"
                aria-labelledby="example-7-tab"
              >
                <Xray onChange={onModalXray} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* End Modal */}
    </div>
  );
};

export default Appoint;
