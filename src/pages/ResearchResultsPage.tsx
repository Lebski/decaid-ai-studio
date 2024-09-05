import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'components/Common/Header';

interface SearchParams {
    search: string;
    tags: string[];
}

const ResearchResultsPage: React.FC = () => {
    const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const search = params.get('search');
        const tags = params.get('tags');

        if (search || tags) {
            setSearchParams({
                search: search || '',
                tags: tags ? JSON.parse(decodeURIComponent(tags)) : []
            });
            // Here you would typically fetch the search results based on these parameters
        }
    }, [location]);

    if (!searchParams) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header title="Research" />
            <div>
                <h2>Search Results</h2>
                <p>Search term: {searchParams.search}</p>
                <p>Tags: {searchParams.tags.join(', ')}</p>
                {/* Add your search results component here */}
            </div>
        </>
    );
};

export default ResearchResultsPage;