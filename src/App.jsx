import { useState } from 'react';

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
    <>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleOnChange} />
        <button type='submit'>Upload</button>
      </form>
      <div>{JSON.stringify(contacts)}</div>
    </>
  );
}

export default App;
