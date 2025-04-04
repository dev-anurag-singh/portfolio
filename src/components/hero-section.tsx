import Link from 'next/link';
import { buttonVariants } from './button';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section id='hero'>
      <div className='p-6 '>
        <div className='bg-background/10 backdrop-blur-[151px] shadow-[inset_75px_-75px_75px_rgba(165,165,165,0.1),_inset_-75px_75px_75px_rgba(255,255,255,0.1)] rounded-2xl h-full grid place-items-center'>
          <div className='container mx-auto px-6 pt-24 flex flex-col md:flex-row items-center justify-center'>
            <div className='flex flex-col space-y-6 text-center md:text-left'>
              <h1 className='space-y-1.5'>
                <span className='text-nowrap block sm:text-5xl text-4xl lg:text-7xl xl:text-[5.625rem] font-bold tracking-[0.45px] text-gray-50'>
                  Hi, I&apos;m Anurag
                </span>
                <span className='text-xl inline-block sm:text-2xl lg:text-4xl xl:text-[3.125rem] font-semibold tracking-[0.45px] bg-clip-text text-transparent bg-[linear-gradient(to_right,#5DFFFF_0%,#AE0CA7_100%)]'>
                  Front-End Developer.
                </span>
              </h1>
              <p className='text-sm leading-6 sm:text-base lg:text-lg lg:leading-[30px] md:w-80 lg:w-[30rem] xl:w-[32rem]'>
                Transforming designs into seamless, interactive, and
                user-friendly interfaces that enhance user experience and
                deliver visually engaging digital solutions.
              </p>
              <div className='mt-4'>
                <Link href='#recent-work' className={buttonVariants()}>
                  See my work
                </Link>
              </div>
            </div>
            <div className='mt-12 md:mt-0 flex justify-center max-w-96 md:max-w-none'>
              <Image
                src='/images/anurag2.png'
                alt="Anurag's Picture"
                width={560}
                height={650}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
