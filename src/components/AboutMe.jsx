import PROFILEPFP from "../assets/PROFILEPFP.jpg";

export default function AboutMe() {
	return (
		<section
			id='about'
			className='min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 px-8 py-20'
		>
			<div className='w-full text-center'>
				<img
					src={PROFILEPFP}
					alt='Profile'
					className='w-40 h-40 rounded-full mx-auto mb-6 shadow-lg object-cover'
				/>

				<h1 className='text-4xl font-bold mb-4'>About Me</h1>
				<p className='text-lg text-gray-700 leading-relaxed mb-8'>
					Hi, I'm <span className='font-semibold'>Dylan Krahenbuhl</span>, a
					passionate developer focused on crafting efficient, clean, and
					creative solutions. I love working across the full stack, from
					system-level C programs to React-based frontends like this website.
				</p>

				<p className='text-lg text-gray-700 leading-relaxed mb-8'>
					I am currently studying Software Engineering at Iowa State University.
					I'm interested in all aspects of tech, from low-level interactions
					between software and hardware, all the way up to dynamic and elegant
					user interfaces. My favorite languages to write are:
				</p>
				<div className='flex'>
					<ol className='list-decimal list-inside text-left mx-auto'>
						<li>C++</li>
						<li>Java</li>
						<li>C</li>
						<li>Assembly (Particularly LEGv8)</li>
						<li>SQL</li>
						<li>JavaScript</li>
					</ol>
				</div>
				<br />
				<p className='text-lg text-gray-700 leading-relaxed mb-8'>
					I have a special love for automation, and I am a big fan of games such
					as{" "}
					<a
						href='https://www.factorio.com'
						target='_blank'
					>
						Factorio
					</a>{" "}
					and{" "}
					<a
						href='https://satisfactorygame.com'
						target='_blank'
					>
						Satisfactory
					</a>
					{}. As such, I am a very big fan of writing bash scripts to assist me
					in doing repetitive or menial tasks. If you look at some of my C/C++
					projects, you will see{" "}
					<code className='bg-gray-600 rounded-md px-1 text-white'>
						c-zipper.sh
					</code>
					{}, which automates the process of compressing my files into a tar
					archive as was required by the class I created them for.
				</p>
			</div>
		</section>
	);
}
