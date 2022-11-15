import React, { useEffect, useState } from "react";
import { Cog, Trash, Edit, Plus, Flag } from "lucide-react";
import { Switch, Modal, Form, Input, Select, Popconfirm } from "antd";
import axios from "axios";
import config from "../../config";

const BASE_URL = config.BASE_URL;

const Clinic_ = () => {
  const [data, setData] = useState([]);
  const [dataMaster, setDataMaster] = useState([]);



  useEffect(() => {
    getClinicAll();
    getCliniMastercAll()
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
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeStatus = (checked,i) => {
    console.log(`switch to ${checked} ${i}`);
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
                    <th className="whitespace-nowrap">ชื่อคลินิก</th>
                    <th className="whitespace-nowrap">Limit</th>
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
                        <td>{item.clinic_map}</td>
                        <td>{item.limit}</td>
                        <td>
                          <Switch defaultChecked onChange={(e)=>onChangeStatus(e,i)} />
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
