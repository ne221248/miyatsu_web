import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const LogoLink: React.FC = () => {

    // const [isClientMobile, setIsClientMobile] = useState(false); //スマホ判定関数

    // useEffect(() => {
    //     setIsClientMobile(isMobile);
    // }, []);

    const screenRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null); // アニメーションさせたい要素の ref
    const inView = useInView(logoRef, { once: true }); // 要素が表示されたかを監視

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } },
      };
    
    // 'animate-slide-top' クラスを条件付きで適用
    const logoClassName = `${inView ? "animate-slide-top" : ""}`;

    return (
        <div
            ref={screenRef}
        >
            <div className="mt-20"></div>
            <motion.div
                ref={logoRef} // ref を設定
                initial="hidden"
                animate={inView ? "visible" : "hidden"} // inView に基づいてアニメーションを制御
                variants={fadeIn}
                className={logoClassName} // 修正したクラス名を適用
            >
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white">Contact Us</h2>

                    <div className="flex justify-center mt-10">
                        <a
                            href="https://github.com/ne221248/miyatsu_web"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mx-7"
                        >
                            {/* eslint-disable @typescript-eslint/no-unused-vars */}
                            <img
                                src="/bg/github-mark-white.svg"
                                alt="GitHub"
                                className="rounded object-contain m-auto"
                            />
                            {/* eslint-disable @typescript-eslint/no-unused-vars  */}
                            <p className="font-serif mt-4">Git Hub</p>
                        </a>
                        <a
                            href="https://www.instagram.com/miyatsu_project.2024/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mx-7"
                        >
                            {/* eslint-disable react-hooks/rules-of-hooks  */}
                            <img
                                src="/bg/instagram-2022.svg"
                                alt="Instagram"
                                className="rounded object-contain size-24 m-auto"
                            />
                            {/* eslint-disable @typescript-eslint/no-unused-vars  */}
                            <p className="font-serif mt-4">Instagram</p>
                        </a>
                    </div>
                </div>
            </motion.div>
            <div className="mt-20"></div>
        </div>
    );
};