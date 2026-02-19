import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import truckImg from '@/assets/mytruck.png';

const ScrollPathAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress across the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Snappier, ultra-responsive settings
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // The central path definition
    // ViewBox units: 1000h x 10000v
    const path = "M 500,0 " +
        "C 800,500 200,1000 200,1500 " +
        "C 200,2000 800,2500 800,3000 " +
        "C 800,3500 200,4000 200,4500 " +
        "C 200,5000 800,5500 800,6000 " +
        "C 800,6500 200,7000 200,7500 " +
        "C 200,8000 800,8500 800,9000 " +
        "C 800,9500 500,10000 500,10000";

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ height: '100%' }}
        >
            <svg
                viewBox="0 0 1000 10000"
                preserveAspectRatio="none"
                className="w-full h-full overflow-visible"
            >
                {/* Road Background - Light glow */}
                <motion.path
                    d={path}
                    fill="transparent"
                    stroke="hsl(var(--primary))"
                    strokeWidth="40"
                    className="opacity-5"
                    style={{ pathLength: smoothProgress }}
                />

                {/* Road Effect: Dual Parallel Lines */}
                <motion.path
                    d={path}
                    fill="transparent"
                    stroke="hsl(var(--primary))"
                    strokeWidth="10"
                    className="opacity-40"
                    strokeDasharray="40 30"
                    style={{
                        pathLength: smoothProgress,
                        transform: 'translateX(-25px)'
                    }}
                />
                <motion.path
                    d={path}
                    fill="transparent"
                    stroke="hsl(var(--primary))"
                    strokeWidth="10"
                    className="opacity-40"
                    strokeDasharray="40 30"
                    style={{
                        pathLength: smoothProgress,
                        transform: 'translateX(25px)'
                    }}
                />

                {/* The Truck - Now inside the SVG coordinate system */}
                <motion.g
                    style={{
                        offsetPath: `path('${path}')`,
                        offsetDistance: useTransform(smoothProgress, [0, 1], ['0%', '100%']),
                        offsetRotate: 'auto 90deg',
                    }}
                >
                    {/* Using foreignObject to render the PNG correctly inside SVG with filters */}
                    <foreignObject x="-100" y="-100" width="200" height="200">
                        <div className="w-full h-full flex items-center justify-center">
                            <img
                                src={truckImg}
                                alt="Moving Truck"
                                className="w-40 h-40 object-contain "
                                style={{ transform: 'rotate(180deg)' }}
                            />
                        </div>
                    </foreignObject>
                </motion.g>
            </svg>
        </div>
    );
};

export default ScrollPathAnimation;
