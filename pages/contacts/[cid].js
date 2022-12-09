import { useRouter } from 'next/router';
import Link from 'next/link';
import contacts from '../api/contacts';

export default function Contact() {
	const router = useRouter();
	const { cid } = router.query;
	const contact = contacts.find((contact) => contact.id === cid);
	const [firstName, lastName] = contact?.name.split(' ');
	return (
		<>
			<h2>
				{firstName.toUpperCase()} {lastName}, {contact.country}
			</h2>
			<a href='#' onClick={() => router.back()}>
				Go back
			</a>
			<br />
			<Link href={'/'}>Go to Home</Link>
		</>
	);
}
