import React, { useEffect, useState } from "react";
import { Cog, Trash, Edit, Plus, Search, RotateCcw } from "lucide-react";
import {
  Select,
  Modal,
  Form,
  Calendar,
  ConfigProvider,
  Input,
  notification,
  Popconfirm,
  DatePicker,
} from "antd";
import * as moment from "moment";
import "moment/locale/th";
moment.locale("th");
import th_TH from "antd/lib/locale/th_TH";
import axios from "axios";
import config from "../../config";

const BASE_URL = config.BASE_URL;

const DoctorLimit = () => {
  const [data, setData] = useState([]);
  const [dataDoctor, setDataDoctor] = useState([]);
  const [dataClinic, setDataClinic] = useState([]);
  const [dataCal, setDataCal] = useState([]);
  const [clinic, setClinic] = useState("");
  const [doctor, setDoctor] = useState("");
  const [limit, setLimit] = useState(20);
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    vstdate: null,
    clinic: null,
    doctor: null,
  });

  useEffect(() => {
    getAll();
    getDoctorAll();
    getClinic();
  }, []);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "แจ้งเตือน",
      description: "บันทึกเรียบร้อยแล้ว",
      duration: 3,
      style: { backroundColor: "#164E63" },
    });
  };

  const openNotificationWithIconError = (type) => {
    notification[type]({
      message: "แจ้งเตือน",
      description: "เลือกข้อมูลไม่ครบ  ไม่ได้เลือกคลินิกหรือแพทย์",
      duration: 3,
      style: { backroundColor: "#164E63" },
    });
  };

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
              <div className="w-3 h-3 bg-warning rounded-full mr-3" />
              <span className="truncate">{item.limit} คน</span>
            </div>
          </ul>
        );
      }
    });

    return reder_;
  };

  const getCalendar = async (value) => {
    const token = localStorage.getItem("token");
    console.log(value);
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

  // const CalendarNew = () => {
  //   return (
  //     <Calendar
  //       locale="th_TH"
  //       onSelect={onSelectCala}
  //       // dateCellRender={dateCellRender}
  //     />
  //   );
  // };
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

  const getFilter = async () => {
    const token = localStorage.getItem("token");

    let data = {
      vstdate: filterData.vstdate,
      doctor: filterData.doctor,
      clinic: filterData.clinic,
    };

    try {
      let res = await axios.post(`${BASE_URL}/get-clinicdoctor-filter`, data, {
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
      openNotificationWithIconError("error");
    } else {
      try {
        let res = await axios.post(`${BASE_URL}/add-doctor-schedule`, data, {
          headers: { token: token },
        });
        getCalendar("");
        openNotificationWithIcon("success");
        getAll();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const del = async (id) => {
    // setOpen(false)
    const token = localStorage.getItem("token");
    let data = {
      id: id,
    };
    try {
      let res = await axios.post(`${BASE_URL}/delete-doctor`, data, {
        headers: { token: token },
      });
      getAll();
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = async () => {
    const token = localStorage.getItem("token");
    let path = "";
    let data = {
      vstdate: filterData.vstdate,
      clinic: filterData.clinic,
      doctor: filterData.doctor,
    };

    if (
      filterData.vstdate == null &&
      filterData.clinic == null &&
      filterData.doctor == null
    ) {
      console.log('all')
      try {
        let res = await axios.get(`${BASE_URL}/get-clinicdoctor-all`, {
          headers: { token: token },
        });
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('filter')

      try {
        let res = await axios.post(
          `${BASE_URL}/get-clinicdoctor-filter`,
          data,
          {
            headers: { token: token },
          }
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onChangeDateFilter = (date, dateString) => {
    setFilterData({ ...filterData, vstdate: dateString });
  };

  const onResetFilter = () => {
    setFilterData({ ...filterData, vstdate: null, clinic: null, doctor: null });
  };
  return (
    <div className="col-12 mt-6">
      {console.log(filterData.vstdate)}
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
                <div className="mr-3 text-xl">Filter</div>
                <ConfigProvider locale={th_TH}>
                  <DatePicker
                    onChange={onChangeDateFilter}
                    placeholder="------เลือกวันที่------"
                    style={{ width: 200 }}
                    value={
                      filterData.vstdate == null
                        ? null
                        : moment(filterData.vstdate, "YYYY-MM-DD")
                    }
                  />
                </ConfigProvider>
                <Select
                  style={{ width: 200, marginLeft: 5 }}
                  showSearch
                  placeholder="-----เลือกคลินิก----"
                  optionFilterProp="children"
                  onChange={(e) => {
                    setFilterData({ ...filterData, clinic: e });
                  }}
                  onSearch={onSearchClinic}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={dataClinic}
                  value={(filterData.clinic = null ? null : filterData.clinic)}
                />
                <Select
                  style={{ width: 200, marginLeft: 5 }}
                  showSearch
                  placeholder="-----เลือกแพทย์-----"
                  optionFilterProp="children"
                  onChange={(e) => {
                    setFilterData({ ...filterData, doctor: e });
                  }}
                  onSearch={onSearchDoctor}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={dataDoctor}
                  value={(filterData.doctor = null ? null : filterData.doctor)}
                />
                <button
                  className="btn btn-primary mr-1 mb-2 mt-2  ml-2"
                  onClick={onSearch}
                >
                  <Search className="top-menu__sub-icon " size={14} />
                </button>
                <button
                  className="btn btn-warning mr-1 mb-2 mt-2  ml-1"
                  onClick={onResetFilter}
                >
                  <RotateCcw className="top-menu__sub-icon " size={14} />
                </button>

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
                    เพิ่ม
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
                    <th className="whitespace-nowrap">รหัสคลินิก</th>
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
                        <td>{item.clinic}</td>
                        <td>{item.name}</td>
                        <td>{moment(item.vstdate).format("D-MMM-Y")}</td>
                        <td>{item.tname}</td>
                        <td>{item.limit}</td>
                        <td>
                          <div>
                            <Popconfirm
                              title="คุณต้องการลบหรือไม่"
                              onConfirm={() => del(item.id)}
                              // onCancel={cancel}
                              okText="ตกลง"
                              cancelText="ออก"
                            >
                              <button className="btn btn-danger mr-1 mb-2">
                                <Trash
                                  className="top-menu__sub-icon "
                                  size={14}
                                />
                              </button>
                            </Popconfirm>
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
        okText="ตกลง"
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
                <div
                  className="intro-y box"
                  style={{ backgroundColor: "#C8D6DC" }}
                >
                  <ConfigProvider locale={th_TH}>
                    <div style={{ padding: 3 }}>
                      {/* <CalendarNew /> */}
                      <Calendar
                        locale="th_TH"
                        onSelect={onSelectCala}
                        dateCellRender={dateCellRender}
                      />
                    </div>
                  </ConfigProvider>
                </div>
              </Form.Item>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DoctorLimit;
