import React from 'react'
import {Route , Routes} from 'react-router-dom';
import Home from '../modules/user/components/pages/Home/Home';
import Applicants from '../modules/user/components/pages/Applicants/Applicants';
import Profile from '../modules/user/components/pages/Profile/Profile';
import Student from '../modules/user/components/pages/Student/Student';
import StudentProfile from '../modules/user/components/pages/Profile/StudentProfile';
import Everyone from '../modules/user/components/pages/Everyone/Everyone';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path="applicants" element={<Applicants/>} />
        <Route path="student" element={<Student/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="studentProfile" element={<StudentProfile/>} />
        <Route path='everyone' element={<Everyone/>} />
        <Route path="*" element={<Home/>} />
    </Routes>
  )
}

export default AllRoutes