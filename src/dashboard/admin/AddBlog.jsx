import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Authcontext } from "../../private/provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import usePageTitle from "../../hooks/PageTitleHook";

const AddBlog = () => {

  usePageTitle('Too late | add blog');

  const { userDB } = useContext(Authcontext)
  const id = userDB._id
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = async (data) => {
    let name, description, image;
    name = data.name;
    description = data.description;
    image = data.image[0]
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', name);
    formData.append('description', description)
    formData.append('id', id)
    toast("uploading your blog")
    fetch('https://moonknight-backend.vercel.app/admin/postBLog', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          toast('uploaded successfully')
        }
        reset()

      }).catch(error => {
        toast('ops something went wrong')
      })
  };
  return (
    <div className="pl-48">

      <h2 className="text-xl text-blue-600 py-4 max-w-2xl capitalize">create a new BLog</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-2xl">
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter your Name"
            className="input input-bordered w-full max-w-2xl"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-2xl">
          <textarea
            id="textarea"
            name="textarea"
            rows="4"
            placeholder="Type your text here"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            {...register("description", {
              required: {
                value: true,
                message: "description is Required",
              },
            })}
          ></textarea>
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-2xl">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="file" className="file-input w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn btn-primary w-full max-w-2xl text-white text-xl mb-4"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddBlog;