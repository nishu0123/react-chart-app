import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';

export const SidebarData = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/"

    },
    {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        link:"/Dashboard"

    }
    ,
    {
        title:"Contact us",
        icon:<ContactsIcon/>,
        link:"/Contact"

    }
    ,
    {
        title:"About us",
        icon:<InfoIcon/>,
        link:"/About"

    }
   
    
] 