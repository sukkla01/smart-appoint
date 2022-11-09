import React, { useEffect, useState } from "react";
import Content_ from "../component/Layout/Content_";
import Hoc from "../component/Layout/Hoc";
import { Camera, ChevronDown } from "lucide-react";
import axios from "axios";

const Test = () => {
  useEffect(() => {
    getCid();
  }, []);

  const getCid = async () => {
    try {
      let res = await axios.get(`http://localhost:5000/patient`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Hoc>
      <div class="text-center">
        {" "}
        <a
          href="javascript:;"
          data-tw-toggle="modal"
          data-tw-target="#basic-modal-preview"
          class="btn btn-primary"
        >
          Show Modal
        </a>{" "}
      </div>
      <div
        id="basic-modal-preview"
        className="modal"
        tabIndex={1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body p-10 text-center">
              This is totally awesome blank modal!
            </div>
          </div>
        </div>
      </div>
    </Hoc>
  );
};

export default Test;
