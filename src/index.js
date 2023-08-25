import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from './pages/Blog';
import Admission from './pages/Admission';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Hostel from './pages/Hostel';
import Sports from './pages/Sports';
import PlaySchool from './pages/PlaySchool';
import Chemistry_lab from './pages/Chemistry_lab';
import Physics_lab from './pages/Physics_lab';
import Computer_lab from './pages/Computer_lab';
import Student_login from './pages/Student_login';
import Register from './pages/Register';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Events from './components/Events';
import Payment from './pages/Payment';
import OurSchool from './pages/OurSchool';
import Journey from './pages/Journey';
import OurVision from './pages/OurVision';
import OurMission from './pages/OurMission';
import Campus from './pages/Campus';
import Faculty from './components/Faculty';
import Director from './pages/Director';
import Advice from './components/Advice';
import Fee from './pages/Fee'
import Exam from './components/Exam';
// import Admission from './pages/Admission';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "blog",
    element: <Blog/>,
  },
  {
    path: "admission",
    element: <Admission/>,
  },
  {
    path: "hostel",
    element: <Hostel/>,
  },
  {
    path: "sports",
    element: <Sports/>,
  },
  {
    path: "play_school",
    element: <PlaySchool/>,
  },
  {
    path: "chemistry_lab",
    element: <Chemistry_lab/>,
  },
  {
    path: "physics_lab",
    element: <Physics_lab/>,
  },
  {
    path: "computer_lab",
    element: <Computer_lab/>,
  },
  {
    path: "student-login",
    element: <Student_login/>,
  },
  {
    path: "register",
    element: <Register/>,
  },
  {
    path: "gallery",
    element: <Gallery/>,
  },
  {
    path: "news",
    element: <News/>,
  },
  {
    path: "events",
    element: <Events/>,
  },
  {
    path: "payment",
    element: <Payment/>,
  },
  {
    path: "our_school",
    element: <OurSchool/>,
  },
  {
    path: "journey",
    element: <Journey/>,
  },
  {
    path: "vision",
    element: <OurVision/>,
  },
  {
    path: "mission",
    element: <OurMission/>,
  },
  {
    path: "campus",
    element: <Campus/>,
  },
  {
    path: "faculty",
    element: <Faculty/>,
  },
  {
    path: "director",
    element: <Director/>,
  },
  {
    path: "rules",
    element: <Advice/>,
  },
  {
    path: "fee",
    element: <Fee/>,
  },
  {
    path: "exam",
    element: <Exam/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
