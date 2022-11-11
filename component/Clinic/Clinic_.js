import React, { useEffect, useState } from "react";
import { Cog, Plus } from "lucide-react";
import { Switch } from "antd";

const Clinic_ = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

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
                        <td>013</td>
                        <td>คลินิกเบาหวาน</td>
                        <td>คลินิกเบาหวาน</td>
                        <td>20</td>
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
