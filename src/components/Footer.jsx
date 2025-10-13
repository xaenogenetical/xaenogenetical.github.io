export default function Footer() {
	return (
		<footer className='bg-gray-900 text-white text-center py-6'>
			<p>© 2025 Dylan Krahenbuhl</p>
			<div className='flex justify-center space-x-6 mt-3'>
				<a
					href='mailto:dakrahenbuhl2006@gmail.com'
					className='hover:underline'
				>
					Email
				</a>
				<a
					href='https://github.com/xaenogenetical'
					className='hover:underline'
				>
					GitHub
				</a>
				<a
					href='https://www.linkedin.com/in/dkrahenbuhl'
					className='hover:underline'
				>
					LinkedIn
				</a>
				<a
					href='src/assets/Dylan-Krahenbuhl-Resume.pdf'
					download
				>
					Download Resume
				</a>
			</div>
		</footer>
	);
}
