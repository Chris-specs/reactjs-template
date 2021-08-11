import {
    SiGithub,
    SiReact,
    SiReactrouter,
    SiTailwindcss,
} from 'react-icons/si';
import Code from '../assets/Code.svg';
import Axios from '../assets/Axios.svg';
import Icons from '../assets/Icons.svg';

const Home = () => {
    return (
        <div className='min-h-screen max-h-screen overflow-hidden bg-brand-bg font-poppins'>
            <div className='flex flex-row justify-end w-full py-5'>
                <a
                    className='font-semibold flex justify-center items-center mr-5 text-base text-white'
                    href='https://github.com/Chris-specs'
                >
                    Christian
                    <SiGithub className='ml-3 text-4xl' />
                </a>
            </div>
            <div className='md:grid grid-cols-2 w-full pt-12 md:pt-28'>
                <div className='md:pl-14 lg:pl-28'>
                    <h1 className='text-6xl md:text-8xl font-bold text-brand text-center md:text-left'>
                        REACT JS
                    </h1>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center md:text-left'>
                        Starter template
                    </h2>
                    <p className='text-white md:text-xl mt-16 w-full lg:w-7/12 text-center md:text-left px-10 md:px-0'>
                        This is a starter template for React projects, includes
                        a next pakages...
                    </p>
                    <div className='flex justify-between w-full md:w-10/12 lg:w-6/12 mt-16 px-12 md:px-0'>
                        <SiReact className='text-4xl text-brand' />
                        <SiTailwindcss className='text-4xl text-icon' />
                        <SiReactrouter className='text-4xl text-white' />
                        <img src={Axios} alt='Axios' />
                        <img src={Icons} alt='React Icons' />
                    </div>
                    <div className='flex justify-center items-center md:block'>
                        <a
                            className='block w-10/12 lg:w-6/12 text-center bg-brand text-brand-bg p-3 font-semibold text-lg rounded-xl shadow-brand mt-16'
                            href='https://github.com/Chris-specs/reactjs-template'
                        >
                            Get code
                        </a>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <img
                        className='mt-16 md:mt-0 md:w-full'
                        src={Code}
                        alt='Code'
                    />
                </div>
            </div>
        </div>
    );
};
export default Home;
