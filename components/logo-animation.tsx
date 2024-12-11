import React, { useEffect, useRef } from 'react';

const LogoAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext('2d');
        if (!context) return;

        const image = new Image();
        image.src = '/bg/Z.png';

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const imageWidth = 120; // Adjust the size as needed
        const imageHeight = 100;

        let x = Math.random() * (canvas.width - imageWidth);
        let y = Math.random() * (canvas.height - imageHeight);
        let dx = 3;
        let dy = 3;

        const animate = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, x, y, imageWidth, imageHeight);

            if (x + dx > canvas.width - imageWidth || x + dx < 0) {
                dx = -dx;
            }
            if (y + dy > canvas.height - imageHeight || y + dy < 0) {
                dy = -dy;
            }

            x += dx;
            y += dy;

            requestAnimationFrame(animate);
        };

        image.onload = () => {
            animate();
        };

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // 背景として他の要素の背後に配置
                pointerEvents: 'none', // 背景に対するマウスイベントを無効化
            }}
            onScroll={(e) => e.preventDefault()} // スクロールイベントを無効化
        />;
};

export default LogoAnimation;