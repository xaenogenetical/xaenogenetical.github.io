export default function Header({ setPage }) {
	return (
		<header className='fixed top-0 w-full bg-white shadow p-4 flex justify-between items-center'>
			<div className='font-bold text-xl'>D. Krahenbuhl</div>
			<nav className='space-x-4'>
				<a
					href='#'
					className=''
					onClick={() => {
						setPage("about");
					}}
				>
					About Me
				</a>
				<a
					href='#hero'
					className='hover:text-blue-600'
					onClick={() => {
						setPage("home");
					}}
				>
					Home
				</a>
			</nav>
		</header>
	);
}
