import React, { useEffect, useState } from "react";
import * as moment from "moment";
import "moment/locale/th";
moment.locale("th");
import th_TH from "antd/lib/locale/th_TH";
import axios from "axios";
import { Select, Popconfirm, notification } from "antd";
import { Plus, Trash } from "lucide-react";
import jwt_decode from "jwt-decode";
import config from "../../config";

const BASE_URL = config.BASE_URL;

const Xray = (props) => {

  const [data, setData] = useState([]);
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

  const [dataXray, setDataXray] = useState([]);
  const [userStaff, setUserStaff] = useState('');

  const getUser = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    setUserStaff(decoded.deptname)
  }

  useEffect(() => {
    getUser()
    getXrayItem()
    getRoom()
    getPosture()
    getSide()

    if (props.status == 'E') {
      getXrayId()
    } else {
      setDataXray([])
    }
  }, [props]);


  const onReset = () => {
    setFormData({
      xrayItem: null,
      room: null,
      posture: null,
      side: null,
    })
    setData([])
  }

  const getXrayItem = async () => {
    const token = localStorage.getItem("token");
    let tmp = [];
    try {
      let res = await axios.get(`${BASE_URL}/get-xray-item`, {
        headers: { token: token },
      });
      res.data.map((item, i) => {
        tmp.push({
          value: item.xray_items_code + ',' + item.xray_items_name,
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
          value: item.xray_room + ',' + item.name,
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
          value: item.xray_type + ',' + item.name,
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
          value: item.xray_side + ',' + item.name,
          label: item.name,
        });
      });
      setDataSide(tmp);
    } catch (error) {
      console.log(error);
    }
  };


  const getXrayId = async () => {
    const token = localStorage.getItem("token");
    console.log(props.oapp_id)
    try {
      let res = await axios.get(`${BASE_URL}/get-xray-id/${props.oapp_id}`, {
        headers: { token: token },
      });
      console.log(res.data)
      setDataXray(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    let tmp = []
    // formData.map((item,i)=>{
    //    tmp.push({'xrayItem' : item.xrayItem.split(',')[1]})

    // })
    // setData(tmp)
    let no = 1
    // data.map((item, i) => {
    //   no = no + i
    //   tmp.push({
    //     'id': no, 'xrayItem': item.xrayItem, 'room': item.room, 'posture': item.posture, 'side': item.side,
    //     'xrayItem_id': item.xrayItem_id, 'room_id': item.room_id, 'posture_id': item.posture_id, 'side_id': item.side_id
    //   })
    // })
    // tmp.push({
    //   'id': data.length > 0 ? no + 1 : 1, 
    //   'xrayItem': formData.xrayItem == null ? null : formData.xrayItem.split(',')[1], 
    //   'room': formData.room == null ? null : formData.room.split(',')[1], 
    //   'posture': formData.posture == null ? null : formData.posture.split(',')[1], 
    //   'side': formData.side == null ? null : formData.side.split(',')[1],
    //   'xrayItem_id': formData.xrayItem == null ? null : formData.xrayItem.split(',')[0], 
    //   'room_id': formData.room == null ? null : formData.room.split(',')[0], 
    //   'posture_id': formData.posture == null ? null : formData.posture.split(',')[0], 
    //   'side_id': formData.side == null ? null : formData.side.split(',')[0]
    // })


    if (props.data.vstdate == null) {
      notification['error']({
        message: "แจ้งเตือน",
        description: "กรุณาเลือกวันนัดก่อน",
        duration: 5,
        style: { backroundColor: "#164E63" },
      });
    } else {
      let data = {
        // 'id': data.length > 0 ? no + 1 : 1, 
        'xrayItem': formData.xrayItem == null ? null : formData.xrayItem.split(',')[1],
        'room': formData.room == null ? null : formData.room.split(',')[1],
        'posture': formData.posture == null ? null : formData.posture.split(',')[1],
        'side': formData.side == null ? null : formData.side.split(',')[1],
        'xrayItem_id': formData.xrayItem == null ? null : formData.xrayItem.split(',')[0],
        'room_id': formData.room == null ? null : formData.room.split(',')[0],
        'posture_id': formData.posture == null ? null : formData.posture.split(',')[0],
        'side_id': formData.side == null ? null : formData.side.split(',')[0],
        'oapp_id': props.oapp_id,
        'dataOapp': props.data,
        'hn': props.hn,
        'user_send': userStaff

      }
      console.log(data)
      const token = localStorage.getItem("token");
      try {
        let res = await axios.post(`${BASE_URL}/add-xray`, data, {
          headers: { token: token },
        });
        console.log(res.data)

        getXrayId()
        reset()
      } catch (error) {
        console.log(error);
      }
    }


    // tmp.push({
    //     'xrayItem': 1, 'room': 1, 'posture': 1, 'side':1,
    //     'xrayItem_id': 1, 'room_id': 1, 'posture_id': 1, 'side_id': 1
    //   })
    // setData(tmp)
    props.onChange(false, tmp);



  }

  const del = async (id) => {
    // let tmp = data.filter(function (item) {
    //   return item.id !== id
    // })

    // console.log(tmp)
    // setData(tmp)
    const token = localStorage.getItem("token");
    let data = {
      oapp_xray_id: id
    }
    try {
      let res = await axios.post(`${BASE_URL}/delete-xray`, data, {
        headers: { token: token },
      });
      console.log(res.data)

      getXrayId()
      // reset()
    } catch (error) {
      console.log(error);
    }
    // getXrayId()

    // props.onChange(false, tmp);

  }
  const reset = () => {
    setFormData({
      ...formData,
      xrayItem: null,
      room: null,
      posture: null,
      side: null,
    })
  }

  return (
    <div className="col-span-12 lg:col-span-8">
      <div className="box intro-y mt-5">
        <div className="box">
          <div className="intro-y box p-5 mt-5 sm:mt-2">
            <div className="col-span-12 lg:col-span-12 ">
              <div className="intro-y flex items-center h-2 mt-3 mb-3">
                {/* <div className="mr-3 text-xl"> เลือกรายการ x-ray</div> */}

                <div className="col-span-12 lg:col-span-12 mt-1">
                  เลือกรายการ  
                  <Select
                    style={{ width: 280, marginLeft: 5, paddingTop: -50 }}
                    // size='large'
                    showSearch
                    placeholder="-------เลือกรายการ x-ray--------"
                    optionFilterProp="children"
                    onChange={(e) => {
                      console.log(e)

                      setFormData({ ...formData, xrayItem: e })
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
                      setFormData({ ...formData, room: e })
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
                      setFormData({ ...formData, posture: e })
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
                      setFormData({ ...formData, side: e })
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
                    onClick={onSubmit}
                  >
                    <Plus className="top-menu__sub-icon mr-1" size={14} />
                  </button>
                </div>

                <div className="col-span-12 lg:col-span-12 mt-4">

                </div>
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

      <div className="box intro-y mt-3">
        <div className="box">
          <div className="intro-y box p-5 ">

            <div className="col-span-12 lg:col-span-8 ">
              <div className="box intro-y  ">
                <div className="col-span-12 lg:col-span-12 px-4 ">
                  <table className="table mt-0">
                    <thead
                      className="bg-primary text-white s"
                      style={{ borderTopLeftRadius: 10 }}
                    >
                      <tr>
                        <th className="whitespace-nowrap">#</th>
                        <th className="whitespace-nowrap">รายการ</th>
                        <th className="whitespace-nowrap">ห้อง</th>
                        <th className="whitespace-nowrap">ท่า</th>
                        <th className="whitespace-nowrap">ด้าน</th>
                        <th className="whitespace-nowrap">action</th>
                      </tr>
                    </thead>
                    <tbody>

                      {dataXray.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.xray_items_name}</td>
                            <td>{item.roomname}</td>
                            <td>{item.typename}</td>
                            <td>{item.sidename}</td>
                            <td>
                              <div>
                                <Popconfirm
                                  title="คุณต้องการลบหรือไม่"
                                  onConfirm={() => del(item.oapp_xray_id)}
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
      </div>
    </div>
  )
}

export default Xray