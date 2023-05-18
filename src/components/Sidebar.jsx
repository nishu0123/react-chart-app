import React from 'react'
import { SidebarData } from './SidebarData';
import { Outlet, Link } from "react-router-dom";

function sidebar() {
  return (
    <div class="Sidebar ">
      <ul class="SidebarList ">


        {SidebarData.map((val, key) => {
          return (
            <li class="row"

              key={key}
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;//this is how we are going to the link but its now working 
              }}
            >

              <div id="Icon"> {val.icon}</div>
              <div id="Title">{val.title}</div>

              {/* <div id="Title">
                <Link to={val.link}>
                  {val.title}
                </Link>
              </div> */}

            </li>
          );

        })}
        <Outlet />
      </ul>
    </div>
  )
}

export default sidebar