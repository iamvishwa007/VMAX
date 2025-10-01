import React from 'react';
import './Footer.css';

const footerLinks = [
    {
        name: "GitHub",
        url: "https://github.com/iamvishwa007",
        svg: (
            <svg viewBox="0 0 24 24" className="footer-icon">
                <path fill="currentColor" d="M12 .297c-6.6 0-12 5.4-12 12.067 0 5.334 3.438 9.849 8.205 11.441.6.111.82-.264.82-.586v-2.173c-3.338.728-4.042-1.644-4.042-1.644-.546-1.406-1.332-1.782-1.332-1.782-1.089-.761.082-.746.082-.746 1.205.086 1.839 1.256 1.839 1.256 1.07 1.858 2.807 1.321 3.492 1.011.107-.783.42-1.323.764-1.626-2.665-.31-5.467-1.349-5.467-6.006 0-1.326.465-2.409 1.235-3.24-.123-.312-.535-1.563.117-3.258 0 0 1.008-.324 3.301 1.23.957-.268 1.983-.402 3.003-.407 1.02.005 2.047.139 3.006.407 2.289-1.554 3.295-1.23 3.295-1.23.653 1.695.241 2.946.118 3.258.77.831 1.233 1.914 1.233 3.24 0 4.669-2.806 5.692-5.479 5.997.427.368.814 1.096.814 2.21v3.277c0 .325.218.703.825.584C20.565 22.208 24 17.694 24 12.364c0-6.667-5.4-12.067-12-12.067z" />
            </svg>
        ),
        hover: "github"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/iam-vish-wa007/",
        svg: (
            <svg viewBox="0 0 24 24" className="footer-icon">
                <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.85-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.413v1.561h.048c.476-.9 1.637-1.85 3.369-1.85 3.601 0 4.265 2.371 4.265 5.455v6.286zM5.337 7.433a2.073 2.073 0 1 1 0-4.145 2.073 2.073 0 0 1 0 4.145zm1.778 13.019H3.56V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.272V1.723C24 .771 23.2 0 22.225 0z" />
            </svg>
        ),
        hover: "linkedin"
    },{
    name: "Portfolio",
    url: "https://iamvishwa.netlify.app/", 
    svg: (
        <svg viewBox="0 0 24 24" className="footer-icon">
            <path
                fill="currentColor"
                d="M14 3V5H20V19H4V5H10V3H2V21H22V3H14ZM12 7A5 5 0 1 0 12 17A5 5 0 1 0 12 7ZM12 9A3 3 0 1 1 12 15A3 3 0 1 1 12 9Z"
            />
        </svg>
    ),
    hover: "portfolio"
},
{
    name: "Instagram",
    url: "https://www.instagram.com/iam_vish_wa._",
    svg: (
        <svg viewBox="0 0 24 24" className="footer-icon">
            <path
                fill="currentColor"
                d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5c3.072 0 5.75-2.678 5.75-5.75v-8.5C22 4.678 19.322 2 16.25 2h-8.5ZM12 7.25a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 0 1 0-9.5Zm6-1a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-6 3A2.75 2.75 0 1 0 12 16.75A2.75 2.75 0 0 0 12 9.25Z"
            />
        </svg>
    ),
    hover: "instagram"
},
{
    name: "WhatsApp",
    url: "https://wa.me/9159086730",
    svg: (
        <svg viewBox="0 0 24 24" className="footer-icon">
            <path 
                fill="currentColor" 
                d="M16.67 13.89c-.28-.14-1.65-.82-1.9-.91c-.26-.09-.45-.14-.64.14c-.19.28-.73.91-.9 1.1c-.17.19-.35.21-.63.07c-.28-.14-1.17-.43-2.23-1.36c-.82-.73-1.36-1.63-1.52-1.9c-.16-.28-.02-.43.12-.57c.12-.12.28-.31.42-.47c.14-.16.19-.28.28-.47c.09-.19.05-.36-.02-.5c-.07-.14-.63-1.52-.86-2.09c-.23-.55-.46-.47-.64-.48c-.16-.01-.35-.01-.54-.01c-.19 0-.5.07-.77.36c-.26.28-1 1-1 2.43s1.03 2.83 1.17 3.02c.14.19 2.02 3.09 4.9 4.33c.68.29 1.21.47 1.62.6c.68.22 1.3.19 1.79.12c.55-.08 1.65-.68 1.88-1.34c.23-.66.23-1.23.16-1.34c-.07-.11-.26-.18-.54-.32M12 2C6.48 2 2 6.25 2 11.72c0 2.07.68 3.98 1.82 5.54L2 22l4.91-1.77C8.21 21.06 10.05 21.5 12 21.5c5.52 0 10-4.25 10-9.72C22 6.25 17.52 2 12 2" 
            />
        </svg>
    ),
    hover: "whatsapp"
},
{
    name: "Mail",
    url: "mailto:iamvishwa007@gmail.com", 
    svg: (
        <svg viewBox="0 0 24 24" className="footer-icon">
            <path 
                fill="currentColor" 
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4l-8 5l-8-5V6l8 5l8-5v2Z" 
            />
        </svg>
    ),
    hover: "mail"
}


];

export default function Footer({ theme }) {
    return (
        <footer className={`footer ${theme}`}>
            <div className="footer-content">
                <span className="footer-logo">
                    <span className="footer-logo-text">VMAX</span>
                </span>
                <div className="footer-social">
                    {footerLinks.map(({ name, url, svg, hover }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`footer-link ${hover}`}
                            title={name}
                            data-tooltip={hover}
                        >
                            {svg}
                        </a>
                    ))}
                </div>
            </div>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} VMAX. All Rights Reserved.
            </div>
        </footer>
    );
}