import Image from 'next/image';
import { PageLayout } from '../modules/shared/componets/PageLayout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <PageLayout title="home">
      <div className={styles.container}>
        <h1 className="text-3xl font-bold">Hi!! 👋</h1>
      </div>
    </PageLayout>
  );
}
