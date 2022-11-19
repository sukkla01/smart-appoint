import React, { useEffect, useState } from "react";
import * as moment from "moment";
import "moment/locale/th";
moment.locale("th");
import th_TH from "antd/lib/locale/th_TH";
import axios from "axios";
import { Select } from "antd";
import { Plus, FlaskConical,Search } from "lucide-react";

import config from "../../config";

const BASE_URL = config.BASE_URL;

const Lab = () => {
  const [dataMAin, setDataMAin] = useState([]);
  const [labMainSelect, setDataLabMainSelect] = useState(null);

  return (
    <div className="col-span-12 lg:col-span-8">
      <div className="box intro-y mt-5">
        <div className="box">
          <div className="intro-y box p-5 mt-5 sm:mt-2">
            <div className="col-span-12 lg:col-span-12 ">
            <div className="intro-y flex items-center h-2 mt-3 mb-3">
                <div className="mr-3 text-xl"> ใบ LAB</div>
                <Select
                style={{ width: 350, marginLeft: 5, paddingTop: -50 }}
                // size='large'
                showSearch
                placeholder="-------เลือกใบ LAB--------"
                optionFilterProp="children"
                onChange={(e) => {
                  setDataLabMainSelect(e);
                }}
                // onSearch={onSearchClinic}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={dataMAin}
                value={
                  (labMainSelect = null
                    ? null
                    : labMainSelect)
                }
              />
                
                <button
                  className="btn btn-primary btn-sm mr-1 mb-2 mt-2  ml-2"
                  // onClick={onSearch}
                >
                  <Plus className="top-menu__sub-icon mr-1" size={14} /> สั่ง Lab ล่วงหน้า
                </button>
               
               
              </div>
              {/* <label style={{ marginRight: 5, marginLeft: 20, marginTop: -5 }}>
                ใบ LAB
              </label>
              <Select
                style={{ width: 350, marginLeft: 5, paddingTop: -50 }}
                size='large'
                showSearch
                placeholder="-------เลือกใบ LAB--------"
                optionFilterProp="children"
                onChange={(e) => {
                  setDataLabMainSelect(e);
                }}
                // onSearch={onSearchClinic}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={dataMAin}
                value={
                  (labMainSelect = null
                    ? null
                    : labMainSelect)
                }
              />

              <button
                className="btn btn-success   mr-2  ml-2 col-span-2  "
              // data-tw-toggle="modal"
              // data-tw-target="#header-footer-modal-preview"
              // onClick={() = }
              >
                <Plus
                  className="top-menu__sub-icon "
                  size={22}
                  style={{ marginRight: 5 }}
                />
                สั่ง Lab ล่วงหน้า
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="box intro-y mt-3">
        <div className="box">
          <div className="intro-y box p-5 ">

            <div className="col-span-12 lg:col-span-8 ">
              <div className="box intro-y  ">
                <div className="col-span-12 lg:col-span-12 px-4 ">
                  <div style={{ fontSize: 16 }}>
                    <div className="flex  ">
                      <FlaskConical size={22} />
                      <span className="  truncate ml-2">เลือกรายการ Lab</span>
                    </div>
                  </div>
                  <hr />
                  <div className="form-check mt-5">
                    {/* <>
                          
                            <div className="intro-y col-span-12 p items-center mt-0">
                              {labAppoint.map((item, i) => {
                                return (
                                  <button className="btn btn-defaults btn-sm  mr-2  mt-2">
                                    {item.name}
                                  </button>
                                );
                              })}
                            </div>

                          
                          </> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lab