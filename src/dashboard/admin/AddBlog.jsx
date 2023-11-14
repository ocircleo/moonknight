import { useContext, useState } from "react";
import { Authcontext } from "../../private/provider/Provider";
import { toast } from "react-toastify";

const AddBlog = () => {
  const { userDB } = useContext(Authcontext)
  const id = userDB._id
  const [selectedImage, setSelectedImage] = useState('');
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        console.log(event)
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    let name, description, image;
    name = form.title.value;
    description = form.description.value;
    image = form.image.files[0];
    console.log(name, description, image)
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
          form.reset()
        }
      }).catch(error => {
        toast('ops something went wrong')
      })
  };
  return (
    <div className="w-full md:w-4/6 mx-auto">

      <h2 className="text-3xl text-center my-4 underline underline-offset-2 capitalize ">create a new BLog</h2>
      <form onSubmit={submitForm}>
        <fieldset>
          <label htmlFor="" className="text-lg py-4">Please enter blog title</label>
          <input type="text" required name="title" className="input input-bordered w-full my-4" placeholder="title" />
        </fieldset>
        <fieldset>
          <label htmlFor="" className="text-lg py-4">Please enter description</label>
          <textarea name="description" required className="textarea textarea-bordered w-full h-72 mb-4" placeholder="Bio"></textarea>
        </fieldset>
        <fieldset>
          <label className="text-lg py-4 capitalize block">please enter an Image for the blog</label>
          <input required onChange={handleImageChange} type="file" accept="image/*" className="file-input file-input-bordered w-full max-w-xs my-4" name='image' />
        </fieldset>
        <div className="overflow-hidden rounded bg-gray-100 h-96  w-full mb-12">
          <img src={selectedImage} alt="" className="bg-gray-300 w-full h-full object-cover rounded hover:scale-110  duration-200" />
        </div>
        <input  className="btn bg-indigo-400 w-full  text-white text-xl mb-4"
          type="submit"
          value="Add"
        />
      </form>


    </div >
  );
};

export default AddBlog;