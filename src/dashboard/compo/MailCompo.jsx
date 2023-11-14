/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MailCompo = ({ data, handleDelete }) => {
  const maxLength = 250
  const [pending, setPending] = useState(true)
  const [showAll, setShowAll] = useState(false);
  const [time, setTime] = useState([])

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  useEffect(() => {
    setTime(data.time.split('T'))

  }, [data.time])
  const sendMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.text.value;
    const formData = {
      to: data.email,
      message: text
    }
    fetch(`https://moonknight-backend.vercel.app/mail/send_mail`, {
      method: 'POST',
      headers: { 'content-type': "application/json" },
      body: JSON.stringify(formData)
    }).then(res => res.json()).then(d => {
      if (d.id) {
        fetch(`https://moonknight-backend.vercel.app/admin/hideEmail/${data._id}`).then(res => res.json()).then(da => {
          if (da.modifiedCount == 1) {
            setPending(false)
            toast('message sent')
          }
        })
      }
    }).catch(error => toast(error.message))
  }
  return (
    <div className={`${pending ? '' : 'hidden'}`}>
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

        </div>
        <div>
          <form onSubmit={sendMessage} className="flex  justify-end flex-col gap-2">
            <textarea required name='text' placeholder="Replay" className="textarea textarea-bordered mt-2 text-base textarea-xs w-full h-36" ></textarea>
            <button className="btn btn-active  bg-indigo-500 text-white hover:bg-indigo-800  text-sm">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MailCompo;