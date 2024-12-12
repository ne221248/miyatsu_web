import { Button } from "@/components/ui/button";
import React from "react";

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      };
    

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 bg-gray-900 text-white mix-blend-difference">
            <ul className="flex">
                <li className="text-sm font-medium z-[101]">
                    <a href="/" className="block px-8 py-2  hover:bg-gray-600 rounded">
                        MIYATSU PROJECT WEB SITE
                    </a>
                </li>
            </ul>
            {/* <span className="text-sm font-medium z-[101]">MIYATSU PROJECT WEB SITE</span> */}
            <div className="flex items-center gap-4">
                {/* 左側のボタン（Zロゴ） */}
                <Button variant="ghost" size="icon">
                    <a href="https://senshu-z.vercel.app/sign-in">
                        <img src="bg/Z.png" alt="logo" className="h-5 w-5" />
                    </a>
                </Button>

                {/* ハンバーガーメニュー トグルボタン */}
                <Button variant="ghost" size="icon" onClick={toggleMenu} className="focus:outline-none">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d={
                            isOpen
                                ? "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                                : "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
                        } />
                    </svg>
                </Button>

                {/* スライドイン・スライドアウトするメニュー */}
                <div className={`fixed top-0 right-0 h-full bg-gray-900 text-white 
                                 transition-transform duration-300 transform z-50
                                 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    {/* メニューの上部に閉じるボタンを設置 */}
                    <div className="flex justify-end p-4 border-b border-gray-700">
                        <Button variant="ghost" size="icon" onClick={closeMenu}>
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path d="M18.3 5.7a1 1 0 0 0-1.4-1.4L12 9.2 7.1 4.3a1 1 0 0 0-1.4 1.4L10.8 12l-5 5a1 1 0 1 0 1.4 1.4l5-5 5 5a1 1 0 0 0 1.4-1.4l-5-5 5-5z" />
                            </svg>
                        </Button>
                    </div>

                    <ul className="flex flex-col items-end p-4">
                        <li className="border-b border-gray-700 w-full">
                            <a href="#about" className="block px-8 py-2 my-4 hover:bg-gray-600 rounded" onClick={(e) => handleScroll(e, "about")}>
                                About
                            </a>
                        </li>
                        <li className="border-b border-gray-700 w-full">
                            <a href="#movie" className="block px-8 py-2 my-4 hover:bg-gray-600 rounded" onClick={(e) => handleScroll(e, "movie")}>
                                Movie
                            </a>
                        </li>
                        <li className="border-b border-gray-700 w-full">
                            <a href="#member" className="block px-8 py-2 my-4 hover:bg-gray-600 rounded" onClick={(e) => handleScroll(e, "member")}>
                                Member
                            </a>
                        </li>
                        <li className="border-b border-gray-700 w-full">
                            <a href="#ActiveLog" className="block px-8 py-2 my-4 hover:bg-gray-600 rounded" onClick={(e) => handleScroll(e, "ActiveLog")}>
                                ActiveLog
                            </a>
                        </li>
                        <li className="border-b border-gray-700 w-full">
                            <a href="#contact" className="block px-8 py-2 my-4 hover:bg-gray-600 rounded" onClick={(e) => handleScroll(e, "contact")}>
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
