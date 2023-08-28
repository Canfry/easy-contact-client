import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Files from './pages/Files';

function App() {
  const [file, setFile] = useState(null);
  const [contacts, setContacts] = useState();

  const url = 'http://localhost:8000/files/upload';

  const navigate = useNavigate();

  function handleOnChange(e) {
    console.log(e.target.files[0].name);
    setFile(e.target.files[0]);
    // console.log(file.name);
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
        navigate('/files');
        console.log(file.name);
        const keys = Object.keys(data[0]);
        const values = Object.values(data[0]);
        console.log(values);
        console.log(keys);
        console.log(data);
      } else {
        console.error('Failed uploading file');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Home handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
        }
      />
      <Route path='/about' element={<About />} />
      <Route
        path='/files'
        element={<Files contacts={contacts} file={file} />}
      />
    </Routes>
  );
}

export default App;
