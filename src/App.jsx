import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import AboutMe from "./components/AboutMe";
import pfp from "./assets/PROFILEPFP.jpg";
import React from "react";
function App() {
	const [page, setPage] = React.useState("home");
	const projects = [
		{
			title: "Encryption/Decryption System",
			description:
				"Homemade encryption algorithm built in C++. Extra credit project for one of my classes",
			github: "https://github.com/xaenogenetical/encryption-project",
			complete: true,
		},
		{
			title: "Pokemon C++ Version",
			description:
				"In progress project attempting to recreate Pokemon Red Version in C++, displaying through the Linux bash terminal using Unicode & ANSI.",
			github: "https://github.com/xaenogenetical/PKMN",
			complete: false,
		},
		{
			title: "Portfolio",
			description:
				"React + Vite + Tailwind web app rendering the very page you are looking at right now.",
			github: "https://github.com/xaenogenetical/xaenogenetical.github.io",
			complete: true,
		},
		{
			title: "Conjugation Machine",
			description:
				"One of my first independent projects, designed to help my girlfriend with conjugations of spanish verbs. Also experiments with using JFrame for Java desktop frontend",
			github: "https://github.com/xaenogenetical/ConjugationMachine",
			complete: false,
		},
		{
			title: "327 Roguelike",
			description:
				"A fairly bare-bones roguelike game, similar to the original Rogue. Written in C++ (converted from C)",
			github: "https://github.com/xaenogenetical/327Roguelike",
			complete: true,
		},
		{
			title: "Wordsearch",
			description: "My first ever project in C, a simple word search generator",
			github: "https://github.com/xaenogenetical/wordsearch",
			complete: true,
		},
		{
			title: "CyChat",
			description:
				"An android app + Java Spring Boot backend for a group project",
			github: "https://github.com/xaenogenetical/cychat_backend",
			complete: false,
		},
	];

	const skills = [
		"C",
		"C++",
		"Java",
		"Java Spring Boot",
		"Python",
		"JavaScript",
		"ReactJS",
		"Linux",
		"SQL",
		"Git",
		"Github/Gitlab",
		"LEGv8 Assembly",
		"HTML",
		"CSS",
	];

	return (
		<div className='font-sans text-gray-900 w-screen'>
			<Header setPage={setPage} />
			{page === "home" && (
				<>
					<section
						id='hero'
						className='min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-white'
					>
						<img
							src={pfp}
							alt='Headshot'
							className='rounded-3xl'
						></img>
						<h1 className='text-5xl font-bold mb-4'>Dylan Krahenbuhl</h1>
						<p className='text-xl text-gray-700 mb-6'>Full Stack Developer</p>
						<div className='flex space-x-4'>
							<a
								href='#projects'
								className='btn-primary'
							>
								View Projects
							</a>
							<a
								href='mailto:dakrahenbuhl2006@gmail.com'
								className='btn-secondary'
							>
								Contact Me
							</a>
						</div>
					</section>

					<section
						id='projects'
						className='py-20 px-10 bg-gray-400'
					>
						<h2 className='text-4xl font-bold mb-10 text-center'>Projects</h2>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
							{projects.map((proj) => (
								<ProjectCard
									key={proj.title}
									project={proj}
								/>
							))}
						</div>
					</section>

					<section
						id='skills'
						className='py-20 px-10 bg-gray-100'
					>
						<h2 className='text-4xl font-bold mb-10 text-center'>Skills</h2>
						<div className='flex flex-wrap justify-center gap-4'>
							{skills.map((skill) => (
								<SkillBadge
									key={skill}
									skill={skill}
								/>
							))}
						</div>
					</section>
				</>
			)}
			{page === "about" && <AboutMe />}
			<Footer />
		</div>
	);
}

export default App;
