import React, { useEffect, useState } from "react";
import * as moment from "moment";
import "moment/locale/th";
moment.locale("th");
import th_TH from "antd/lib/locale/th_TH";
import axios from "axios";
import { Select, Popconfirm, notification, Modal } from "antd";
import { Plus, FlaskConical, ArrowRight, Trash, Printer } from "lucide-react";
import jwt_decode from "jwt-decode";

import config from "../../config";
import PageAppoint from "./PageAppoint";
import { useRouter } from "next/router";
import Link from 'next/link'

const BASE_URL = config.BASE_URL;


const HistoryVn = (props) => {
    const [data, setData] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const router = useRouter();

    useEffect(() => {
        getHistory()
    }, [props]);

    const getHistory = async () => {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);


        try {
            let res = await axios.get(`${BASE_URL}/get-history-appoint-all/${decoded.deptname}/${props.cid}`, {
                headers: { token: token },
            });
            console.log(res.data)
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const onSelect = (oapp_id) => {
        props.onChange(oapp_id);
        props.status('E');
    }

    const deleteOapp = async (id) => {
        const token = localStorage.getItem("token");

        let data = {
            'oapp_ide': id
        }

        try {
            let res = await axios.post(`${BASE_URL}/delete-appoint`, data, {
                headers: { token: token },
            });
            getHistory()
        } catch (error) {
            console.log(error);
        }
    }

    // const onPrint = (oapp_id) => {
    //     return router.push({
    //         pathname: 'printAppoint',
    //         query: {
    //             oapp_id: oapp_id,
    //         },

    //     });

    // }

    return (
        <div><div className="intro-y overflow-auto lg:overflow-visible mt-2 sm:mt-0">
            <table className="table table-report sm:mt-0">
                <tbody style={{ marginTop: -50 }}>
                    {data.map((item, i) => {
                        console.log(data)
                        return (

                            <tr className="intro-x cursor-pointer" key={i}
                                style={{ marginTop: -10 }}

                            >
                                <td className="w-20" onClick={() => onSelect(item.oapp_id)}>
                                    <div className="flex">
                                        <div className="w-12 h-12 image-fit zoom-in">
                                            <img
                                                alt="Midone - HTML Admin Template"
                                                className="tooltip rounded-full"
                                                src="dist/images/avatar.png"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td onClick={() => onSelect(item.oapp_id)}>
                                    <span className="text-lg"> {item.department} </span>

                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                                        <span className="mr-2"> วันที่นัด  :  {moment(item.nextdate).format('DD/MM/yyyy')} </span> |
                                        <span className="ml-2">คลินิก :  {item.cname}</span>
                                    </div>
                                </td>

                                <td className="text-left w-24" onClick={() => onSelect(item.oapp_id)}>
                                    <span className="text-sm"> {moment(item.vstdate).format('DD/MM/yyyy')} </span>

                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                                        <span className="mr-2"> วันที่มา</span>
                                    </div>
                                </td>
                                <td className="text-left ">
                                    <span className="text-sm">  {item.dname} </span>

                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                                        <span className="mr-2"> แพทย์</span>
                                    </div>
                                </td>
                                <td className="text-left ">
                                    <div>
                                        <Popconfirm
                                            title="คุณต้องการลบหรือไม่"
                                            onConfirm={() => deleteOapp(item.oapp_id)} swdata
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

                                        <Link href="/printAppoint?oapp_ide=3183664" target='_blank'><a target="_blank">   
                                        <button className="btn btn-success mr-1 mb-2" >
                                            <Printer
                                                className="top-menu__sub-icon "
                                                size={14}
                                            />
                                        </button></a></Link>
                                    </div>

                                </td>

                            </tr>

                        );
                    })}
                </tbody>
            </table>
        </div>
            <Modal
                headStyle={{ backgroundColor: "red" }}
                title={"ใบนัด"}
                // centered
                open={isModal}
                // onOk={onSubmit}
                onCancel={() => setIsModal(false)}
                width="100%"
                className="modalStyle2"
                okText="พิมพ์"
                cancelText="ยกเลิก"
            >
                <div className="modal-body " style={{ marginTop: -30 }}>
                    <div className="intro-y  px-5 pt-0 ">
                        <div className="cols-8  ">

                            <PageAppoint />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default HistoryVn