import { NextResponse } from 'next/server';

type Post = {
    title: string;
    content: string;
    author: string;
    date: string;
    image: string;
};

const posts = {
    '1': {
        title: 'The Journey of Next.js 13',
        content:
            'Next.js 13 brings a revolutionary approach to building web applications, including the new app directory and server components.',
        author: 'Jane Doe',
        date: 'December 20, 2024',
        image: 'https://via.placeholder.com/800x400',
    },
    '2': {
        title: 'TypeScript for Modern Web Development',
        content:
            'Learn how TypeScript improves your development experience and why it’s the perfect companion for React and Next.js.',
        author: 'John Smith',
        date: 'November 15, 2024',
        image: 'https://via.placeholder.com/800x400',
    },
};

// POST handler
export async function POST(request: Request) {
    const body = await request.json();

    const { id }: { id: keyof typeof posts } = body;
    const post = posts[id];
    if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
}
