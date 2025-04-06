import Link from 'next/link';
import { buttonVariants } from './button';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section id='hero' className='p-4 md:p-6'>
      <div className='bg-background/10 backdrop-blur-[151px] shadow-[inset_75px_-75px_75px_rgba(165,165,165,0.1),_inset_-75px_75px_75px_rgba(255,255,255,0.1)] rounded-2xl'>
        <div className='wrapper pt-24 flex flex-col items-center justify-between gap-12 md:flex-row md:items-start md:gap-0'>
          <div className='flex flex-col items-center text-center space-y-6  md:mt-10 lg:mt-16 xl:mt-20 md:text-left md:items-start'>
            <h1 className='space-y-1.5'>
              <span className='text-nowrap block text-[clamp(2.4rem,.5rem_+_5.7vw,6rem)] leading-none font-bold tracking-[0.45px] text-gray-50'>
                Hi, I&apos;m Anurag
              </span>
              <span className='text-xl inline-block text-[clamp(1.4rem,.5rem_+_2.91vw,3.2rem)] leading-none font-semibold tracking-[0.45px] bg-clip-text text-transparent bg-[linear-gradient(to_right,#5DFFFF_0%,#AE0CA7_100%)]'>
                Front-End Developer.
              </span>
            </h1>
            <p className=' leading-6 text-base lg:text-lg lg:leading-[30px] max-w-[25rem] lg:max-w-[30rem]'>
              I&apos;m passionate about crafting experiences that are engaging,
              accessible, and user-centric.
            </p>
            <div className='mt-4'>
              <Link href='#recent-work' className={buttonVariants()}>
                See my work
              </Link>
            </div>
          </div>
          <div className='flex justify-center  max-w-96 lg:max-w-[30rem] xl:max-w-[35rem]'>
            <Image
              src='/images/anurag2.png'
              alt="Anurag's Picture"
              width={560}
              height={650}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
