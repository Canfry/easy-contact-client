export default function dataList({ contacts }) {
  return (
    <>
      <div>
        {Object.keys(contacts[0]).map((key, index) => (
          <li key={index}>{key}</li>
        ))}
        {contacts.map((contact, index) => (
          <li key={index}>{Object.values(contact).join(' ')}</li>
        ))}
      </div>
    </>
  );
}
