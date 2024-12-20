type PostProps = {
    params: {
        id: string;
    };
};

// Define Post type
type Post = {
    title: string;
    content: string;
    author: string;
    date: string;
    image: string;
};

// Fetch data from API
async function fetchPostData(id: string): Promise<Post | null> {
    try {
        const response = await fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch post data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Dynamic page component
export default async function Post({ params }: PostProps){
    const { id } = await params;  

    const post = await fetchPostData(id);

    if (!post) {
        return (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h1>404 - Post Not Found</h1>
                <p>The post you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <header style={styles.hero}>
                <img src={post.image} alt={post.title} style={styles.heroImage} />
                <div style={styles.heroText}>
                    <h1>{post.title}</h1>
                    <p>
                        By <strong>{post.author}</strong> on {post.date}
                    </p>
                </div>
            </header>

            <main style={styles.main}>
                <article style={styles.article}>
                    <p>{post.content}</p>
                </article>
            </main>

            <footer style={styles.footer}>
                <p>&copy; 2024 My Blog. All rights reserved.</p>
            </footer>
        </div>
    );
}

// Inline styles
const styles: Record<string, React.CSSProperties> = {
    container: {
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        margin: 0,
        padding: 0,
    },
    hero: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
    },
    heroImage: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        maxHeight: '400px',
    },
    heroText: {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px 20px',
        borderRadius: '8px',
    },
    main: {
        padding: '20px',
    },
    article: {
        marginBottom: '40px',
        lineHeight: '1.6',
        fontSize: '18px',
    },
    footer: {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#f7f7f7',
        marginTop: '40px',
    },
};
