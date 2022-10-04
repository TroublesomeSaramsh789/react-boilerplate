import React from 'react';
import { Heading } from './../../components/global/Typography/index';
import { Link } from 'react-router-dom';
import { Button } from '../../components/global/Button';

const About = () => {
  return (
    <div className='grid w-100 h-100 justify-center px-10 py-20'>
      <Heading className='text-center'>React Boilerplate.</Heading>
      <div className='description grid my-5 gap-5 text-center'>
        <p className='text-lg text-gray-800'>Created by Saramsh Shrestha.</p>
        <a href='https://github.com/TroublesomeSaramsh789/' target='_blank'>
          <Button>Visit Github</Button>
        </a>
      </div>
    </div>
  );
};

export default About;
