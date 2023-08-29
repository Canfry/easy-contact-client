export default function Sidebar({ file }) {
  return (
    <div className='grow w-[20%] bg-slate-600 shadow-sm min-h-screen py-8 px-4 flex flex-col gap-8 items-start sticky left-0 border-t-4 border-t-slate-600 '>
      <h1 className='text-white font-bold'> Your files:</h1>
      <ul className='flex flex-col gap-4 items-start text-white'>
        <button className='bg-orange-600 text-white rounded-lg py-1 px-2'>
          {file.name}
        </button>
      </ul>
    </div>
  );
}
