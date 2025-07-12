import { useState, useEffect } from 'react';

export default function KanyeQuote() {
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch('https://api.kanye.rest/');
                if (!response.ok) {
                    throw new Error('Failed to fetch quote');
                }
                const data = await response.json();
                setQuote(data.quote);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchQuote();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="text-center mt-4">
            <h2 className="text-2xl font-bold tracking-tight">
                <span className="fantasy-accent">{quote}</span>
            </h2>
        </div>
    );
}