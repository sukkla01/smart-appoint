import React from "react";
import { BedSingle } from "lucide-react";

const PatientID = (props) => {
  return (
    <div>
      {/* profile patient */}
      <div className="intro-y  px-5 pt-0 ">
        <div className="flex flex-col lg:flex-row border-b border-slate-200/200 dark:border-darkmode-600 pb-2 -mx-5">
          <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
            <div className="w-20 h-20 sm:w-20 sm:h-20 flex-none lg:w-20 lg:h-20 image-fit relative">
              <img
                alt="Midone - HTML Admin Template"
                className="rounded-full"
                src="dist/images/avatar.png"
              />
            </div>
            <div className="ml-5">
              <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
                นายสุจินต์ สุกกล้า
              </div>
              <div className="text-slate-500">HN : 0008262</div>
              <div className="text-slate-500">เพศ : ชาย อายุ : 35 ปี </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/10 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
            <div className="font-medium text-center lg:text-left lg:mt-3 text-lg">
              <span>AN : 650000000</span>{" "}
              <span className="ml-4">ward : อายุรกรรมชาย</span>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start mt-0">
              <div className="truncate sm:whitespace-normal flex items-center mt-3">
                <b>สิทธิการรักษา : </b> บัตรทอง ท. รายได้น้อย (ในเขต)
              </div>
              <div className="truncate sm:whitespace-normal flex items-center mt-3">
                <b> ประวัติการแพ้ : </b> -
              </div>
            </div>
          </div>
          <div className="mt-1 lg:mt-0 flex-1 flex items-center justify-end px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0">
            {/* <div className="mt-3">
              <button className="btn btn-outline-success w-24 h-24 inline-block mr-1 mb-0 text-2xl  items-center">
                <BedSingle className="top-menu__sub-icon " size={32} />{" "}
                <p>6401</p>
              </button>
            </div> */}
            <div className="mt-3">
              <button className="btn btn-success-soft mr-1 h-100 mb-2 text-3xl">
                <BedSingle  size={30} />{" "}
                <p className="ml-3">6401</p>
              </button>
            </div>
          </div>
        </div>
        <ul
          className="nav nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
          role="tablist"
        >
          <li id="profile-tab" className="nav-item" role="presentation">
            <a
              href="javascript:;"
              className="nav-link py-4 flex items-center active"
              data-tw-target="#profile"
              aria-controls="profile"
              aria-selected="true"
              role="tab"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                icon-name="user"
                className="lucide lucide-user w-4 h-4 mr-2"
                data-lucide="user"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>{" "}
              Order
            </a>
          </li>
          <li id="account-tab" className="nav-item" role="presentation">
            <a
              href="javascript:;"
              className="nav-link py-4 flex items-center"
              data-tw-target="#account"
              aria-selected="false"
              role="tab"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                icon-name="shield"
                className="lucide lucide-shield w-4 h-4 mr-2"
                data-lucide="shield"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>{" "}
              Admission Note
            </a>
          </li>
          <li id="change-password-tab" className="nav-item" role="presentation">
            <a
              href="javascript:;"
              className="nav-link py-4 flex items-center"
              data-tw-target="#change-password"
              aria-selected="false"
              role="tab"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                icon-name="lock"
                className="lucide lucide-lock w-4 h-4 mr-2"
                data-lucide="lock"
              >
                <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>{" "}
              Clinical Summary
            </a>
          </li>
          <li id="settings-tab" className="nav-item" role="presentation">
            <a
              href="javascript:;"
              className="nav-link py-4 flex items-center"
              data-tw-target="#settings"
              aria-selected="false"
              role="tab"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                icon-name="settings"
                className="lucide lucide-settings w-4 h-4 mr-2"
                data-lucide="settings"
              >
                <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z" />
                <circle cx={12} cy={12} r={3} />
              </svg>{" "}
              D/C Summary
            </a>
          </li>
        </ul>
      </div>

      {/* end profile patient */}
    </div>
  );
};

export default PatientID;
