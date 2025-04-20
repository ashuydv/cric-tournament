import React from 'react';

const SocialMediaLinks = () => {
    const socialLinks = [
        {
            name: "Facebook",
            href: "https://facebook.com",
            path: `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />`,
        },
        {
            name: "X",
            href: "https://x.com",
            path: `<path d="M4.25 3h3.477l4.777 6.507L17.776 3H21L14.46 11.7 21.75 21h-3.52l-5.237-7.146L6.062 21H3l7.08-8.8L4.25 3z"/>`,
        },
        {
            name: "Instagram",
            href: "#",
            path: `<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>`,
        },
        {
            name: "YouTube",
            href: "https://youtube.com",
            path: `<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>`,
        }
    ];

    return (
        <div className="flex flex-row gap-3 mt-8 sm:fixed sm:top-1/2 sm:right-8 sm:-translate-y-1/2 sm:mt-0 sm:flex-col z-40">
            {socialLinks.map(({ name, href, path }, i) => (
                <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="group"
                >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black shadow-md border border-black overflow-hidden transition-all duration-300 hover:bg-orange-500 group-hover:scale-110">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-200 group-hover:text-white transition-colors"
                            dangerouslySetInnerHTML={{ __html: path }}
                        />
                    </div>
                </a>
            ))}
            <div className="absolute left-0 top-0 w-full h-full -z-10 bg-orange-500 blur-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </div>
    );
};

export default SocialMediaLinks;