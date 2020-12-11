import Head from "next/head";
import styles from "../styles/Home.module.css";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
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
					<FontAwesomeIcon icon={faGithub} fixedWidth />
					<FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
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

				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={styles.description}>
					Get started by editing{" "}
					<code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className={styles.card}
					>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<FontAwesomeIcon icon={faGithub} fixedWidth />
				<FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
			</footer>
		</div>
	);
}
