"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, FC, Key } from "react";
import { JSX } from "react/jsx-runtime";
import { squareData } from "@/lib/squaredata";
import { shuffleArray } from "@/utils/data";

// Type for JSX element
type SquareElement = JSX.Element;

const generateSquares = (): SquareElement[] => {
    return shuffleArray(squareData).map((sq: { id: Key | null | undefined; src: any; }) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid: FC = () => {
    // Type the timeout ref properly
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [squares, setSquares] = useState<SquareElement[]>(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const shuffleSquares = (): void => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default ShuffleGrid;