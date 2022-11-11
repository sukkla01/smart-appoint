import React, { useEffect, useState } from "react";
import { Cog, Trash, Edit } from "lucide-react";
import { Switch } from "antd";

const DoctorLimit = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  const onChangeStatus = (checked, i) => {
    console.log(`switch to ${checked} ${i}`);
  };
  return (
    <div className="col-12 mt-6">
      <div className="intro-y    h-10">
        <div className="flex  ">
          <Cog className="top-menu__sub-icon " size={32} />
          <span className="text-3xl  truncate ml-4">ตารางแพทย์</span>
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
    </div>
  );
};

export default DoctorLimit;
