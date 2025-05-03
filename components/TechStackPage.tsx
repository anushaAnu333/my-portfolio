import React from "react";

const techCategories = [
	{
		title: "Frontend",
		items: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"React Query",
			"Material UI",
			"Chakra UI",
			"React Native",
		],
		gradient: "from-blue-400 via-indigo-500 to-teal-500",
		shineColors: [
			[200, 200, 255],
			[255, 255, 255],
		],
	},
	{
		title: "Backend & APIs",
		items: [
			"Node.js",
			"Express",
			"Fastify",
			"Firebase",
			"GraphQL",
			"REST APIs",
		],
		gradient: "from-green-400 via-teal-500 to-blue-500",
		shineColors: [
			[200, 255, 200],
			[255, 255, 255],
		],
	},
	{
		title: "Databases & Messaging",
		items: ["MongoDB", "Redis", "Kafka", "gRPC"],
		gradient: "from-teal-400 via-blue-500 to-white-500",
		shineColors: [
			[255, 230, 200],
			[255, 255, 255],
		],
	},
];

const TechStackPage = () => (
	<section id='techstacks' className='w-full py-20 '>
		<h2 className='text-4xl font-bold text-center mb-12 text-white'>
			My Tech Stack by Category
		</h2>
		<div className='p-6 mx-auto space-y-12 '>
			{techCategories.map((cat) => (
				<div key={cat.title}>
					<h3 className='text-2xl font-semibold mb-6 text-white'>
						{cat.title}
					</h3>
					<div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8'>
						{cat.items.map((tech) => (
							<div key={tech} className='relative group h-16'>
								<div
									className={`relative flex items-center justify-center h-16 bg-gradient-to-r ${cat.gradient} text-white font-semibold rounded-xl shadow-lg transform transition group-hover:scale-105 cursor-pointer`}>
									{tech}
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	</section>
);

export default TechStackPage;
