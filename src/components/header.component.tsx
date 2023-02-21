import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';

const Header = () => {
    return (
        <header className="bg-blobPattern bg-secondary bg-no-repeat bg-cover bg-origin-border min-h-screen flex flex-col justify-center items-center relative">
            <h1 className='text-center text-5xl mb-2 text-white font-Roboto'>Shehar Yar Khan</h1>
            <p className="text-xl text-white mb-10">Full Stack Developer</p>

            <div className="flex flex-row justify-center gap-4 items-center">
                <a href="https://linkedin.com/in/shehar-yar-khan"><FaLinkedin className="text-white text-3xl" /></a>
                <a href="https://github.com/sheharyar566"><FaGithub className="text-white text-3xl" /></a>
                <a href="mailto:sheharyar566@gmail.com"><GrMail className="text-white text-3xl" /></a>
            </div>

            <Link href="#projects" className='animate-bounce absolute bottom-4 flex flex-col justify-center items-center'>
                <p className="text-xl text-white font-bold">Projects</p>
                <BiChevronDown className="text-2xl text-white" />
            </Link>
        </header>
    );
}

export default Header;