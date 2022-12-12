import Link from 'next/link';
import styles from '../../styles/LearnNextJs.module.css';

export default function LearnNextJs() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.titlebox}>
					<h1>Learn NextJs</h1>
				</div>
				<Link href={'/'}>Go to Home</Link>
			</div>
		</>
	);
}
