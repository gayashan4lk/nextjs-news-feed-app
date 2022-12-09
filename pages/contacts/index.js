import Link from 'next/link';
import contacts from '../api/contacts';

export default function Contacts() {
	return (
		<>
			<h1>Contacts</h1>
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						<Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
					</li>
				))}
			</ul>
			<Link href='/'>Go to Home</Link>
		</>
	);
}
