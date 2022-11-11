import React, { useEffect, useState } from "react";
import { Cog, Trash, Edit } from "lucide-react";
import { Switch } from "antd";

const Users_ = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

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
              <table className="table">
                <thead className="bg-primary text-white" style={{ borderTopLeftRadius : 10 }}>
                  <tr>
                    <th className="whitespace-nowrap">#</th>
                    <th className="whitespace-nowrap">ชื่อ-สกุล</th>
                    <th className="whitespace-nowrap">username</th>
                    <th className="whitespace-nowrap">password</th>
                    <th className="whitespace-nowrap">เลขบัตรประชาชน</th>
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
                        <td>xxxxx  xxxxxx</td>
                        <td>u0011</td>
                        <td>12xx56</td>
                        <td>16407xxxxx461</td>
                        <td><Switch defaultChecked onChange={(e)=>onChangeStatus(e,i)} /></td>
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
    </div>
  )
}

export default Users_