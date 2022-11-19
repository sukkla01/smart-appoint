import React from 'react'

const Xray = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
    {/* //--------------------------------------------------------- START เลือกวันที่  -------------------------------------------------------------------// */}
    <div className="col-span-12 lg:col-span-8">
        <div className="box intro-y mt-3">
            <div className="box grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6 px-4 py-4">
                    <label className="form-label">เริ่มวันที่</label>
                    <div>
                       
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 px-4 py-4">
                    <label className="form-label">ถึงวันที่</label>
                    <div>
                       
                    </div>
                </div>
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
                            {/* <button className={formConditions.sexMale == true ? "btn btn-primary w-full mr-1" : "btn btn-outline-primary w-full mr-1"} onClick={() => setFormConditions({ ...formConditions, sexMale: !formConditions.sexMale })}>ชาย</button> */}
                        </div>
                        <div className="input-group">
                            {/* <button className="btn btn-danger w-full ml-1" : "btn btn-outline-danger w-full ml-1"} onClick={() => setFormConditions({ ...formConditions, sexFemale: !formConditions.sexFemale })}>หญิง</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* //------------------------------------------------------------- END ระบุเพศ  ------------------------------------------------------------------// */}
</div>
  )
}

export default Xray