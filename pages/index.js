import Head from "next/head";
import styles from "../styles/Home.module.css";

import NavBar from "../components/NavBar";

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
				<NavBar />
			</header>

			<main className={styles.main}>
				<div id="home"></div>

				<div id="about">
					<h2>About Me</h2>
					<p>Hello there! I'm Erica,</p>
				</div>

				<div id="projects">
					<h2>Featured Projects</h2>

					<h3>Events App</h3>
					<h3>Investments Planner</h3>
					<h3>Story React App</h3>
				</div>

				<div id="contact"></div>

				<div id="blog"></div>
			</main>

			<footer className={styles.footer}>
				<SocialIcons />
			</footer>
		</div>
	);
}
