import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { Authcontext } from "../../private/provider/Provider";
import { useLoaderData } from "react-router-dom";


const EditBlog = () => {
    const { userDB } = useContext(Authcontext)
    const loader = useLoaderData();
    const submitForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        let name, description;
        name = form.title.value;
        description = form.description.value;
        toast("Updating your blog")
        const data = { _id: loader._id, title: name, description: description };
        const res = await fetch("https://moonknight-backend.vercel.app/admin/updateBlog", {
            method: "PUT",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(data)
        })
        const result = await res.json();
     if(result.modifiedCount > 0){
        toast("Blog Updated");
     }
    }
    return (
        <div className="w-full md:w-4/6 mx-auto">

            <h2 className="text-3xl text-center my-4 underline underline-offset-2 capitalize ">Edit the BLog</h2>
            <form onSubmit={submitForm}>
                <fieldset>
                    <label htmlFor="" className="text-lg py-4">Please enter blog title</label>
                    <input type="text" required name="title" className="input input-bordered w-full my-4" placeholder="title" defaultValue={loader?.title} />
                </fieldset>
                <fieldset>
                    <label htmlFor="" className="text-lg py-4">Please enter description</label>
                    <textarea name="description" required className="textarea textarea-bordered w-full h-72 mb-4" placeholder="Bio" defaultValue={loader?.description}></textarea>
                </fieldset>

                <input className="btn bg-indigo-400 w-full  text-white text-xl mb-4"
                    type="submit"
                    value="Update"
                />
            </form>


        </div >
    );
};

export default EditBlog;