import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='px-32 py-8 text-slate-600 flex items-center justify-between grow-0'>
      <div>
        <Link to='/'>
          <h1 className='text-3xl'>
            Easy<span className='font-bold text-orange-600'>CSV</span>
          </h1>
        </Link>
      </div>
      <nav>
        <ul className='flex items-center gap-4'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/signin'>
            <button className='transition-all ease-in-out duration-900 bg-gradient-to-bl from-orange-500 to-orange-700 text-white py-1 px-4 rounded-md hover:bg-gradient-to-tr'>
              Sign In
            </button>
          </Link>
          <Link className='text-slate-800 font-semibold'>Register</Link>
        </ul>
      </nav>
    </header>
  );
}
