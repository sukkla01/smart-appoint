import React, { useEffect, useState } from "react";

const PrintAppoint = () => {
    const onPrint = () => {
        window.print()
    }

    useEffect(() => {
        // window.print()
    }, []);

    // const pageStyle = `@page {
    //     size: 210mm 148mm;
    //     }
    //     @media print {
    //     @page {  size: a5;
    //         margin: 0mm !important;
    //     }
    //     @media all {
    //                     .pagebreak {
    //                       overflow: visible; 
    //                     }
    //                 }
    //             }
    //         }`;
    return (
        <div style={{ textAlign: 'left', fontFamily: 'Sarabun' }}>
            <div className="bordernn" style={{ backgroundColor: 'white', width: '100%', height: 750, borderColor: 'black' }}>
                <div className="container">
                    <span style={{ fontSize: 20,fontWeight:'bold' }}> บัตรนัดตรวจโรค </span> <span> คลินิก : คลินิกเติมยา </span>

                </div>
                <button onClick={onPrint}>print</button>
            </div>
        </div>
    )


}

export default PrintAppoint