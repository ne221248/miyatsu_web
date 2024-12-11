import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { isMobile } from "react-device-detect";

const FlickerText: React.FC<{ text: string; className?: string }> = ({
    text,
    className = "",
  }) => {
    return (
      <div className={`flex flex-wrap justify-start gap-2 ${className}`}>
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: index * 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    );
};

const TitleText: React.FC = () => {

    const [isClientMobile, setIsClientMobile] = useState(false); //スマホ判定関数

    useEffect(() => {
        setIsClientMobile(isMobile);
    }, []);

    return (
        <div>
            {isClientMobile ? (  //スマホ表示画面
                <section className="h-screen relative flex justify-start p-8">
                {/* <div className="absolute inset-0 bg-black/40" /> */}
                {/* <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                    backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
                    }}
                /> */}
                <div className="relative z-10 text-left animate-slide-right">
                    <div className="mb-2 text-lg tracking-wider mt-96">
                    MIYATSU PROJECT 2024
                    </div>
                    <FlickerText
                    text="SENSHU-Z"
                    className="text-[10vw] font-bold mb-2 leading-none"
                    />
                    <div className="text-lg">無限に広がるXの先へ。</div>
                </div>
                </section>
            ) : ( //pc表示画面
                <section className="h-screen relative flex items-end justify-start p-8">
                {/* <div className="absolute inset-0 bg-black/40" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                    backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
                    }}
                /> */}
                <div className="relative z-10 text-left ">
                    <div className="mb-2 text-lg tracking-wider">
                    MIYATSU PROJECT 2024
                    </div>
                    <FlickerText
                    text="SENSHU-Z"
                    className="text-[10vw] font-bold mb-2 leading-none"
                    />
                    <div className="text-lg">無限に広がるXの先へ。</div>
                </div>
                </section>
            )}  
        </div>
    );
};


const Title: React.FC = () => {

    const screenRef = useRef<HTMLDivElement>(null);// アニメーションさせたい要素の ref

    const inView = useInView(screenRef, { once: true }); // 要素が表示されたかを監視

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } },
      };
    
    // 'animate-slide-right' クラスを条件付きで適用
    const screenClassName = `${inView ? "animate-slide-right" : ""}`;

    return (
        <motion.div
            ref={screenRef} // ref を設定
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // inView に基づいてアニメーションを制御
            variants={fadeIn}
            className={screenClassName} // 修正したクラス名を適用
        >
            <TitleText/>
        </motion.div>
    );
};

export {Title};