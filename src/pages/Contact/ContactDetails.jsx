import { useContext, useState } from "react";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineAttachEmail, MdOutlineLocationOn } from "react-icons/md";
import { Authcontext } from "../../private/provider/Provider";
import { toast } from "react-toastify";

const ContactDetails = () => {
    const { userDB } = useContext(Authcontext)
    const [emailError, setEmailError] = useState('');
    const [formError, setFormError] = useState('');
    const submitForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value || 'not provided';
        const email = form.email.value;
        const subject = form.subject.value || 'not provided';
        const message = form.message.value;
        if (!email) {
            setEmailError('please enter an email')
            return;
        }
        if (!message) {
            setEmailError('')
            setFormError("please enter you message")
            return;
        }
        setEmailError(''), setFormError('')
        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        fetch('https://moonknight-backend.vercel.app/user/contact', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                form.reset();
                toast('Message send')
            }
        }).catch(error => {
            toast("Sorry error: " + error.message)
        })
    }

    return (
        <div className="md:pl-24 lg:pl-24 md:pe-24 lg:pe-24 p-6 overflow-x-hidden">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-6/12 shadow sm:rounded-md">
                    <h1 className="text-black text-2xl font-bold  p-6 " id="contact">Get In Touch</h1>
                    <hr className="pl-6 pe-6" />
                    <div>
                        <div className="mt-5 md:mt-0 ">
                            <form onSubmit={submitForm}>
                                <div>
                                    <div className="px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-12 gap-4 ">
                                            <div className="col-span-12">
                                                <label className="block text-sm font-medium text-gray-700"> Name</label>
                                                <input defaultValue={userDB?.name} type="text" name="name" id="name" placeholder="Enter Your Name" className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-200 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md h-12" />
                                            </div>


                                            <div className="col-span-12">
                                                <label className="block text-sm font-medium text-gray-700">Email address</label>
                                                <input type="text" defaultValue={userDB?.email} name="email" id="email_address" placeholder="Enter Your Email" className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12" />
                                                <p className="text-sm text-red-500">{emailError}</p>
                                            </div>



                                            <div className="col-span-12">
                                                <label className="block text-sm font-medium text-gray-700">Subject</label>
                                                <input type="text" name="subject" id="subject" placeholder="Enter Your Subject" className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12" />
                                            </div>

                                            <div className="col-span-12">
                                                <label>Description</label>
                                                <textarea name="message" className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-200 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md h-80"
                                                    placeholder="message"
                                                ></textarea>
                                                <p className="text-sm text-red-500">{formError}</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Submit Enquiry
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="w-full md:w-6/12">
                    <h1 className="text-black text-2xl font-bold pb-6">Contact Details</h1>
                    <section>
                        <div className="flex gap-8">
                            <span className="shadow overflow-hidden sm:rounded-md p-8 text-indigo-800 text-2xl font-bold"><BsTelephoneOutbound /></span>
                            <div>
                                <h2 className="text-xl font-bold pt-3">Call Us At</h2>
                                <p className="text-gray-400 pt-3">+1 63980 98393, +1 63980 98393</p>
                            </div>
                        </div>
                        <div className="flex gap-8 pt-6">
                            <span className="shadow overflow-hidden sm:rounded-md p-8 text-indigo-800 text-2xl font-bold"><MdOutlineAttachEmail /></span>
                            <div>
                                <h2 className="text-xl font-bold pt-3">Email Us</h2>
                                <p className="text-gray-400 pt-3">info@example.com</p>
                            </div>
                        </div>
                        <div className="flex gap-8 pt-6">
                            <span className="shadow overflow-hidden sm:rounded-md p-8 text-indigo-700 text-2xl font-bold"><MdOutlineLocationOn /></span>
                            <div>
                                <h2 className="text-xl font-bold pt-3">Location</h2>
                                <p className="text-gray-400 pt-2">Jl. Surabaya Jaya, No.10, Surabaya</p>
                                <p className="text-gray-400">Dhaka</p>
                            </div>
                        </div>

                    </section>

                    <div className="pt-14">
                        <h1 className="text-black text-3xl font-bold pb-12">Find Us On</h1>
                        <span><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14607.604248453179!2d90.38425380000001!3d23.750907299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1698685739444!5m2!1sen!2sbd"
                            className="lg:w-[700px] md:w-[700px] lg:h-[500px] md:h-[500px] w-full" allowfullscreen="" loading="lazy"></iframe></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;