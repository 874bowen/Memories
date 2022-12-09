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
      <div className='w-full flex justify-center items-center'>
         <div className='items-center w-[80%] '>
         <Navbar />
         <div className='mt-5 py-20'>
            <div className='mt-5 grid md:grid-cols-3'>
            <div className='col-span-2'><Posts /></div>
            <Form />
            </div>
         </div>
         </div>
      </div>
   );
}

export default App;