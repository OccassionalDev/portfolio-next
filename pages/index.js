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
						<a href="#about">About</a>
						<a href="#projects">Projects</a>
						<a href="#contact">Contact</a>
						{/* <a href="#blog">Blog</a> */}
					</ul>
				</nav>
			</header>

			<main className={styles.main}>
				<div id="home"></div>

				<div id="about">
					<SocialIcons />
				</div>

				<div id="projects">
					<h1>Featured Projects</h1>
				</div>

				<div id="contact">
					<h1>Let's start working together.</h1>

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
