import React from "react";

const SocialMediaLinks = () => {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1AEtMsy5yM/?mibextid=wwXIfr",
      path: `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />`,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/_.runbhumi._/",
      path: `<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>`,
    },
    {
      name: "X",
      href: "https://x.com/torunbhumi?s=21",
      path: `<path d="M4.25 3h3.477l4.777 6.507L17.776 3H21L14.46 11.7 21.75 21h-3.52l-5.237-7.146L6.062 21H3l7.08-8.8L4.25 3z"/>`,
    },
    // {
    //   name: "YouTube",
    //   href: "https://www.youtube.com/@RunBhumi-t20",
    //   path: `<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>`,
    // },
    {
      name: "WhatsApp",
      href: "https://wa.me/919964391643",
      path: `<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M22 12.21c0 5.64-4.602 10.21-10.274 10.21-1.808 0-3.507-.47-4.973-1.29L2 22l1.338-4.393C2.509 16.077 2 14.19 2 12.21 2 6.57 6.602 2 12.274 2 17.947 2 22 6.57 22 12.21z" />`,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/run-bhumi/",
      path: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />`,
    },
  ];

  return (
    <div className="hidden md:flex fixed top-1/2 right-8 -translate-y-1/2 flex-col gap-3 z-40">
      {socialLinks.map(({ name, href, path }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="group"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-black/95 to-gray-900/95 shadow-md overflow-hidden transition-all duration-300 hover:bg-orange-500 group-hover:scale-110">
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
