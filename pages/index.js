import Head from "next/head";
import styles from "../styles/Home.module.css";

import SocialIcons from "../components/SocialIcons";
import EmailForm from "../components/EmailForm";
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
						<a href="#about">About Me</a>
						<a href="#projects">Projects</a>
						<a href="#contact">Contact</a>
						{/* <a href="#blog">Blog</a> */}
					</ul>
				</nav>
			</header>

			<main className={styles.main}>
				<div id="home"></div>

				<div id="about">
					<h2>About Me</h2>
					<SocialIcons />
				</div>

				<div id="projects">
					<h2>Featured Projects</h2>
				</div>

				<div id="contact">
					<h2>Let's start working together.</h2>

					<EmailForm />
				</div>

				<div id="blog"></div>
			</main>

			<footer className={styles.footer}>
				<SocialIcons />
			</footer>
		</div>
	);
}
