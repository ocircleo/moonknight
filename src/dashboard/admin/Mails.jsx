import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MailCompo from '../compo/MailCompo';
import usePageTitle from '../../hooks/PageTitleHook';

const Mails = () => {

  usePageTitle('Too late | mails');

  const [mails, setMails] = useState([]);
  useEffect(() => {
    fetch('https://moonknight-backend.vercel.app/admin/getEmails')
      .then(res => res.json())
      .then(data => {
        setMails(data)
        console.log(data)
      });
  }, [])

  const handleDelete = id => {
    const confirmation = confirm('Are you sure you want to delete');
    if (confirmation) {
      fetch(`https://moonknight-backend.vercel.app/deleteEmail/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            toast('uploaded successfully')
          }
        })
    }
  }

  return (
    <div className=' bg-slate-50'>

      {
        mails.map((data) => <MailCompo

          key={data._id}
          data={data}
          handleDelete={handleDelete}
        >
        </MailCompo>
        )
      }
    </div>
  );
};

export default Mails;