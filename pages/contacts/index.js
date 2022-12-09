import Link from 'next/link';
import contacts from '../api/contacts';

export default function Contacts() {
	return (
		<>
			<h1>Contacts</h1>
			<ul>
				{contacts.map((contact) => (
					<li>
						<Link href={`/contacts/${contact.id}`}>{contact.id}</Link>
					</li>
				))}
			</ul>
			<Link href='/'>Go to Home</Link>
		</>
	);
}
