import React from 'react';
import { Heading } from './../../components/global/Typography/index';
import { Link } from 'react-router-dom';
import { Button } from '../../components/global/Button';

const Home = () => {
  return (
    <div className='grid w-100 h-100 justify-center px-10 py-20'>
      <Heading className='text-center'>
        Welcome to the React Boilerplate.
      </Heading>
      <div className='description grid my-5 gap-5'>
        <p className='text-2xl text-gray-700'>
          This is created to make working with react a bit faster by using some
          popular and battle tested libraries.
        </p>
        <div className='flex gap-4 justify-center'>
          <Link to='/about'>
            <Button>Learn More</Button>
          </Link>
          <a
            href='https://github.com/TroublesomeSaramsh789/react-boilerplate'
            target='_blank'
          >
            <Button className='bg-gray-600'>Visit to Repository</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
