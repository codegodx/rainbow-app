"use client"

import { motion } from "@repo/ui/fm";
import React from "react";
import { pressStart } from "../../config/fonts";

export function PixelLoaders() {
    return (
        <div className="godx-w-full godx-h-screen godx-fixed godx-bg-black godx-z-[5000000] godx-fill-slate-50 godx-flex">
            <div className="godx-w-full godx-h-full godx-flex godx-justify-center godx-items-center">
                <div className={`godx-flex ${pressStart.className}`}>
                    {textclips.map((item, index) => (
                        <motion.h2
                            initial={{ x: -20 }}
                            animate={{ x: 20 }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                repeatType: "reverse",
                                delay: index * 0.1, // Add delay based on index
                            }}
                            key={index}
                            className={item.className}
                        >
                            {item.Text}
                        </motion.h2>
                    ))}
                </div>
            </div>
        </div>
    );
}



const textclips = [
    {
        Text: "L",
        className: "godx-text-4xl godx-font-bold godx-text-cyan-500",
    },
    {
        Text: "o",
        className: "godx-text-4xl godx-font-bold godx-text-yellow-500",
    },

    {
        Text: "a",
        className: "godx-text-4xl godx-font-bold godx-text-orange-500",
    },
    {
        Text: "d",
        className: "godx-text-4xl godx-font-bold godx-text-violet-500",
    },
    {
        Text: "i",
        className: "godx-text-4xl godx-font-bold godx-text-purple-500",
    },
    {
        Text: "n",
        className: "godx-text-4xl godx-font-bold godx-text-fuchsia-500",
    },
    {
        Text: "g",
        className: "godx-text-4xl godx-font-bold godx-text-blue-500",
    },
];
