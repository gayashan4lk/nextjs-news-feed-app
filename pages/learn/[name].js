import { useRouter } from 'next/router';
import Link from 'next/link';
import topics from '../api/topics';

export default function Learn() {
	const router = useRouter();
	const { name } = router.query;
	const topic = topics.find((topic) => topic.id === name);
	return (
		<>
			<h1>Let's learn {topic.id}</h1>
			<p>{topic.about}</p>
			<Link href='/'>Go to home</Link>
		</>
	);
}
