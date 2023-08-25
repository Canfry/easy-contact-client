import { useState } from 'react';

import Header from './components/Header';

function App() {
  const [file, setFile] = useState(null);
  const [contacts, setContacts] = useState();

  const url = 'http://localhost:8000/files/upload';

  function handleOnChange(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        console.log('File uplaoded successfully');
        const data = await res.json();
        setContacts(data);
        console.log(data);
      } else {
        console.error('Failed uploading file');
      }
    } catch (err) {
      console.error(err);
    }
  }

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
          <form onSubmit={handleSubmit} className='mt-8'>
            <input
              type='file'
              onChange={handleOnChange}
              className='::before cursor-pointer'
            />
            <button
              type='submit'
              className='border border-slate-600 bg-transparent text-orange-600 py-2 px-4 rounded-md'
            >
              Upload
            </button>
          </form>
        </div>
      </main>

      {/* <div>{JSON.stringify(contacts)}</div> */}
    </div>
  );
}

export default App;
