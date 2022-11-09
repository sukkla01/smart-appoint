import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Home, ChevronDown, Archive, LogOut,CalendarCheck2, Cog,BarChart2,Tag } from "lucide-react";
import Link from "next/link";

const Menu_ = () => {
  const router = useRouter();
  const [selectId, setSelectId] = useState(1);
  const [ActiveText, setIsActiveText] = useState("");

  useEffect(() => {
    setSelectId(localStorage.getItem("NavId"));
  }, []);

  const onSelect = (id) => {
    localStorage.setItem("NavId", id);
    if (id == 1) {
      router.push({
        pathname: "/",
        // query: { dep: dep, date: date, profile: profile, tname: tname, hn_: hn, time: '' },
      });
    } else if (id == 2) {
      router.push({
        pathname: "/oapp",
        // query: { dep: dep, date: date, profile: profile, tname: tname, hn_: hn, time: '' },
      });
    } else if (id == 3) {
      router.push({
        pathname: "/report",
        // query: { dep: dep, date: date, profile: profile, tname: tname, hn_: hn, time: '' },
      });
    } else if (id == 9) {
      router.push({
        pathname: "/login",
        // query: { dep: dep, date: date, profile: profile, tname: tname, hn_: hn, time: '' },
      });
    }
  };

  return (
    // <div>
    <nav
      className="top-nav"
      style={{ marginTop: -107, marginLeft: 0, marginRight: 0, zIndex: 10 }}
    >
      <ul style={{ backgroundColor: "#C8D6DC", borderRadius: 10, height: 62 }}>
        <li onClick={() => onSelect(1)}>
          <a
            href="#"
            className={selectId == 1 ? "top-menu top-menu--active" : "top-menu"}
          >
            <div className="top-menu__icon">
              <Home className="top-menu__sub-icon" color="#164E63" size={22} />
            </div>
            <div className="top-menu__title">
              Dashboard
              {/* <ChevronDown
                className="top-menu__sub-icon"
                color="#164E63"
                size={16}
              /> */}
            </div>
          </a>
        </li>
        <li onClick={() => onSelect(2)}>
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
            <div className="top-menu__title">
              นัดหมาย
              {/* <ChevronDown
                className="top-menu__sub-icon"
                color="#164E63"
                size={16}
              /> */}
            </div>
          </a>

          {/* <ul className>
            <li>
              <a
                href="side-menu-light-dashboard-overview-1.html"
                className="top-menu"
              >
                <div className="top-menu__icon">
                  <i />
                </div>
                <div className="top-menu__title"> Side Menu </div>
              </a>
            </li>
          </ul> */}
        </li>
        <li onClick={() => onSelect(3)}>
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
              {/* <ChevronDown
                className="top-menu__sub-icon"
                color="#164E63"
                size={16}
              /> */}
            </div>
          </a>

        </li>
        <li>
          <a href="#" className="top-menu">
            <div className="top-menu__icon">
              <Cog
                className="top-menu__sub-icon"
                color="#164E63"
                size={22}
              />
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
          <li>
              <a
                href="side-menu-light-dashboard-overview-1.html"
                className="top-menu"
              >
                <div className="top-menu__icon"> </div>
                <div className="top-menu__title"> <Tag
                color="#164E63"
                size={16}
                style ={{ marginRight : 10 }}
              />  ผู้ใช้งาน </div>
              </a>
            </li>
            <li>
              <a
                href="side-menu-light-dashboard-overview-1.html"
                className="top-menu"
              >
                <div className="top-menu__icon"> </div>
                <div className="top-menu__title"> <Tag
                color="#164E63"
                size={16}
                style ={{ marginRight : 10 }}
              />  คลินิก </div>
              </a>
            </li>

          </ul>
        </li>
        <li onClick={() => onSelect(9)}>
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
