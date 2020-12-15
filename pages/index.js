import Head from "next/head";
import styles from "../styles/Home.module.css";

import SocialIcons from "../components/SocialIcons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Erica Schimmel</title>
			</Head>

			<header>
				<a href="#home">Erica Schimmel</a>

				<nav>
					<ul>
						<a href="#about">About</a>
						<a href="#projects">Projects</a>
						<a href="#contact">Contact</a>
					</ul>
				</nav>
			</header>

			<main className={styles.main}>
				<div id="home"></div>

				<div id="about">
					<SocialIcons />
				</div>

				<div id="projects"></div>

				<div id="contact">
					<h1>
						<FontAwesomeIcon icon={faEnvelope} fixedWidth /> Let's start working
						together.
					</h1>

					<form>
						<label>Name</label>
						<br />
						<input type="text" />
						<br />

						<label>Email</label>
						<br />
						<input type="email" />
						<br />

						<label>Message</label>
						<br />
						<textarea />
						<br />

						<input type="submit" value="Send" />
					</form>
				</div>
			</main>

			<footer className={styles.footer}>
				<SocialIcons />
			</footer>
		</div>
	);
}
