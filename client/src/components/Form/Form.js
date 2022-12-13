import React, { useState } from 'react';

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  });
  const handleSubmit = () => {

  }
  return (
    <div classname="w-full max-w-xs">
      <h3>Creating a Memory</h3>
      <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label htmlFor="creator" className="block text-gray-700 text-sm font-bold mb-2">Creator</label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="creator" id="creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value}) } /> <br />
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input type="text" name="title" id="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value}) } /> <br />
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label> 
        <input type="text" name="message" id="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value}) } /> <br />
        <label htmlFor="tags" className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
        <input type="text" name="tags" id="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value}) } />
      </form>
    </div>
  )
}

export default Form;