import React, { useEffect, useState } from "react";
import * as moment from "moment";
import "moment/locale/th";
moment.locale("th");
import th_TH from "antd/lib/locale/th_TH";
import axios from "axios";
import { Select } from "antd";
import { Plus, FlaskConical, Search } from "lucide-react";

import config from "../../config";

const BASE_URL = config.BASE_URL;

const Xray = () => {
  const [dataItem, setDataItem] = useState([]);
  const [dataRoom, setDataRoom] = useState([]);
  const [dataPosture, setDataPosture] = useState([]);
  const [dataSide, setDataSide] = useState([]);
  const [formData, setFormData] = useState({
    xrayItem: null,
    room: null,
    posture: null,
    side: null,
  });


  useEffect(() => {
    getXrayItem()
    getRoom()
    getPosture()
    getSide()
  }, []);

  const getXrayItem = async () => {
    const token = localStorage.getItem("token");
    let tmp = [];
    try {
      let res = await axios.get(`${BASE_URL}/get-xray-item`, {
        headers: { token: token },
      });
      res.data.map((item, i) => {
        tmp.push({
          value: item.xray_items_code,
          label: item.xray_items_name,
        });
      });
      setDataItem(tmp);
    } catch (error) {
      console.log(error);
    }
  };
  const getRoom = async () => {
    const token = localStorage.getItem("token");
    let tmp = [];
    try {
      let res = await axios.get(`${BASE_URL}/get-xray-room`, {
        headers: { token: token },
      });
      res.data.map((item, i) => {
        tmp.push({
          value: item.xray_room,
          label: item.name,
        });
      });
      setDataRoom(tmp);
    } catch (error) {
      console.log(error);
    }
  };
  const getPosture = async () => {
    const token = localStorage.getItem("token");
    let tmp = [];
    try {
      let res = await axios.get(`${BASE_URL}/get-xray-posture`, {
        headers: { token: token },
      });
      res.data.map((item, i) => {
        tmp.push({
          value: item.xray_type,
          label: item.name,
        });
      });
      setDataPosture(tmp);
    } catch (error) {
      console.log(error);
    }
  };
  const getSide = async () => {
    const token = localStorage.getItem("token");
    let tmp = [];
    try {
      let res = await axios.get(`${BASE_URL}/get-xray-side`, {
        headers: { token: token },
      });
      res.data.map((item, i) => {
        tmp.push({
          value: item.xray_side,
          label: item.name,
        });
      });
      setDataSide(tmp);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12 lg:col-span-12">
        <div className="box intro-y mt-3">
          <div className="box grid grid-cols-12 p-5">
            <div className="intro-y flex items-center h-2 mt-3 mb-3">
              {/* <div className="mr-3 text-xl"> เลือกรายการ x-ray</div> */}
              <Select
                style={{ width: 280, marginLeft: 5, paddingTop: -50 }}
                // size='large'
                showSearch
                placeholder="-------เลือกรายการ x-ray--------"
                optionFilterProp="children"
                onChange={(e) => {
                  setFormData({...formData,xrayItem : e})
                }}
                // onSearch={onSearchClinic}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={dataItem}
                value={
                  (formData.xrayItem = null
                    ? null
                    : formData.xrayItem)
                }
              />
              <Select
                style={{ width: 180, marginLeft: 5, paddingTop: -50 }}
                // size='large'
                showSearch
                placeholder="-------เลือกห้อง--------"
                optionFilterProp="children"
                onChange={(e) => {
                  setFormData({...formData,room : e})
                }}
                // onSearch={onSearchClinic}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={dataRoom}
                value={
                  (formData.room = null
                    ? null
                    : formData.room)
                }
              />
              <Select
                style={{ width: 180, marginLeft: 5, paddingTop: -50 }}
                // size='large'
                showSearch
                placeholder="-------เลือกท่า--------"
                optionFilterProp="children"
                onChange={(e) => {
                  setFormData({...formData,posture : e})
                }}
                // onSearch={onSearchClinic}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={dataPosture}
                value={
                  (formData.posture = null
                    ? null
                    : formData.posture)
                }
              />
              <Select
                style={{ width: 180, marginLeft: 5, paddingTop: -50 }}
                // size='large'
                showSearch
                placeholder="-------เลือกด้าน--------"
                optionFilterProp="children"
                onChange={(e) => {
                  setFormData({...formData,side : e})
                }}
                // onSearch={onSearchClinic}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={dataSide}
                value={
                  (formData.side = null
                    ? null
                    : formData.side)
                }

              />

              <button
                className="btn btn-primary   ml-2 "
              // onClick={onSearch}
              >
                <Plus className="top-menu__sub-icon mr-1" size={14} />
              </button>
              {/* <div className="col-span-12 lg:col-span-6 px-4 py-4">
              <label className="form-label">เริ่มวันที่</label>
              <div>

              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 px-4 py-4">
              <label className="form-label">ถึงวันที่</label>
              <div>

              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Xray