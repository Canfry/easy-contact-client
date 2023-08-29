import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';

export default function Files({ contacts, file }) {
  return (
    <div className='min-h-screen flex flex-col relative'>
      <Header />
      <main className='grow flex min-w-full'>
        <Sidebar file={file} />
        <Table contacts={contacts} />
      </main>
    </div>
  );
}
