import React, { useEffect, useState } from "react";
import { Cog, Trash, Edit, Plus, Flag } from "lucide-react";
import { Switch, Modal, Form, Input, Select, Popconfirm } from "antd";
import axios from "axios";
import config from "../../config";

const BASE_URL = config.BASE_URL;

const Users_ = () => {
  const [data, setData] = useState([]);
  const [dataDept, setDataDept] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    tname: "",
    cid: "",
    status: true,
    tel: "",
    dept: null,
  });

  useEffect(() => {
    getUsersAll();
    getDeptAll();
  }, []);

  const getUsersAll = async () => {
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
  const getDeptAll = async () => {
    const token = localStorage.getItem("token");
    try {
      let res = await axios.get(`${BASE_URL}/get-dept-all`, {
        headers: { token: token },
      });
      setDataDept(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeStatus = async (e,username) => {
    console.log(e,username);
    const token = localStorage.getItem("token");

    let data = {
      status : e,
      usr_username : username
    }

    try {
      let res = await axios.post(`${BASE_URL}/update-user-status`, data, {
        headers: { token: token },
      });
      getUsersAll();
    
    } catch (error) {
      console.log(error);
    }
  };
  const onSelectDept = (value) => {
    console.log(value);
    setFormData({ ...formData, dept: value });
  };

  const onSubmit = async () => {
    // setOpen(false)
    console.log(formData);
    const token = localStorage.getItem("token");

    try {
      let res = await axios.post(`${BASE_URL}/add-user`, formData, {
        headers: { token: token },
      });
      getUsersAll();
      onReset();
      setOpen(false)
      // Alert()
    } catch (error) {
      console.log(error);
    }
  };
  const onEdit = async (username) => {
    setOpen(true);
    console.log(username);
    const token = localStorage.getItem("token");
    try {
      let res = await axios.get(`${BASE_URL}/get-user-id/${username}`, {
        headers: { token: token },
      });
      console.log(res.data);
      setFormData({
        ...formData,
        username: res.data[0].usr_username,
        password: res.data[0].usr_password,
        tname: res.data[0].usr_fullname,
        cid: res.data[0].usr_cid,
        status: res.data[0].usr_status == 1 ? true : false,
        // tel: "",
        dept: res.data[0].usr_dept,
      });
    } catch (error) {
      console.log(error);
    }

    // setFormData({
    //   ...formData,
    //   username: formData.username,
    //   password: formData.password,
    //   tname: formData.tname,
    //   cid: "",
    //   status: true,
    //   // tel: "",
    //   dept: null,
    // });
    // try {
    //   let res = await axios.post(`${BASE_URL}/add-user`, formData, {
    //     headers: { token: token },
    //   });
    //   getUsersAll();
    //   onReset();
    //   // setOpen(false)
    //   // Alert()
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const del = async (cid) => {
    // setOpen(false)
    const token = localStorage.getItem("token");
    let data = {
      cid: cid,
    };
    try {
      let res = await axios.post(`${BASE_URL}/delete-user`, data, {
        headers: { token: token },
      });
      getUsersAll();
    } catch (error) {
      console.log(error);
    }
  };

  const onReset = () => {
    setFormData({
      ...formData,
      username: "",
      password: "",
      tname: "",
      cid: "",
      status: true,
      // tel: "",
      dept: null,
    });
  };

  const onExit = () => {
    onReset();
    setOpen(false);
  };

  return (
    <div className="col-12 mt-6">
      <div className="intro-y    h-10">
        <div className="flex  ">
          <Cog className="top-menu__sub-icon " size={32} />
          <span className="text-3xl  truncate ml-4">จัดการผู้ใช้งาน</span>
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
                    <th className="whitespace-nowrap">แผนก</th>
                    {/* <th className="whitespace-nowrap">จำนวนการนัด</th> */}
                    <th className="whitespace-nowrap">สถานะ</th>
                    <th className="whitespace-nowrap">#</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{item.usr_fullname}</td>
                        <td>{item.usr_username}</td>
                        <td>{item.usr_password}</td>
                        <td>{item.usr_cid}</td>
                        <td>{item.nameDept}</td>
                        <td>
                          {item.usr_status == 1 ? (
                            <Switch
                              defaultChecked
                              onChange={(e) => onChangeStatus(e,item.usr_username)}
                            />
                          ) : (
                            <Switch onChange={(e) => onChangeStatus(e,item.usr_username)} />
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

      <Modal
        headStyle={{ backgroundColor: "red" }}
        title={"เพิ่มผู้ใช้งาน"}
        // centered
        open={open}
        onOk={onSubmit}
        onCancel={onExit}
        width="50%"
        className="modalStyle2"
        okText="บันทึก"
        cancelText="ยกเลิก"
      >
        <div className="modal-body " style={{ marginTop: -30 }}>
          <div className="intro-y  px-5 pt-0 ">
            <div className="cols-8  ">
              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                // initialValues={{ size: componentSize }}
                // onValuesChange={onFormLayoutChange}
              >
                <Form.Item label="ชื่อ-สกุล" rules={[{ required: true }]}>
                  <Input
                    value={formData.tname}
                    onChange={(e) => {
                      setFormData({ ...formData, tname: e.target.value });
                    }}
                  />
                </Form.Item>
                <Form.Item label="เลขบัตร 13 หลัก" rules={[{ required: true }]}>
                  <Input
                    value={formData.cid}
                    onChange={(e) => {
                      setFormData({ ...formData, cid: e.target.value });
                    }}
                  />
                </Form.Item>
                <Form.Item label="username" rules={[{ required: true }]}>
                  <Input
                    value={formData.username}
                    disabled = { formData.username == '' ?  false :   true}
                    onChange={(e) => {
                      setFormData({ ...formData, username: e.target.value });
                    }}
                  />
                </Form.Item>
                <Form.Item label="password" rules={[{ required: true }]}>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                    }}
                  />
                </Form.Item>
                <Form.Item label="แผนก">
                  <Select
                    value={formData.dept}
                    onChange={onSelectDept}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                  >
                    {dataDept.map((item, i) => {
                      console.log(formData.dept);
                      return (
                        <Select.Option key={i} value={item.hospcode}>
                          {item.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item label="สถานะ">
                  <Switch
                    checked={formData.status}
                    onChange={(e) => onChangeStatus(e)}
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Users_;
