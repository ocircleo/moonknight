import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const EditBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true);
    let timeOut;
    const debounce = (e) => {
        clearTimeout(timeOut);
        let value = e.target.value;
        timeOut = setTimeout(() => searchBlogs(value), 400)
    };
    const searchBlogs = async (text) => {
        if (text == "") {
            fetchData();
        } else {
            setLoading(true)
            const result = await fetch(`https://moonknight-backend.vercel.app/user/blogSearch/${text}`);
            const data = await result.json();
            setBlogs(data);
            setLoading(false)
        }
    }
    const fetchData = async () => {
        setLoading(true)
        const result = await fetch("https://moonknight-backend.vercel.app/user/allBlog")
        const data = await result.json()
        setBlogs(data)
        setLoading(false)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='md:px-10'>
            <input type='text' placeholder='type to Search' className='border-2 border-indigo-500 rounded p-2 w-full mt-5' onChange={debounce} />
<p className='text-md font-semibold capitalize text-center py-5'>{loading?"loading, please wait":""}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4  py-5'>
                {
                    blogs.map((ele, index) => <BlogCard key={index} ele={ele}></BlogCard>)
                }

            </div>
        </div>
    );
};

export default EditBlogs;