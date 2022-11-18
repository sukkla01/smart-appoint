import { Alert, Calendar, ConfigProvider } from "antd";
import React, { useState } from "react";
import Hoc from "../component/Layout/Hoc";
import * as moment from "moment";
import "moment/locale/th";
moment.locale("th");
import th_TH from "antd/lib/locale/th_TH";

const test2 = () => {
  return (
    <Hoc>
      <div className="grid grid-cols-12 gap-3">
        {/* //--------------------------------------------------------- START เลือกวันที่  -------------------------------------------------------------------// */}
        <div className="col-span-12 lg:col-span-8">
          <div className="box intro-y mt-3">
            <div className="box grid grid-cols-12">
              fffff
            </div>
          </div>
        </div>
        {/* //------------------------------------------------------------- END เลือกวันที่  ------------------------------------------------------------------// */}

        {/* //------------------------------------------------------------- START ระบุเพศ  ------------------------------------------------------------------// */}
        <div className="col-span-12 lg:col-span-4">
          <div className="box intro-y mt-3">
            <div className="box grid grid-cols-12">
              <div className="col-span-12 lg:col-span-12 px-4 py-4">
                <label className="form-label">เพศ</label>
                <div className="sm:grid grid-cols-2">
                  <div className="input-group">
                    <button
                     
                    >
                      ชาย
                    </button>
                  </div>
                  <div className="input-group">
                    <button
                    
                    >
                      หญิง
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //------------------------------------------------------------- END ระบุเพศ  ------------------------------------------------------------------// */}
      </div>
    </Hoc>
  );
};

export default test2;
