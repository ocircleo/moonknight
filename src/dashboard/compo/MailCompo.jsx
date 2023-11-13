import { useEffect, useState } from 'react';

const MailCompo = ({ data, handleDelete }) => {
  const maxLength = 250
  const [showAll, setShowAll] = useState(false);
  const [time, setTime] = useState([])

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  useEffect(() => {
    setTime(data.time.split('T'))

  }, [data.time])
  return (
    <div>
      <div className=" text-lg shadow-lg  rounded-xl  py-4 px-12  font-semibold font-small">
        <div>
          <h2>Subject: <span className='text-lg font-semibold capitalize'>{data.subject}</span>   </h2>
          <h2 className='text-sm'> From : {data.email}   </h2>
          <p className=' text-sm space-y-0 text-gray-400 pt-0 mt-0'>Date: {time[0] || 'unknown'}</p>
          <p className='text-lg font-semibold text-gray-400 pt-0 mt-0'>Name: {data.name}</p>
          <div className='flex flex-col'>

            {showAll ? (
              <p>{data.message}</p>
            ) : (
              <p>
                {data.message.length > maxLength ? `${data.message.slice(0, maxLength)}...` : data.message}
              </p>
            )}
            {data.message.length > maxLength && (
              <span
                className="text-indigo-400 cursor-pointer font-bold  pb-2 rounded"
                onClick={toggleShowAll}
              >show
                {showAll ? ' Less' : ' More'}
              </span>
            )}
          </div>
          <textarea placeholder="Replay" className="textarea textarea-bordered mt-2 text-base textarea-xs w-full h-36" ></textarea>
        </div>
        <div>
          <div className="flex  justify-end flex-col md:flex-row gap-2">
            <button className="btn btn-active  bg-indigo-500 text-white hover:bg-indigo-800  text-sm">Send Message</button>

            <button onClick={() => handleDelete(data._id)} className="btn btn-active  bg-red-500 text-white hover:bg-red-800  text-sm">Remove Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailCompo;