import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Mongodb from './Components/Nodejs/Mongodb';
import NodeJs from './Components/Nodejs/NodeJs';
import ReactJs from './Components/React/ReactJs';
import TailwindReact from './Components/React/Tailwind/TailwindReact';
import Nodemailer from './Components/Nodejs/Nodemailer';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Components/Firebase/firebase.init';
import Loading from './Components/Loading/Loading';
import TailwindComponent from './Components/React/Tailwind/TailwindComponent';
import FullView from './Components/React/Tailwind/FullView';
import Feedback from './Components/Feedback/Feedback';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Javascript from './Components/Javascript/Javascript';
import Mongoose from './Components/Nodejs/Mongoose';
import CodemirrorView from './Components/Codemirror/Codemirror';
import Course from './Components/Courses/Course';
import MailerC from './Components/Courses/MailerC';
import MongooseC from './Components/Courses/Mongoose';
function App() {
  const [user, loading] = useAuthState(auth)
  if (loading) {
    return <Loading />
  }
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/course/node-mailer' element={<MailerC />} />
        <Route path='/course/mongoose' element={<MongooseC />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<h1 className='text-5xl text-center mt-20'>On Development ....</h1>} />
        <Route path='/react' >
          <Route index element={<ReactJs />} />
          <Route path='tailwind' element={<TailwindReact />} />
        </Route>

        <Route path='tailwind/rady-conponent'>
          <Route index element={<TailwindComponent />} />
          <Route path='component/:id' element={<FullView />} />
        </Route>

        <Route path='/node'>
          <Route index element={<NodeJs />} />
          <Route path='mongodb' element={<Mongodb />} />
          <Route path='mongoose' element={<Mongoose />} />
          <Route path='nodemailer' element={<Nodemailer />} />
        </Route>
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/codemirroe' element={<CodemirrorView />} />
        <Route path='/javascript' element={<Javascript />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
