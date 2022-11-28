import React, { useEffect, useState } from "react";
import { Cog, Trash, Edit, Plus, Flag } from "lucide-react";
import { Switch, Modal, Form, Input, Select, Popconfirm } from "antd";
import axios from "axios";
import config from "../../config";

const DoctorG = () => {
  const [data, setData] = useState([]);

  const getDoctorAll = async () => {
    const token = localStorage.getItem("token");
    try {
      let res = await axios.get(`${BASE_URL}/get-user-all`, {
        headers: { token: token },
      });
      setData(res.data);
      // console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="col-12 mt-6">
      <div className="intro-y    h-10">
        <div className="flex  ">
          <Cog className="top-menu__sub-icon " size={32} />
          <span className="text-3xl  truncate ml-4">จัดการแพทย์</span>
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
                    onClick={() => openModal()}
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

              <table className="table  mt-10">
                <thead
                  className="bg-primary text-white"
                  style={{ borderTopLeftRadius: 10 }}
                >
                  <tr>
                    <th className="whitespace-nowrap">#</th>
                    <th className="whitespace-nowrap">ชื่อ-สกุล</th>
                    <th className="whitespace-nowrap">username</th>
                    <th className="whitespace-nowrap">password</th>
                    <th className="whitespace-nowrap">เลขบัตรประชาชน</th>
                    <th className="whitespace-nowrap">หน่วยงาน</th>
                    {/* <th className="whitespace-nowrap">จำนวนการนัด</th> */}
                    <th className="whitespace-nowrap">สิทธิ</th>
                    <th className="whitespace-nowrap">สถานะ</th>
                    <th className="whitespace-nowrap">#</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.usr_fullname}</td>
                        <td>{item.usr_username}</td>
                        <td>{item.usr_password}</td>
                        <td>{item.usr_cid}</td>
                        <td>{item.nameDept}</td>
                        <td>{item.role}</td>
                        <td>
                          {item.usr_status == 1 ? (
                            <Switch
                              defaultChecked
                              onChange={(e) => onChangeStatus(e, item.usr_username)}
                            />
                          ) : (
                            <Switch onChange={(e) => onChangeStatus(e, item.usr_username)} />
                          )}
                        </td>
                        <td>
                          <div>
                            <button
                              className="btn btn-warning mr-1 mb-2"
                              onClick={() => onEdit(item.usr_username)}
                            >
                              <Edit className="top-menu__sub-icon " size={14} />
                            </button>
                            <Popconfirm
                              title="คุณต้องการลบหรือไม่"
                              onConfirm={() => del(item.usr_cid)}
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

    
    </div>
  )
}

export default DoctorG