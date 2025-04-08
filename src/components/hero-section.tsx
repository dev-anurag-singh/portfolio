import Link from 'next/link';
import { buttonVariants } from './button';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section id='hero' className='p-4 lg:p-5'>
      <div className='bg-background/10 backdrop-blur-[151px] shadow-[inset_75px_-75px_75px_rgba(165,165,165,0.1),_inset_-75px_75px_75px_rgba(255,255,255,0.1)] rounded-2xl'>
        <div className='max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 xl:px-20 pt-24 flex flex-col items-center justify-between gap-12 md:flex-row md:items-start md:gap-2 lg:gap-6 xl:gap-10'>
          <div className='flex flex-col  space-y-6 xl:space-y-7 text-center items-center md:text-left md:mt-4 lg:mt-6 xl:mt-12 md:items-start'>
            <h1 className='space-y-1.5'>
              <span className='text-nowrap block text-[clamp(2.4rem,6.25vw,6rem)] leading-none font-bold tracking-[0.45px] text-gray-50'>
                Hi, I&apos;m Anurag
              </span>
              <span className='text-xl inline-block text-[clamp(1.4rem,3.47vw,3.2rem)] leading-none font-semibold tracking-[0.45px] bg-clip-text text-transparent bg-[linear-gradient(to_right,#5DFFFF_0%,#AE0CA7_100%)]'>
                Front-End Developer.
              </span>
            </h1>
            <p className='leading-6 text-sm  sm:text-base lg:text-lg lg:leading-[30px] max-w-[30rem] md:max-w-[25rem] lg:max-w-[30rem]'>
              I&apos;m passionate about crafting experiences that are engaging,
              accessible, and user-centric — with a focus on clean design,
              responsive layouts, and performance-driven development
            </p>
            <div className='mt-2 lg:mt-4'>
              <Link href='#recent-work' className={buttonVariants()}>
                See my work
              </Link>
            </div>
          </div>
          <div className='flex justify-center max-w-[25rem]  lg:max-w-[30rem] xl:max-w-[34rem]'>
            <Image
              src='/images/anurag.png'
              alt="Anurag's Picture"
              width={560}
              height={560}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
