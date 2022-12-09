import Link from 'next/link';

export default function News() {
	return (
		<>
			<h1>Top Stories</h1>
			<Link href={'/'}>Go to Home</Link>
		</>
	);
}

const API_KEY = 'dzvOipA1Em2L0Ga2yYmpy4cLX3EAkvDZ';

export async function getStaticProps() {
	return {
		props: {},
	};
}
