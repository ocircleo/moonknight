import Card from "../../shared/Card";


const SimilarListing = () => {
    return (
        <div className='mt-16 md:px-1 md:pt-12 bg-[#F7F6FF]'>
            <div className=" md:px-12 mb-10 p-5 ">
                <h1 className="text-4xl font-bold mb-3">Similar Listings</h1>
                <span className="w-4 h-1.5 bg-[#FD3358] inline-block rounded-2xl mr-1.5"></span>
                <span className="w-12 h-1.5 bg-[#FD3358] inline-block rounded-2xl"></span>
                <span></span>
                <p className="text-lg text-slate-400 pt-4">Hand-Picked selection of quality places</p>
            </div> 

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:px-10 p-5 ' data-aos="fade-down" data-aos-anchor-placement="top-center">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                
            </div>
        </div>
    );
};

export default SimilarListing;