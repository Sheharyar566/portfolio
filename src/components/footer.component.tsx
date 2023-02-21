import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className=" bg-primary text-center px-10 py-5">
            <p className="text-secondary">Built with <AiFillHeart className="text-red-600 inline text-xl">&#10084;</AiFillHeart> using <strong>NextJS</strong> and <strong>Tailwind</strong></p>
        </footer>
    );
}

export default Footer;