import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Home,
  ChevronDown,
  Archive,
  LogOut,
  CalendarCheck2,
  Cog,
  BarChart2,
  Tag,
} from "lucide-react";
import Link from "next/link";
import jwt_decode from "jwt-decode";

const Menu_ = () => {
  const router = useRouter();
  const [selectId, setSelectId] = useState(1);
  const [ActiveText, setIsActiveText] = useState("");
  const [isShowMenu, setIsShowMenu] = useState(false);


  useEffect(() => {
    setSelectId(localStorage.getItem("NavId"));
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    setIsShowMenu(decoded.role == 'admin' ? true : false)
  }, []);

  const onSelect = (id, path) => {
    localStorage.setItem("NavId", id);

    router.push({
      pathname: path,
      // query: { dep: dep, date: date, profile: profile, tname: tname, hn_: hn, time: '' },
    });


  };

  return (
    // <div>
    <nav
      className="top-nav"
      style={{ marginTop: -107, marginLeft: 0, marginRight: 0, zIndex: 10 }}
    >
      <ul style={{ backgroundColor: "#C8D6DC", borderRadius: 10, height: 62 }}>
        {/* <li onClick={() => onSelect(1, '/')}>
          <a
            href="#"
            className={selectId == 1 ? "top-menu top-menu--active" : "top-menu"}
          >
            <div className="top-menu__icon">
              <Home className="top-menu__sub-icon" color="#164E63" size={22} />
            </div>
            <div className="top-menu__title">
              Dashboard
            </div>
          </a>
        </li> */}
        <li onClick={() => onSelect(2, '/oapp')}>
          <a
            href="#"
            className={selectId == 2 ? "top-menu top-menu--active" : "top-menu"}
          >
            <div className="top-menu__icon">
              <CalendarCheck2
                className="top-menu__sub-icon"
                color="#164E63"
                size={22}
              />
            </div>
            <div className="top-menu__title">นัดหมาย</div>
          </a>
        </li>
        {/* <li onClick={() => onSelect(3, '/report')}>
          <a
            href="#"
            className={selectId == 3 ? "top-menu top-menu--active" : "top-menu"}
          >
            <div className="top-menu__icon">
              <BarChart2
                className="top-menu__sub-icon"
                color="#164E63"
                size={22}
              />
            </div>
            <div className="top-menu__title">
              รายงาน
           
            </div>
          </a>
        </li> */}
        {isShowMenu ?
          <li>
            <a href="#" className={selectId == 4 ? "top-menu top-menu--active" : "top-menu"}>
              <div className="top-menu__icon">
                <Cog className="top-menu__sub-icon" color="#164E63" size={22} />
              </div>
              <div className="top-menu__title">
                ตั่งค่า
                <ChevronDown
                  className="top-menu__sub-icon"
                  color="#164E63"
                  size={16}
                />
              </div>
            </a>

            <ul className>
              <li onClick={() => onSelect(4, '/users')}>
                <a
                  href="#"
                  className="top-menu"
                >
                  <div className="top-menu__icon"> </div>
                  <div className="top-menu__title">
                    <Tag color="#164E63" size={16} style={{ marginRight: 10 }} />
                    ผู้ใช้งาน
                  </div>
                </a>
              </li>
              <li onClick={() => onSelect(4, '/doctor2')}>
                <a
                  href="#"
                  className="top-menu"
                >
                  <div className="top-menu__icon"> </div>
                  <div className="top-menu__title">
                    <Tag color="#164E63" size={16} style={{ marginRight: 10 }} />
                    แพทย์
                  </div>
                </a>
              </li>
              <li onClick={() => onSelect(4, '/clinic')}>
                <a
                  href="#"
                  className="top-menu"
                >
                  <div className="top-menu__icon"> </div>
                  <div className="top-menu__title">
                    <Tag color="#164E63" size={16} style={{ marginRight: 10 }} />
                    คลินิก
                  </div>
                </a>
              </li>
              <li onClick={() => onSelect(4, '/doctor')}>
                <a
                  href="#"
                  className="top-menu"
                >
                  <div className="top-menu__icon"> </div>
                  <div className="top-menu__title">
                    <Tag color="#164E63" size={16} style={{ marginRight: 10 }} />
                    ตารางตรวจแพทย์
                  </div>
                </a>
              </li>
            </ul>
          </li>
          : ''}
        <li onClick={() => onSelect(4, '/login')}>
          <a href="#" className="top-menu">
            <div className="top-menu__icon">
              <LogOut
                className="top-menu__sub-icon"
                color="#164E63"
                size={22}
              />
            </div>
            <div className="top-menu__title"> LOGOUT </div>
          </a>
        </li>
      </ul>
    </nav>
    // </div>
  );
};

export default Menu_;
