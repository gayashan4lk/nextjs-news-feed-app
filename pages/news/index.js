import Link from 'next/link';
import { apiHandler } from '../api';

export default function News({ results }) {
	return (
		<>
			<h1>Top Stories</h1>
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

const API_KEY = 'dzvOipA1Em2L0Ga2yYmpy4cLX3EAkvDZ';

export async function getStaticProps() {
	const URL = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${API_KEY}`;
	const results = await apiHandler(URL);

	return {
		props: {
			results: results,
		},
	};
}
