import Link from 'next/link';
import links from '../api/links';
import { apiHandler } from '../api';

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { path: links[0].path } },
			{ params: { path: links[1].path } },
		],
		fallback: false,
	};
}

const API_KEY = 'dzvOipA1Em2L0Ga2yYmpy4cLX3EAkvDZ';

export async function getStaticProps({ params }) {
	const TOP_STORIES_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
	const POPULAR_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;

	switch (params.path) {
		case 'top-stories':
			return {
				props: {
					results: await apiHandler(TOP_STORIES_URL),
					title: 'Top Stories',
				},
			};

		case 'popular':
			return {
				props: {
					results: await apiHandler(POPULAR_URL),
					title: 'Popular',
				},
			};

		default:
			return {
				props: null,
			};
	}
}

export default function News({ results, title }) {
	return (
		<>
			<h1>{title}</h1>
			<ul>
				{results.map((result) => (
					<li key={result.uri}>
						<a href={result.url} target='_blank' rel='noopener norefferer'>
							{result.title}
						</a>
					</li>
				))}
			</ul>
			<Link href={'/'}>Go to Home</Link>
		</>
	);
}
