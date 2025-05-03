"use client";

import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "@/data";

const RecentProjects = () => (
	<div className='py-20 ' id='projects'>
		<h1 className='heading text-center mb-10'>
			A small selection of <span className='text-purple'>recent projects</span>
		</h1>
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-12'>
			{projects.map((item) => (
				<div
					key={item.id}
					className=' dark:bg-gray-800 p-6 rounded-2xl shadow-md'>
					<a href={item.liveDemo} target='_blank' rel='noopener noreferrer'>
						<div className='relative w-full h-48 overflow-hidden rounded-xl mb-4'>
							<img
								src={item.img}
								alt={item.title}
								className='object-cover w-full h-full'
							/>
						</div>
					</a>
					<h2 className='font-bold text-xl mb-2 text-white -900 dark:text-white -100'>
						{item.title}
					</h2>
					<div className='flex items-center justify-between mt-4'>
						<div className='flex -space-x-2'>
							{item.iconLists.map((icon, idx) => (
								<div
									key={idx}
									className='w-8 h-8 p-1 bg-black dark:bg-gray-700 rounded-full flex items-center justify-center'>
									<img
										src={icon}
										alt=''
										className='w-full h-full object-contain'
									/>
								</div>
							))}
						</div>
						<div className='flex space-x-4'>
							<a
								href={item.liveDemo}
								target='_blank'
								rel='noopener noreferrer'
								className='text-purple font-medium'>
								<FaExternalLinkAlt className='inline ml-1' />
							</a>
							<a
								href={item.github}
								target='_blank'
								rel='noopener noreferrer'
								className='text-purple font-medium'>
								<FaGithub className='inline ml-1' />
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
);

export default RecentProjects;
