import React, { useEffect, useState } from "react";
import { Cog, Trash, Edit, Plus } from "lucide-react";
import { Select, Modal, Form, Calendar, ConfigProvider, Input } from "antd";
import { CalendarMode } from "antd/es/calendar/generateCalendar";
import * as moment from "moment";
import "moment/locale/th";
moment.locale("th");
import th_TH from "antd/lib/locale/th_TH";

const DoctorLimit = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [dataCal, setDataCal] = useState([]);
  const [clinic, setClinic] = useState("");
  const [doctor, setDoctor] = useState("");
  const [limit, setLimit] = useState(20);
  const [open, setOpen] = useState(false);

  const onChangeStatus = (checked, i) => {
    console.log(`switch to ${checked} ${i}`);
  };

  const onChangeClinic = (value) => {
    setClinic(value);
  };
  const onChangeDoctor = (value) => {
    setDoctor(value);
  };

  const onSearchClinic = (value) => {
    console.log("search:", value);
  };
  const onSearchDoctor = (value) => {
    console.log("search:", value);
  };

  const onSelectCala = (value) => {
    console.log(value.format("YYYY-MM-DD"));
    if ((clinic = "" || doctor == "")) {
      alert("ต้องไม่ว่าง");
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
        width="50%"
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
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
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
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="จำนวนการนัด" rules={[{ required: true }]}>
                  <Input value={limit} />
                </Form.Item>
              {/* <hr /> */}
              <Form.Item label="วันออกตรวจ" rules={[{ required: true }]}>
                <ConfigProvider locale={th_TH}>
                  <div style={{ marginLeft: 100, marginTop: -30 }}>
                    <Calendar locale="th_TH" onSelect={onSelectCala} />
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
