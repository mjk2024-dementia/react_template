import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants/data';
import { Link } from 'react-router-dom';
import FooterContents from './FooterContents';

const Footer = () => {
  return (
  <footer className='mt-20 border-t py-10 border-x-neutral-700'>
    <div className="container grid lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10">
      <FooterContents title='Resources' linkData={resourcesLinks} />
      <FooterContents title='Title' linkData={platformLinks}/>
      <FooterContents title='Community' linkData={communityLinks}/>
    </div>
  </footer>
  );
};

export default Footer;