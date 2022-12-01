import React, { useEffect, useState } from "react";
import config from "../config";
import axios from "axios";
import * as moment from "moment";
import "moment/locale/th";
moment.locale("th");
import th_TH from "antd/lib/locale/th_TH";
import { useRouter } from "next/router";

const BASE_URL = config.BASE_URL;

// let oapp_id = '3183664'
const PrintAppoint = () => {
    const router = useRouter();
    const [dataHeader, setDataHeader] = useState([]);
    const [dataLab, setDataLab] = useState([]);
    const [dataXray, setDataXray] = useState([]);
    const { oapp_ide } = router.query


    const onPrint = () => {
        window.print()
    }

    useEffect(() => {
        
       
        getHeader()
        getLab()
        getXray()


    }, [oapp_ide]);

    const getHeader = async () => {
        const token = localStorage.getItem("token");
        try {
            let res = await axios.get(`${BASE_URL}/get-report-oapp-header/${oapp_ide}`, {
                headers: { token: token },
            });
            console.log(res.data)
            setDataHeader(res.data[0]);
        } catch (error) {
            console.log(error);
        }
    };
    const getLab = async () => {
        const token = localStorage.getItem("token");
        try {
            let res = await axios.get(`${BASE_URL}/get-report-oapp-lab/${oapp_ide}`, {
                headers: { token: token },
            });
            setDataLab(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    const getXray = async () => {
        const token = localStorage.getItem("token");
        try {
            let res = await axios.get(`${BASE_URL}/get-report-oapp-xray/${oapp_ide}`, {
                headers: { token: token },
            });
            setDataXray(res.data);
            console.log(res)
            if (res.status == 200) {
                await sleep(50)
                console.log('ss')
                await window.print()

            }
        } catch (error) {
            console.log(error);
        }
    };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    return (
        <div style={{ textAlign: 'left', fontFamily: 'Sarabun' }}>
            <div className="bordernn" style={{ backgroundColor: 'white', width: '100%', height: 750, borderColor: 'black' }}>
                <div style={{ marginLeft: 20, marginRight: 2 }}>
                    <div className="container">
                        <span style={{ fontSize: 17, fontWeight: 'bold' }}> บัตรนัดตรวจโรค </span> <span style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 130 }}> คลินิก : {dataHeader != undefined ? dataHeader.cname : ''} </span>
                    </div>
                    <div className="container" style={{ marginTop: 7, marginBottom: 10 }}>
                        <span style={{ fontSize: 15, fontWeight: 'bold' }}> โรงพยาบาลศรีสังวรสุโขทัย </span>  <span style={{ fontSize: 14, marginLeft: 100 }}> หมายเลขโทรศัพท์ 055-682030-42 </span>
                    </div>
                    <hr style={{ marginTop: 10, border: '1px solid  ' }} />
                    <div className="container" style={{ marginTop: 10 }}>
                        <span style={{ fontSize: 15, fontWeight: 'bold' }}>ชื่อ </span> <span style={{ fontSize: 15 }}>   {dataHeader != undefined ? dataHeader.tname : ''} </span>  <span style={{ fontSize: 14, marginLeft: 130 }}> อายุ  {dataHeader != undefined ? dataHeader.tage : ''} ปี  CID {dataHeader != undefined ? dataHeader.cid : ''}  </span>
                    </div>
                    <div className="container" style={{ marginTop: 5 }}>
                        <span style={{ fontSize: 15, fontWeight: 'bold' }}>HN</span><span style={{ fontSize: 16 }}>   {dataHeader != undefined ? dataHeader.hn : ''} </span>  <span style={{ fontSize: 14, marginLeft: 130 }}> สิทธิการรักษา  {dataHeader != undefined ? dataHeader.ptname : ''}  </span>
                    </div>
                    <div className="container" style={{ marginTop: 5 }}>
                        <span style={{ fontSize: 18, fontWeight: 'bold' }}> วันที่นัด   {moment(dataHeader != undefined ? dataHeader.nextdate : '2022-01-01' ).format('LL')} </span>  <span style={{ fontSize: 18, marginLeft: 130, fontWeight: 'bold' }}> เวลานัด  {moment(dataHeader != undefined ? dataHeader.nextdate : '00:00', "HH:mm").format("hh:mm")}-{moment(dataHeader != undefined ? dataHeader.endtime : '00:00', "HH:mm").format("hh:mm")} </span>
                    </div>
                    <div className="container" style={{ marginTop: 5 }}>
                        <span style={{ fontSize: 15 }}> เหตุผลการนัด  {dataHeader != undefined ? dataHeader.app_cause : ''}</span>  <span style={{ fontSize: 14, marginLeft: 100 }}> แพทย์ผู้นัด  {dataHeader != undefined ? dataHeader.dname : ''}  </span>
                    </div>

                    <div className="container" style={{ marginTop: 5 }}>
                        <span style={{ fontSize: 15 }}> ผู้เขียนใบนัด {'xxxx'}</span>
                    </div>
                    <hr style={{ marginTop: 10, border: '1px dashed  ' }} />
                    <div className="container" style={{ marginTop: 5 }}>
                        <span style={{ fontSize: 15, fontWeight: 'bold' }}><u> Lab / xray</u></span>
                    </div>

                    {dataLab.length > 0 ? <>
                        <div className="container" style={{ marginTop: 5 }}>
                            <span style={{ fontSize: 15, fontWeight: 'bold' }}>รายการตรวจ Lab </span>
                        </div>
                        {dataLab.map((itemLab, i) => {
                            return <div className="container" style={{ marginTop: 5 }} key={i}>
                                <span style={{ fontSize: 12 }}> {i + 1}. {itemLab.form_name} </span>
                            </div>
                        })}

                    </> : ''}


                    {dataXray.length > 0 ? <>
                        <div className="container" style={{ marginTop: 20 }}>
                            <span style={{ fontSize: 15, fontWeight: 'bold' }}>รายการตรวจ xray </span>
                        </div>
                        {dataXray.map((itemLab, i) => {
                            return <div className="container" style={{ marginTop: 5 }} key={i}>
                                <span style={{ fontSize: 12 }}> {i + 1}. {itemLab.xray_items_name} </span>
                            </div>
                        })}
                    </> : ''}



                    {/* <button onClick={onPrint}>print</button> */}
                </div>
            </div>
        </div>
    )


}

export default PrintAppoint