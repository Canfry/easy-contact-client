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
            {/* <input
              type='file'
              onChange={handleOnChange}
              className='::before cursor-pointer'
            /> */}
            <input
              type='file'
              onChange={handleOnChange}
              className='file-input file-input-bordered w-full max-w-xs'
            />
            <button
              type='submit'
              className='border border-slate-600 bg-transparent text-orange-600 py-2 px-4 rounded-md hover:bg-orange-600 hover:border-orange-600 hover:text-white'
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
