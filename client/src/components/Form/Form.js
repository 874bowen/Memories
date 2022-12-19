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

  const clear = () => {

  }

  return (
    <div className='w-full'>
      <h3 className='text-center'>Creating a Memory</h3>
      <form action="" className="m-auto bg-[#FDF5DF] shadow-md border-solid border-t-4 border-r-4 border-[#8fd9de] rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <label htmlFor="creator" className="block text-gray-700 text-sm font-bold mb-2">Creator</label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="creator" id="creator" value={postData.creator} placeholder="John Doe" onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> <br />
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="title" id="title" value={postData.title} placeholder="Our First Honeymoon" onChange={(e) => setPostData({ ...postData, title: e.target.value })} /> <br />
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" id="message" value={postData.message} placeholder="It was on December 21st, 2020 ..." onChange={(e) => setPostData({ ...postData, message: e.target.value })} /> <br />
        <label htmlFor="tags" className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="tags" id="tags" value={postData.tags} placeholder="love, family, honeymoon" onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        <div class="flex justify-center">
          <div class="mb-3 w-96">
          <label htmlFor="tags" className="block text-gray-700 text-sm font-bold mb-2">File</label>
            <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" onChange={(base64) => () => setPostData({...postData, selectedFile: base64})}/>
          </div>
        </div>
        <p className='text-center flex gap-4 mt-3'>
          <button class="... text-center ring-2 ring-[#5EBEC4]" type='submit'>Post Memory</button>{" "}
          <button class="... text-center ring-2 ring-[#f64141]" onClick={clear}>Clear</button>
        </p>
      </form>
    </div>
  )
}

export default Form;