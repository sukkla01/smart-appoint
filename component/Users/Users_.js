import React, { useEffect, useState } from "react";
import { Cog, Trash, Edit, Plus } from "lucide-react";
import { Switch, Modal,Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  TreeSelect
   } from "antd";

const Users_ = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [open, setOpen] = useState(false);

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
                >

                </div>
                <div
                  className="form-check form-switch w-full  mt-0 sm:mt-0"
                  style={{ width: 150 }}
                >
                  <button
                    className="btn btn-success  mr-2 mb-2 ml-2 col-span-2  w-40"
                    // data-tw-toggle="modal"
                    // data-tw-target="#header-footer-modal-preview"
                    onClick={() => setOpen(true)
                    }
                  >
                    <Plus
                      className="top-menu__sub-icon "
                      size={22}
                      style={{ marginRight: 5 }}
                    />
                    เพิ้ม
                  </button>
                </div>
              </div>

              <table className="table  mt-10">
                <thead className="bg-primary text-white" style={{ borderTopLeftRadius: 10 }}>
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
                        <td>xxxxx  xxxxxx</td>
                        <td>u0011</td>
                        <td>12xx56</td>
                        <td>16407xxxxx461</td>
                        <td>16407xxxxx461</td>
                        <td><Switch defaultChecked onChange={(e) => onChangeStatus(e, i)} /></td>
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


      <Modal
        headStyle={{ backgroundColor: 'red' }}
        title={'เพิ่มผู้ใช้งาน'}
        // centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width="50%"
        className="modalStyle2"
        okText='บันทึก'
        cancelText='ยกเลิก'

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
                
                <Form.Item label="Input" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item label="Select">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="TreeSelect">
                  <TreeSelect
                    treeData={[
                      { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="Cascader">
                  <Cascader
                    options={[
                      {
                        value: 'zhejiang',
                        label: 'Zhejiang',
                        children: [
                          {
                            value: 'hangzhou',
                            label: 'Hangzhou',
                          },
                        ],
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="DatePicker">
                  <DatePicker />
                </Form.Item>
                <Form.Item label="InputNumber">
                  <InputNumber />
                </Form.Item>
                <Form.Item label="Switch" valuePropName="checked">
                  <Switch />
                </Form.Item>
                <Form.Item label="Button">
                  <Button>Button</Button>
                </Form.Item>
              </Form>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Users_