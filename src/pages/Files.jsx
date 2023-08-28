import Header from '../components/Header';

export default function Files({ contacts, file }) {
  console.log(file);
  return (
    <div className='min-h-screen flex flex-col relative'>
      <Header />
      <main className='grow flex min-w-full'>
        <div className='grow w-[20%] bg-slate-600 shadow-sm min-h-screen py-8 px-4 flex flex-col gap-8 items-start sticky left-0'>
          <h1 className='text-white font-bold'>Files</h1>
          <ul className='flex flex-col gap-4 items-start text-white'>
            <button className='bg-orange-600 text-white rounded-lg py-1 px-2'>
              {file.name}
            </button>
            {/* <li>test4.csv</li> */}
          </ul>
        </div>
        <div className='grow py-8 px-4 w-full overflow-x-scroll overflow-y-visible'>
          <table className='w-full'>
            <thead>
              <tr>
                {Object.keys(contacts[0]).map((key, index) => (
                  <th
                    className='border-b-2 text-slate-600 uppercase px-16'
                    key={index}
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr
                  className={`${
                    index % 2 === 1 ? 'bg-white' : 'bg-gray-100'
                  } text-center `}
                  key={index}
                >
                  {Object.values(contact).map((val, index) => (
                    <td className='py-4' key={index}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
