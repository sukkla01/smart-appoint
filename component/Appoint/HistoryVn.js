import React, { useEffect, useState } from "react";
import * as moment from "moment";
import "moment/locale/th";
moment.locale("th");
import th_TH from "antd/lib/locale/th_TH";
import axios from "axios";
import { Select, Popconfirm, notification } from "antd";
import { Plus, FlaskConical, ArrowRight, Trash } from "lucide-react";
import jwt_decode from "jwt-decode";

import config from "../../config";

const BASE_URL = config.BASE_URL;


const HistoryVn = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getHistory()
    }, []);

    const getHistory = async () => {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);


        try {
            let res = await axios.get(`${BASE_URL}/get-history-appoint-all/${decoded.deptname}`, {
                headers: { token: token },
            });
            console.log(res.data)
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const onSelect =(oapp_id)=>{
        props.onChange(oapp_id);
    }

    return (
        <div><div className="intro-y overflow-auto lg:overflow-visible mt-2 sm:mt-0">
            <table className="table table-report sm:mt-0">
                <tbody style={{ marginTop: -50 }}>
                    {data.map((item, i) => {
                        return (

                            <tr className="intro-x cursor-pointer" key={i}
                                style={{ marginTop: -10 }}
                                onClick={()=>onSelect(item.oapp_id)}
                            >
                                <td className="w-20">
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
                                <td>
                                    <span className="text-lg"> {item.department} </span>

                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                                        <span className="mr-2"> วันที่นัด  :  {moment(item.nextdate).format('DD/MM/yyyy')} </span> |
                                        <span className="ml-2">คลินิก :  {item.cname}</span>
                                    </div>
                                </td>

                                <td className="text-left w-24">
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
                                
                            </tr>

                        );
                    })}
                </tbody>
            </table>
        </div></div>
    )
}

export default HistoryVn