export default function Header() {
	return (
		<header className='fixed top-0 w-full bg-white shadow p-4 flex justify-between items-center'>
			<div className='font-bold text-xl'>D. Krahenbuhl</div>
			<nav className='space-x-4'>
				<a
					href='#projects'
					className='hover:text-blue-600'
				>
					Projects
				</a>
				<a
					href='#skills'
					className='hover:text-blue-600'
				>
					Skills
				</a>
				<a
					href='#hero'
					className='hover:text-blue-600'
				>
					Home
				</a>
			</nav>
		</header>
	);
}
