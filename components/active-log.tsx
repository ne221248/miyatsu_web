import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";


const ActiveLog: React.FC = () => {

    // スマホ判定関数
    const [isClientMobile, setIsClientMobile] = useState(false);

    useEffect(() => {
        setIsClientMobile(isMobile);
    }, []);

    return (
        <div>
            {isClientMobile ? ( //スマホ表示画面
                <section className="h-screen flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Explore the Active Log
                    </h2>
                    <div className="relative w-5/6 h-4/5 rounded-lg overflow-hidden">
                        {/* eslint-disable @typescript-eslint/no-unused-vars */}
                        <img
                            src="./bg/active-log.png"
                            alt="Active Log"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        {/* eslint-disable @typescript-eslint/no-unused-vars */}
                        <a
                            href="https://docs.craft.do/editor/d/df78fd0b-f354-f962-1d12-144f3b47b3b9/439C1F1E-A738-4A91-81AE-4CF64611FE83?s=W6NcAP3oXvgQ6sRHVTGgo9NTS6iJx66KbpZUh6uBGdhi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-1xl font-bold rounded-lg"
                        >
                            ※スマホの方はこちらをタップ
                        </a>
                    </div>
                </section>
            ) : ( //pc表示画面
                <div>
                    <motion.section className="h-screen flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Explore the Active Log
                        </h2>
                        <iframe
                            src="https://docs.craft.do/editor/d/df78fd0b-f354-f962-1d12-144f3b47b3b9/439C1F1E-A738-4A91-81AE-4CF64611FE83?s=W6NcAP3oXvgQ6sRHVTGgo9NTS6iJx66KbpZUh6uBGdhi"
                            title="Craft Embed"
                            className="w-[90%] h-[70vh] border-2 border-white rounded-lg md:w-[70%] md:h-[100vh]"
                        ></iframe>
                    </motion.section>
                    <div className="mt-8"></div>
                </div>
            )}
        </div>
    );
};

export {ActiveLog};