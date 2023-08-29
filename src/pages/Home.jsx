import Header from '../components/Header';

function Home({ handleOnChange, handleSubmit }) {
  return (
    <div className='h-screen flex flex-col relative'>
      <Header />
      <main className='grow flex items-center justify-center w-full'>
        <div>
          <h1 className='text-5xl font-bold text-slate-600'>
            Upload your <span className='text-orange-600'>csv</span> files
          </h1>
          <p className='text-2xl text-slate-600'>
            and access the content from a nice and ordered interface
          </p>
          <form
            onSubmit={handleSubmit}
            className='mt-8 flex items-center justify-between'
          >
            <div className='flex items-center'>
              <span className='bg-slate-600 text-white p-3 cursor-pointer rounded-l-lg'>
                Browse file
              </span>
              <input
                type='file'
                onChange={handleOnChange}
                className='file-input file-input-bordered w-40 max-w-xs [&::file-selector-button]:hidden p-2.5 rounded-l-none'
              />
            </div>

            <button
              type='submit'
              className='border border-slate-600 bg-transparent text-orange-600 py-2.5 px-4 rounded-md hover:bg-orange-600 hover:border-orange-600 hover:text-white'
            >
              Upload
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Home;
