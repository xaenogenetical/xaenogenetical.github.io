export default function ProjectCard({ project }) {
	return (
		<div className='border rounded-lg p-6 shadow hover:shadow-lg transition bg-white'>
			<div className='flex'>
				<h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>
				<img
					src={
						project.complete ? "src/assets/complete.png" : "src/assets/wip.png"
					}
					alt='Complete Project'
					className='max-w-20 ml-auto'
				></img>
			</div>
			<p className='text-gray-700 mb-4'>{project.description}</p>
			<a
				href={project.github}
				target='_blank'
				className='text-blue-600 hover:underline'
			>
				GitHub Repo
			</a>
		</div>
	);
}
