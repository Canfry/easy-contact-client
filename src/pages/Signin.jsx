import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <div className='h-screen flex flex-col items-center justify-center relative'>
      <h1 className='text-4xl text-slate-600 uppercase text bold'>Login</h1>
      <form className='py-8 px-8 max-w-70% mx-auto'>
        <div className='flex flex-col items-start'>
          <label htmlFor='email' className='text-slate-600'>
            Email:
          </label>
          <input
            type='text'
            name='email'
            className='border border-orange-600 mb-4 w-full rounded-md py-1 px-3 outline-3 outline-orange-600'
            placeholder='Enter your email'
            autoComplete='off'
          />
        </div>
        <div className='flex flex-col items-start'>
          <label htmlFor='password' className='text-slate-600'>
            Password:
          </label>
          <input
            type='password'
            name='password'
            className='border border-orange-600 mb-4 w-full rounded-md py-1 px-3 outline-3 outline-orange-600'
            placeholder='Enter your password'
            autoComplete='off'
          />
        </div>
        <div className='text-center my-4'>
          <button className='border border-slate-600 bg-white text-orange-600 text-xl py-2 px-4 rounded-md hover:bg-orange-600 hover:border-orange-600 hover:text-white'>
            Login
          </button>
        </div>
        <div className='text-center'>
          <Link to='/register'>
            <p>
              Not registered yet?{' '}
              <span className='text-orange-600'>Register</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
