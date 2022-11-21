import React, { useEffect, useState } from "react";
import * as moment from "moment";
import "moment/locale/th";
moment.locale("th");
import th_TH from "antd/lib/locale/th_TH";
import axios from "axios";
import { Select } from "antd";
import { Plus, FlaskConical, ArrowRight } from "lucide-react";

import config from "../../config";

const BASE_URL = config.BASE_URL;

const Lab = () => {
  const [dataLabForm, setDataLabForm] = useState([]);
  const [dataLabItem, setDataLabItem] = useState([]);
  const [dataLabSelect, setDataLabSelect] = useState([]);
  const [labMainSelect, setDataLabMainSelect] = useState(null);
  // const [selectItem, setSelectItem] = useState(null);


  useEffect(() => {
    console.log('dddd')
    getLabForm()
  }, []);

  const getLabForm = async () => {
    const token = localStorage.getItem("token");
    let tmp = [];

    console.log('fff')
    try {
      let res = await axios.get(`${BASE_URL}/get-labform`, {
        headers: { token: token },
      });
      res.data.map((item, i) => {
        tmp.push({
          value: item.form_name,
          label: item.form_name,
        });
      });
      setDataLabForm(tmp);
    } catch (error) {
      console.log(error);
    }
  };

  const onSelectLabForm = async (form_name) => {
    const token = localStorage.getItem("token");
    setDataLabMainSelect(form_name)
    let tmp = []
    try {
      let res = await axios.get(`${BASE_URL}/get-labform-item/${form_name}`, {
        headers: { token: token },
      });
      // console.log(res.data)
      if (res.data.length > 0) {
        res.data.map((item, i) => {
          // console.log({...item, status : false})
          tmp.push({ ...item, status: false })
          console.log(tmp)
        })

      }
      setDataLabItem(tmp);

    } catch (error) {
      console.log(error);
    }
  }


  const onClickLab = (code, name) => {

    let tmp = []
    dataLabSelect.map((item, i) => {
      tmp.push({ ...item, lab_form: labMainSelect, lab_code: item.lab_code })

    })
    tmp.push({ lab_form: labMainSelect, lab_code: code })
    //   console.log(tmp)
    //  let aa =  tmp.find(e=> e.lab_code == 1199)
    //   console.log(aa)
    setDataLabSelect(tmp)
    //     dataLabItem.map((item, i) => {
    //       tmp.push({ ...item, status: item.lab_items_codes == code ? true : false })
    //     })
    // console.log(tmp)
    //     setDataLabItem(tmp)


  }


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
                  placeholder="-------เลือกใบ LABccc--------"
                  optionFilterProp="children"
                  onChange={(e) => {
                    onSelectLabForm(e);
                  }}
                  // onSearch={onSearchClinic}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={dataLabForm}
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

            </div>
          </div>
        </div>
      </div>


      <div className=" grid grid-cols-12 gap-3">


        <div className="col-span-12 lg:col-span-8">
          <div className="box intro-y mt-3">
            <div className="box">
              <div className="intro-y box p-5 mt-5 sm:mt-2">
                <div className="col-span-12 lg:col-span-12 ">
                  <div className="intro-y col-span-12 p items-center mt-0">
                    <div>เลือกรายการ Lab</div>
                    <hr ></hr>
                    {dataLabItem.map((item, i) => {
                      let tmp = dataLabSelect.find(c => c.lab_code == item.lab_items_code)
                      let tmp_arr = tmp == undefined ? '' : tmp.lab_code
                      return (
                        <>
                          {item.component_type == 'label' ? <div style={{ fontSize: item.font_size > 0 ? item.font_size : 16, marginTop: 20 }}><b>{item.component_caption}</b> <br /><hr /></div> :
                            <button className={tmp_arr > 0 ? "btn btn-success btn-sm  mr-2  mt-2 w-48" : "btn btn-outline-success btn-sm  mr-2  mt-2 w-48"}
                              onClick={() => onClickLab(item.lab_items_code, item.component_caption)}
                            >
                              {i + 1}. {item.component_caption}
                            </button>
                          }
                        </>
                      );
                    })}

                    <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                      
                      <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                        <button className="btn btn-primary">เพิ่มรายการ  <ArrowRight className="top-menu__sub-icon ml-3" size={14} /></button>
                      </div>
                    </div>


                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="box intro-y mt-3" >
            <div className="col-span-12 lg:col-span-12 px-4 py-4">
              <div>รายการที่สั่งไว้</div>
              <div className="box px-4 py-4 mb-1 flex items-center zoom-in " style={{ backgroundColor: '#E6F4F3' }}>
                <div className=" flex-none image-fit ">
                  <FlaskConical color="#164E63" size={22} style={{ marginRight: 0 }} />
                </div>
                <div className="ml-4 mr-auto">
                  <div className="font-medium">ANC</div>
                </div>

              </div>
              <div className="box px-4 py-4 mb-1 flex items-center zoom-in" style={{ backgroundColor: '#E6F4F3' }}>
                <div className=" flex-none image-fit ">
                  <FlaskConical color="#164E63" size={22} style={{ marginRight: 0 }} />
                </div>
                <div className="ml-4 mr-auto">
                  <div className="font-medium">BLODD BLANK</div>
                </div>

              </div>
              <div className="box px-4 py-4 mb-1 flex items-center zoom-in" style={{ backgroundColor: '#E6F4F3' }}>
                <div className=" flex-none image-fit ">
                  <FlaskConical color="#164E63" size={22} style={{ marginRight: 0 }} />
                </div>
                <div className="ml-4 mr-auto">
                  <div className="font-medium">BLODD BLANK</div>
                </div>

              </div>
              <div className="box px-4 py-4 mb-1 flex items-center zoom-in" style={{ backgroundColor: '#E6F4F3' }}>
                <div className=" flex-none image-fit ">
                  <FlaskConical color="#164E63" size={22} style={{ marginRight: 0 }} />
                </div>
                <div className="ml-4 mr-auto">
                  <div className="font-medium">BLODD BLANK</div>
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