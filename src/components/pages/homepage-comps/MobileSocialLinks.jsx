import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const MobileSocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={20} /> LinkedIn
                </>
            ),
            href: 'https://www.linkedin.com/in/anushaudayakumar/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={20} /> GitHub 
                </>
            ),
            href: 'https://github.com/AnushaUKumar'
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={20} /> Mail
                </>
            ),
            href: 'mailto: anusha.ukumar14@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                    <BsFillPersonLinesFill size={20} /> Resume 
                </>
            ),
            href: '/Anusha_Udayakumar.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

    return (
        <div className="hidden desktop:block fixed top-[35%] left-0">
            <ul className="flex flex-col">
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-t from-green-400/50 to-primary-color/50 ml-[-100px] hover:ml-[-10px] duration-300 rounded-md " + 
                            style
                        }
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white text-sm"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileSocialLinks;
