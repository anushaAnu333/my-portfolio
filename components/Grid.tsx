
import React from "react";
import { BentoGrid } from "./ui/BentoGrid";
import { BentoGridItem } from "./ui/BentoGrid";

const gridItems = [
	{
		id: 1,
		title: "User-Centered Design",
		description:
			"Crafting interfaces that prioritize real user needs, accessibility, and seamless interactions.",
	},
	{
		id: 2,
		title: "Time Zone Flexibility",
		description:
			"Collaborating across global teams with reliable handoffs, asynchronous workflows, and 24/7 support.",
	},
	{
		id: 3,
		title: "Tech Stack Mastery",
		description:
			"Building scalable apps with React, Next.js, TypeScript, GraphQL, and modern state management.",
	},
	{
		id: 4,
		title: "Passionate Frontend Dev",
		description:
			"Implementing pixel-perfect designs using Tailwind CSS, Styled Components, and CSS Modules.",
	},
	{
		id: 5,
		title: "Animations & Interaction",
		description:
			"Enhancing UX with Framer Motion, Lottie, and custom CSS keyframe animations.",
	},
	{
		id: 6,
		title: "Let’s Build Together",
		description:
			"Turn ideas into reality—reach out to start your next frontend project with me.",
	},
];

const Grid = () => (
	<section id='about' className='py-20'>
		<BentoGrid>
			{gridItems.map((item) => (
				<BentoGridItem
					key={item.id}
					id={item.id}
					title={item.title}
					description={item.description}
				/>
			))}
		</BentoGrid>
	</section>
);

export default Grid;