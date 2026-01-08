import React, { createContext } from 'react'
export const AppData = createContext()
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
      lastActive: "10 min ago",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    },
    {
      id: 2,
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

const AppDatacontext = ({children}) => {
  return (
    <div>
        <AppData.Provider value={Data}>
            {children}
        </AppData.Provider>
        </div>
  )
}

export default AppDatacontext