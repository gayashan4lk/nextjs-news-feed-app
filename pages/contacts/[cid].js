import { useRouter } from 'next/router';
import Link from 'next/link';
import contacts from '../api/contacts';

export default function Contact() {
	const router = useRouter();
	const { cid } = router.query;
	const contact = contacts.find((contact) => contact.id === cid);
	return (
		<>
			<h1>
				{contact.name}, {contact.country}
			</h1>
			<Link href={'/contacts'}>Go back</Link>
			<br />
			<Link href={'/'}>Go to Home</Link>
		</>
	);
}
