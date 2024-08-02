import React from 'react'
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20 gap-10'>
      <h1 className="text-4xl lg:text-7xl sm:text-6xl font-customFontEn tracking-tight text-neutral-700 dark:text-neutral-300 text-semibold text-center">AceDot Build Tools {' '}
        <span className='bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text'>
          for Developers
        </span>
        </h1> 
        <p className='mb-10 text-center text-neutral-400 max-w-4xl font-customFontKr lg:text-lg mb:text-sm'>
        대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다.
        </p>
        <div className='flex gap-4'>
          {heroLinks.map((item, idx) => (
              <Link 
               to={item.to} 
               key={idx} 
               className={`font-customFontEn border border-neutral-500 py-1 px-4 rounded-md ${
                idx === 0 &&
                'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-0'
              }`}
            >
              {item.text}
            </Link>
            ))}
        </div>

        <div className='flex mt-10 gap-4 justify-center flex-col md:flex-row items-center'>
          <video autoPlay muted loop className='vid  md:w-1/3'>
            <source src={video1} />
          </video>
          <video autoPlay muted loop className='vid  md:w-1/3'>
            <source src={video2} />
          </video>
        </div>
    </div>
  );
};

export default HeroSection; 