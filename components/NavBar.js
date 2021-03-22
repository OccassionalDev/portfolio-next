export default function NavBar() {
	return (
		<>
			<header>
				<nav>
					<a className="nav-logo" href="#home">
						Erica Schimmel
					</a>

					<ul className="nav-bar-list">
						<li>
							<a className="nav-link" href="#home">
								Home
							</a>
						</li>

						<li>
							<a className="nav-link" href="#about">
								About Me
							</a>
						</li>

						<li>
							<a className="nav-link" href="#projects">
								Projects
							</a>
						</li>

						<li>
							<a className="nav-link" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
