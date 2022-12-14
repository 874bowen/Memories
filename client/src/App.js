import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Post/Posts';
import './index.css';

const App = () => {
   const dispatch = useDispatch();
   
   useEffect(() => {
      dispatch(getPosts())
   }, [dispatch]);


   return (
      <div className=''>

         <div className="grid h-[100px] place-items-center"><Navbar /></div>
         <div className='w-[80%] mt-3 m-auto md:grid grid-cols-3 gap-3'>
            <div className="col-span-2"><Posts /></div>
            <div className=''><Form /></div>
         </div>
      </div>
   );
}

export default App;