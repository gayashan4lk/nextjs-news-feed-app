import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
	const [query, setQuery] = useState();
	const router = useRouter();
	const handleOnChange = (e) => setQuery(e.target.value);
	const handleOnSubmit = (e) => {
		e.preventDefault();
		router.push(`/news/${query}`);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href='https://nextjs.org'>Next.js!</a>
				</h1>

				<p className={styles.description}>
					Learn coding by doing{' '}
					<code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					<Link href='/learn/nextjs' className={styles.card}>
						<h2>NextJs &rarr;</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</Link>

					<Link href='/learn/react' className={styles.card}>
						<h2>React &rarr;</h2>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</Link>

					<Link href='/learn/vue' className={styles.card}>
						<h2>Vue &rarr;</h2>
						<p>Learn Vue.js in an interactive course with quizzes!</p>
					</Link>

					<Link href='/learn/angular' className={styles.card}>
						<h2>Angular &rarr;</h2>
						<p>Learn Angular in an interactive course with quizzes!</p>
					</Link>

					<Link href='/contacts' className={styles.card}>
						<h2>Challenge 01 &rarr;</h2>
						<p>This challenge is about dynamic routing.</p>
					</Link>

					<Link href='/news' className={styles.card}>
						<h2>Top Stories &rarr;</h2>
						<p>Read top articles of New York Times.</p>
					</Link>

					<div className={styles.card}>
						<h2>Search Stories &rarr;</h2>
						<p>Search news categories.</p>
						<form onSubmit={handleOnSubmit}>
							<input type='text' onChange={handleOnChange} />
							<input type='submit' value='Search' />
						</form>
					</div>
				</div>
			</main>

			<footer className={styles.footer}>
				Powered by{' '}
				<span className={styles.logo}>
					<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
				</span>
			</footer>
		</div>
	);
}
