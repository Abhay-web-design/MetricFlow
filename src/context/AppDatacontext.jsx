import { useState } from "react"
import React, { createContext } from 'react'
export const AppData = createContext()
 

const AppDatacontext = ({children}) => {
  const Data = {
  // =========================
  // DASHBOARD DATA
  // =========================
  dashboard: {
    cards: [
      { title: "Total Users", value: 12450, growth: +12.5 },
      { title: "Active Users", value: 8230, growth: +8.2 },
      { title: "New Signups", value: 1240, growth: +5.1 },
      { title: "Churn Rate", value: "2.1%", growth: -0.4 },
    ],

    userGrowth: {
      labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      data: [1200,1800,2500,3200,4100,5200,6100,7200,8300,9600,11000,12450],
    },

    // 🔹 NEW: Recent Users (Dashboard)
    recentUsers: [
      {
        id: 1,
        name: "Amit Sharma",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
      },
      {
        id: 2,
        name: "Priya Verma",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      },
      {
        id: 3,
        name: "Rahul Mehta",
        status: "Inactive",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      },
      {
    id: 4,
    name: "Sneha Iyer",
    email: "sneha@gmail.com",
    status: "Active",
    lastActive: "25 min ago",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Arjun Patel",
    email: "arjun@gmail.com",
    status: "Inactive",
    lastActive: "1 day ago",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    id: 6,
    name: "Neha Kapoor",
    email: "neha@gmail.com",
    status: "Active",
    lastActive: "5 min ago",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  }
    ],
  },

  // =========================
  // ANALYTICS DATA
  // =========================
  analytics: {
    events: [
      "User Signed Up",
      "User Logged In",
      "Active Users",
      "Task Created",
      "Task Completed",
    ],

    // 🔹 NEW: Daily User Logged In (Line Chart)
    dailyLogins: {
      labels: [
        "Mon","Tue","Wed","Thu","Fri","Sat","Sun"
      ],
      data: [320, 450, 380, 520, 610, 430, 390],
    },

    usageGraph:[{title:"Feature Usage",
      graph: {
        labels:["Settings Update","Analytics Page", "Dashboard View", "Task Creation"],
        value:[78,92,64,41]
      }},

    {title:"Retention Rate",
      graph: {
        labels:[ "Week 1","Week 2","Week 3","Week 4"],
         value: [82,71,63,58] 
      }
     
    }
  ]
  },

  // =========================
  // USERS PAGE DATA
  // =========================
  users: [
    {
    id: 1,
    name: "Amit Sharma",
    email: "amit@gmail.com",
    status: "Active",
    lastActive: "2 min ago",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya@gmail.com",
    status: "Active",
    lastActive: "10 min ago",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    email: "rahul@gmail.com",
    status: "Inactive",
    lastActive: "1 hour ago",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    id: 4,
    name: "Sneha Iyer",
    email: "sneha@gmail.com",
    status: "Active",
    lastActive: "25 min ago",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Arjun Patel",
    email: "arjun@gmail.com",
    status: "Inactive",
    lastActive: "1 day ago",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    id: 6,
    name: "Neha Kapoor",
    email: "neha@gmail.com",
    status: "Active",
    lastActive: "5 min ago",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 7,
    name: "Vikram Singh",
    email: "vikram@gmail.com",
    status: "Active",
    lastActive: "1 hour ago",
    avatar: "https://randomuser.me/api/portraits/men/90.jpg",
  },
  {
    id: 8,
    name: "Ananya Gupta",
    email: "ananya@gmail.com",
    status: "Inactive",
    lastActive: "2 days ago",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: 9,
    name: "Karan Malhotra",
    email: "karan@gmail.com",
    status: "Active",
    lastActive: "15 min ago",
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    id: 10,
    name: "Pooja Nair",
    email: "pooja@gmail.com",
    status: "Active",
    lastActive: "40 min ago",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    id: 11,
    name: "Rohit Jain",
    email: "rohit@gmail.com",
    status: "Inactive",
    lastActive: "4 days ago",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    id: 12,
    name: "Isha Khanna",
    email: "isha@gmail.com",
    status: "Active",
    lastActive: "8 min ago",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
      id: 13,
      name: "Amit Sharma",
      email: "amit@gmail.com",
      status: "Active",
      lastActive: "10 min ago",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    },
    {
      id: 14,
      name: "Priya Verma",
      email: "priya@gmail.com",
      status: "Inactive",
      lastActive: "2 days ago",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
  ],

  // =========================
  // SETTINGS
  // =========================
  settings: {
    theme: "dark",
    defaultRange: "Last 30 Days",
    defaultEvent: "Active Users",
    showGrowth: true,
    monthlyNotification: true,
  },
};
const [input, setinput] = useState("");
//search users or filter users
let Userdata = Data.users.filter((e)=>{
 let name =  input.toLowerCase();
return(
  e.name.toLowerCase().includes(name) 
)
});

//profile div
const [profile, setprofile] = useState(false);
//sidebar 
const [sidebar, setsidebar] = useState(false);

  return (
    <div>
        <AppData.Provider value={{Data,setinput,input,Userdata, profile, setprofile, sidebar, setsidebar}}>
            {children}
        </AppData.Provider>
        </div>
  )
}

export default AppDatacontext