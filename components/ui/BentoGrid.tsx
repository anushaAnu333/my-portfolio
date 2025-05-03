
import { cn } from "@/lib/utils";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => (
	<div
		className={cn(
			"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center",
			className
		)}>
		{children}
	</div>
);

// const gradients = [
// 	"bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
// 	"bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300",
// 	"bg-gradient-to-br from-teal-300 via-green-300 to-lime-300",
// 	"bg-gradient-to-br from-red-400 via-pink-400 to-purple-400",
// 	"bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400",
// 	"bg-gradient-to-br from-indigo-400 via-blue-400 to-teal-400",
// ];

// export const BentoGridItem = ({
// 	id,
// 	title,
// 	description,
// 	img,
// 	imgClassName,
// 	spareImg,
// }: {
// 	id: number;
// 	title?: React.ReactNode;
// 	description?: React.ReactNode;
// 	img?: string;
// 	imgClassName?: string;
// 	spareImg?: string;
// }) => {
// 	const gradientClass = gradients[(id - 1) % gradients.length];



// 	return (
// 		<div
// 			className={cn(
// 				`relative h-64 w-64 flex flex-col items-center justify-center rounded-2xl shadow-lg ${gradientClass}`
// 			)}>
		
// 			<h3 className='text-white text-lg font-bold text-center px-2'>{title}</h3>
// 			{description && (
// 				<p className='text-white/80 mt-1 text-sm text-center px-3'>
// 					{description}
// 				</p>
// 			)}
			
// 		</div>
// 	);
// };


// ui/BentoGridItem.tsx
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { BackgroundGradientAnimation } from "./GradientBg";

import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { CanvasRevealEffect } from "./CanvasRevealEffect";

const gradients = [
  "from-pink-500 via-red-500 to-yellow-500",
  "from-green-400 via-teal-400 to-blue-400",
  "from-yellow-300 via-orange-300 to-pink-300",
  "from-teal-300 via-green-300 to-lime-300",
  "from-red-400 via-pink-400 to-purple-400",
  "from-blue-400 via-purple-400 to-pink-400",
  "from-indigo-400 via-blue-400 to-teal-400",
];

export const BentoGridItem = ({
  id,
  title,
  description,
  img,
  imgClassName,
  spareImg,
}: {
  id: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
}) => {
  const gradientClass = gradients[(id - 1) % gradients.length];
  const [copied, setCopied] = useState(false);
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };
  const handleCopy = () => {
    navigator.clipboard.writeText("anusha@neokred.tech");
    setCopied(true);
  };

  return (
		<div
			className={cn(
				`group relative h-64 w-64 flex flex-col items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br ${gradientClass}`
			)}>
			<CanvasRevealEffect
				animationSpeed={2}
				containerClassName='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity bg-red-900'
				colors={[
					[255, 192, 203],
					[218, 112, 214],
					[124, 58, 237],
				]}
			/>
			{img && (
				<img
					src={img}
					alt=''
					className={cn(imgClassName, "w-16 h-16 mb-4 object-contain z-10")}
				/>
			)}
			<h3 className='z-10 text-white text-lg font-bold text-center px-2'>
				{title}
			</h3>
			{description && (
				<p className='z-10 text-white/80 mt-1 text-sm text-center px-3'>
					{description}
				</p>
			)}
		</div>
	);
};