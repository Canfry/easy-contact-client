export default function Table({ contacts }) {
  return (
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
              } text-center hover:bg-orange-600 hover:text-white `}
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
  );
}
