import styles from './page.module.css';

export default function Home(){
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Welcome to My Website</h1>
                <p className={styles.subtitle}>
                    Building modern web applications with Next.js and TypeScript.
                </p>
            </header>
            <main className={styles.main}>
                <section className={styles.cardSection}>
                    <div className={styles.card}>
                        <h2>Fast Performance</h2>
                        <p>Experience blazing fast load times with server-side rendering.</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Modern Framework</h2>
                        <p>Leverage the latest tools and technologies with Next.js.</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Scalable Solutions</h2>
                        <p>Build scalable applications that grow with your needs.</p>
                    </div>
                </section>
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 My Website. All rights reserved.</p>
            </footer>
        </div>
    );
}
