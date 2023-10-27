import Work from "./Work";


const WorkSection = () => {
    return (
       <div>
         <Work/>
         <div className="grid p-8 pt-8 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-4">
            <div className="shadow-2xl card bg-base-100 h-72 w-11/12">
                <div className='flex justify-center items-center'>
                    <span className='h-28 w-28 rounded-full bg-red-600'>
                    <img className='' src={card1} alt="" />
                    </span>
                </div>
                <div className='text-center p-3'>
                    <h1 className='text-slate-700 text-xl font-mono pt-2'>01. Search for Location</h1>
                    <p className='text-slate-500 text-base font-mono pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio…</p>
                </div>
            </div>

            <div className="shadow-2xl card bg-base-100 h-72 w-11/12">
                <div className='flex justify-center items-center pt-11'>
                    <img className=' h-16 w-16 rounded-full' src={card2} alt="" />
                </div>
                <div className='text-center p-3'>
                    <h1 className='text-slate-700 text-xl font-mono pt-2'>01. Search for Location</h1>
                    <p className='text-slate-500 text-base font-mono pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio…</p>
                </div>
            </div>

            <div className="shadow-2xl card bg-base-100 h-72 w-11/12">
                <div className='flex justify-center items-center pt-11'>
                    <img className=' h-16 w-16 rounded-full' src={card3} alt="" />
                </div>
                <div className='text-center p-3'>
                    <h1 className='text-slate-700 text-xl font-mono pt-2'>01. Search for Location</h1>
                    <p className='text-slate-500 text-base font-mono pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio…</p>
                </div>
            </div>

        </div>
       </div>
    );
};

export default WorkSection;