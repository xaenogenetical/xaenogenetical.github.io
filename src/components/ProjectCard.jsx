import completeImg from "../assets/complete.png";
import wipImg from "../assets/wip.png";

export default function ProjectCard({ project }) {
	return (
		<div className='border rounded-lg p-6 shadow hover:shadow-lg transition bg-white flex flex-col'>
			<div className='flex'>
				<h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>
				<img
					src={project.complete ? completeImg : wipImg}
					alt={project.complete ? "Complete Project" : "Work in Progress"}
					className='max-w-20 ml-auto'
				/>
			</div>
			<p className='text-gray-700 mb-4'>{project.description}</p>
			<div className='flex flex-col justify-end h-full'>
				<a
					href={project.github}
					target='_blank'
					className='text-blue-600 hover:underline'
				>
					GitHub Repo
				</a>
			</div>
		</div>
	);
}
