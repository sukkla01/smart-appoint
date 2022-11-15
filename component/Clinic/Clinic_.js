import React, { useEffect, useState } from "react";
import { Cog, Trash, Edit, Plus, Flag } from "lucide-react";
import { Switch, notification, Form, Input, Select, Popconfirm } from "antd";
import axios from "axios";
import config from "../../config";

const BASE_URL = config.BASE_URL;

const Clinic_ = () => {
  const [data, setData] = useState([]);
  const [dataMaster, setDataMaster] = useState([]);

  const openNotificationWithIcon = (type) => {
    console.log('dddd')
    notification[type]({
      message: "แจ้งเตือน",
      description: "อัพเดทเรียบร้อยแล้ว",
      duration: 3,
      style: { backroundColor: "#164E63" },
    });
  };

  useEffect(() => {
    getClinicAll();
    getCliniMastercAll();
  }, []);

  const getClinicAll = async () => {
    const token = localStorage.getItem("token");
    try {
      let res = await axios.get(`${BASE_URL}/get-clinic-all`, {
        headers: { token: token },
      });
      setData(res.data);
      // console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  const getCliniMastercAll = async () => {
    const token = localStorage.getItem("token");
    try {
      let res = await axios.get(`${BASE_URL}/get-clinicmaster-all`, {
        headers: { token: token },
      });
      setDataMaster(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSelectDept = async (e, clinic) => {
    console.log(`switch to ${e} ${clinic}`);
    const token = localStorage.getItem("token");
    let data = {
      clinicMap: clinic,
      ClinicMaster: e,
    };

    try {
      let res = await axios.post(`${BASE_URL}/update-clinic-map`, data, {
        headers: { token: token },
      });
      getClinicAll();
      openNotificationWithIcon("success")
    } catch (error) {
      console.log(error);
    }
  };

 
  const onChangeStatus = async (e,clinic) => {
    // console.log(e,username);
    const token = localStorage.getItem("token");

    let data = {
      status : e,
      clinic : clinic
    }

    try {
      let res = await axios.post(`${BASE_URL}/update-clinic-status`, data, {
        headers: { token: token },
      });
      getClinicAll();
    
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="col-12 mt-6">
      <div className="intro-y    h-10">
        <div className="flex  ">
          <Cog className="top-menu__sub-icon " size={32} />
          <span className="text-3xl  truncate ml-4">ตั่งค่าคลินิก</span>
        </div>
        <br />
      </div>

      <div className="intro-y box">
        <div id="vertical-form" className="p-5">
          <div className="preview">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="whitespace-nowrap">#</th>
                    <th className="whitespace-nowrap">รหัส</th>
                    <th className="whitespace-nowrap">ชื่อคลินิก</th>
                    <th className="whitespace-nowrap">map คลินิก</th>
                    {/* <th className="whitespace-nowrap">Limit</th> */}
                    <th className="whitespace-nowrap">สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => {
                    return (
                      <tr  key={i}>
                        <td>{i + 1}</td>
                        <td>{item.clinic}</td>
                        <td>{item.name}</td>
                        <td>
                          <Select
                            value={item.clinic_map}
                            onChange={(e) => onSelectDept(e, item.clinic)}
                            showSearch
                            filterOption={(input, option) =>
                              (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                            style={{ width: 200 }}
                          >
                            {dataMaster.map((item, i) => {
                              // console.log(formData.dept);
                              return (
                                <Select.Option key={i} value={item.clinic}>
                                  {item.name}
                                </Select.Option>
                              );
                            })}
                          </Select>
                        </td>
                        {/* <td>{item.limit}</td> */}
                        <td>
                        {item.status == 'Y' ? (
                            <Switch
                              defaultChecked
                              onChange={(e) => onChangeStatus(e,item.clinic)}
                            />
                          ) : (
                            <Switch onChange={(e) => onChangeStatus(e,item.clinic)} />
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* <div className="form-check mt-5">
              <input
                id="vertical-form-3"
                className="form-check-input"
                type="checkbox"
                defaultValue
              />
              <label className="form-check-label" htmlFor="vertical-form-3">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary mt-5">Login</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic_;
