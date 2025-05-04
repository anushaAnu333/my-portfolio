
"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
 
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (scrollYProgress.get() < 0.05) setVisible(true);
    else setVisible(current - scrollYProgress.getPrevious()! < 0);
  });

  return (
		<AnimatePresence>
			{visible && (
				<motion.nav
					initial={{ y: -80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -80, opacity: 0 }}
					transition={{ duration: 0.3 }}
					className={
						"fixed top-4 inset-x-0 mx-auto max-w-3xl px-4 py-3 bg-white/20 dark:bg-gray-800/60 backdrop-blur-lg rounded-full shadow-lg flex justify-around items-center "
					}>
					{navItems.map((item, idx) => (
						<Link
							key={idx}
							href={item.link}
							className='flex flex-col items-center space-y-1 text-sm text-white hover:text-white/80 transition'>
							<span>{item.name}</span>
						</Link>
					))}
				</motion.nav>
			)}
		</AnimatePresence>
	);
};