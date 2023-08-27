import Header from '../components/Header';

export default function Files({ contacts }) {
  return (
    <div className='h-screen flex flex-col relative'>
      <Header />
      <main className='grow'>
        <table>
          <thead>
            <tr>
              {Object.keys(contacts[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                {Object.values(contact).map((val, index) => (
                  <td key={index}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
