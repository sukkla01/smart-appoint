import React, { useEffect, useState } from "react";
import { Cog, Trash, Edit, Plus } from "lucide-react";
import {
  Select,
  Modal,
  Form,
  Calendar,
  ConfigProvider,
  Input,
  Badge,
} from "antd";
import { CalendarMode } from "antd/es/calendar/generateCalendar";
import * as moment from "moment";
import "moment/locale/th";
moment.locale("th");
import th_TH from "antd/lib/locale/th_TH";
import axios from "axios";
import config from "../../config";

const BASE_URL = config.BASE_URL;

let listData = [
  { type: "warning", content: "This is warning event." },
  { type: "success", content: "This is usual event." },
];
const DoctorLimit = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [dataDoctor, setDataDoctor] = useState([]);
  const [dataClinic, setDataClinic] = useState([]);
  const [dataCal, setDataCal] = useState([]);
  const [clinic, setClinic] = useState("");
  const [doctor, setDoctor] = useState("");
  const [limit, setLimit] = useState(20);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getAll();
    getDoctorAll();
    getClinic();
  }, []);

  const dateCellRender = (value) => {
    // const listData = getListData(value);
    // console.log(moment(value).format("YYYY-MM-DD"));
    // console.log(dataCal);
    let date_ = moment(value).format("YYYY-MM-DD");
    let reder_ = "";

    dataCal.map((item, i) => {
      let date_ = moment(value).format("YYYY-MM-DD");
      let vstdate = moment(item.vstdate).format("YYYY-MM-DD");
      if (vstdate == date_) {
        reder_ = (
          <ul className="events">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-danger rounded-full mr-3" />
              <span className="truncate">.....</span>
            </div>
          </ul>
        );
      }
    });

 

    return reder_;
  };

  const getCalendar = async (value) => {
    const token = localStorage.getItem("token");
    console.log(value)
    let tmp_doctor = value == "" ? doctor : value;
    try {
      let res = await axios.get(
        `${BASE_URL}/get-Calendar/${clinic}/${tmp_doctor}`,
        {
          headers: { token: token },
        }
      );
      setDataCal(res.data);
      // console.log(res.data);
      dateCellRender(value);
    } catch (error) {
      console.log(error);
    }
  };

  const CalendarNew = () => {
    return (
      <Calendar
        locale="th_TH"
        onSelect={onSelectCala}
        dateCellRender={dateCellRender}
      />
    );
  };
  const getAll = async () => {
    const token = localStorage.getItem("token");

    try {
      let res = await axios.get(`${BASE_URL}/get-clinicdoctor-all`, {
        headers: { token: token },
      });
      setData(res.data);
      // console.log(res.data)
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
      res.data.map((item, i) => {
        tmp.push({
          value: item.doctor,
          label: item.tname,
        });
      });
      setDataDoctor(tmp);
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

  const onChangeClinic = (value) => {
    setClinic(value);
    console.log(value);
  };
  const onChangeDoctor = (value) => {
    setDoctor(value);
    getCalendar(value);
  };

  const onSearchClinic = (value) => {
    console.log("search:", value);
  };
  const onSearchDoctor = (value) => {
    console.log("search:", value);
  };

  const onSelectCala = async (value) => {
    const token = localStorage.getItem("token");

    let data = {
      clinic: clinic,
      doctor: doctor,
      limit: limit,
      date: value.format("YYYY-MM-DD"),
    };

    // console.log(data);
    if (clinic == "" || doctor == "") {
      alert("เลือกข้อมูลไม่ครบ");
    } else {
      try {
        let res = await axios.post(`${BASE_URL}/add-doctor-schedule`, data, {
          headers: { token: token },
        });
        getCalendar('');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="col-12 mt-6">
      <div className="intro-y    h-10">
        <div className="flex  ">
          <Cog className="top-menu__sub-icon " size={32} />
          <span className="text-3xl  truncate ml-4">ตารางตรวจแพทย์</span>
        </div>
        <br />
      </div>

      <div className="intro-y box">
        <div id="vertical-form" className="p-5">
          <div className="preview">
            <div className="overflow-x-auto">
              <div className="intro-y flex items-center h-2 mt-5">
                <div
                  className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-0 sm:mt-0"
                  style={{ width: 150 }}
                ></div>
                <div
                  className="form-check form-switch w-full  mt-0 sm:mt-0"
                  style={{ width: 150 }}
                >
                  <button
                    className="btn btn-success  mr-2 mb-2 ml-2 col-span-2  w-40"
                    // data-tw-toggle="modal"
                    // data-tw-target="#header-footer-modal-preview"
                    onClick={() => setOpen(true)}
                  >
                    <Plus
                      className="top-menu__sub-icon "
                      size={22}
                      style={{ marginRight: 5 }}
                    />
                    เพิ้ม
                  </button>
                </div>
              </div>

              <table className="table mt-6">
                <thead
                  className="bg-primary text-white s"
                  style={{ borderTopLeftRadius: 10 }}
                >
                  <tr>
                    <th className="whitespace-nowrap">#</th>
                    <th className="whitespace-nowrap">รหัส</th>
                    <th className="whitespace-nowrap">ชื่อคลินิก</th>
                    <th className="whitespace-nowrap">วันที่ออกตรวจ</th>
                    <th className="whitespace-nowrap">แพทย์</th>
                    <th className="whitespace-nowrap">จำนวนการนัด</th>
                    <th className="whitespace-nowrap">สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>013</td>
                        <td>คลินิกเบาหวาน</td>
                        <td>2022-10-01</td>
                        <td>นพ.ทดสอบ การเคลื่อนไหว</td>
                        <td>20</td>
                        <td>
                          <div>
                            <button className="btn btn-warning mr-1 mb-2">
                              <Edit className="top-menu__sub-icon " size={14} />
                            </button>

                            <button className="btn btn-danger mr-1 mb-2">
                              <Trash
                                className="top-menu__sub-icon "
                                size={14}
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal
        headStyle={{ backgroundColor: "red" }}
        title={"เพิ่มตารางตรวจแพทย์"}
        // centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width="70%"
        className="modalStyle2"
        okText="บันทึก"
        cancelText="ยกเลิก"
      >
        <div className="modal-body " style={{ marginTop: -30 }}>
          <div className="intro-y  px-5 pt-0 ">
            <div className="cols-8  ">
              <Form.Item label="คลินิก" rules={[{ required: true }]}>
                <Select
                  style={{ width: "100%" }}
                  showSearch
                  placeholder="เลือกคลินิก"
                  optionFilterProp="children"
                  onChange={onChangeClinic}
                  onSearch={onSearchClinic}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={dataClinic}
                />
              </Form.Item>
              <Form.Item label="แพทย์" rules={[{ required: true }]}>
                <Select
                  style={{ width: "100%" }}
                  showSearch
                  placeholder="เลือกคลินิก"
                  optionFilterProp="children"
                  onChange={onChangeDoctor}
                  onSearch={onSearchDoctor}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={dataDoctor}
                />
              </Form.Item>
              <Form.Item label="จำนวนการนัด" rules={[{ required: true }]}>
                <Input
                  value={limit}
                  onChange={(e) => {
                    setLimit(e.target.value);
                  }}
                />
              </Form.Item>
              {/* <hr /> */}
              <Form.Item label="วันออกตรวจ" rules={[{ required: true }]}>
                <ConfigProvider locale={th_TH}>
                  <div style={{ marginLeft: 100, marginTop: -30 }}>
                    <CalendarNew />
                  </div>
                </ConfigProvider>
              </Form.Item>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DoctorLimit;
