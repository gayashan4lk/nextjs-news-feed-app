import { useRouter } from 'next/router';
import Link from 'next/link';
import { apiSearch } from '../api';

export default function News({ results, query }) {
	// const router = useRouter();
	// const { query } = router.query;
	return (
		<>
			<h1>You've searched: "{query}"</h1>
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

export async function getServerSideProps({ params }) {
	const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`;
	const results = await apiSearch(URL);
	return {
		props: {
			results: results,
			query: params.query,
		},
	};
}
