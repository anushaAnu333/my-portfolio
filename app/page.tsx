"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import TechStackPage from "@/components/TechStackPage";

const Home = () => {
  return (
		<main
			className='  text-white  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'
			style={{
				background: "linear-gradient(to right, #000428, #004e92)",
			}}>
			<FloatingNav navItems={navItems} />
			<div className='max-w-7xl w-full '>
				<Hero />
				<Grid />
				<TechStackPage />
				<RecentProjects />
				{/* <Clients /> */}
				{/* <Experience /> */}
				{/* <Approach /> */}
				<Footer />
			</div>
		</main>
	);
};

export default Home;
