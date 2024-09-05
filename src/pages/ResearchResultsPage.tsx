import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'components/Common/Header';
import SearchResultCard, { SearchResultCardTagData } from 'components/Research/SearchResultCard';
import Pagination from 'components/Common/Pagination';
import Toggle from 'components/Forms/Toggle';

interface SearchResultItem {
    id: number;
    imageUrl: string;
    logoUrl: string;
    tags: SearchResultCardTagData[];
    title: string;
    description: string;
    iconUrl: string;
    source: string;
    timeAgo: string;
    sourceUrl: string;
    displayUrl: string;
}

const searchResults: SearchResultItem[] = [
    {
        id: 1,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7b6e24be6a7ade69dd1a927e3a9b748f36b89e7c86789a4da5d3a2fb972c713?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/95556e0e29036b99839bf85bf6d73b44247812f551d9635b84d604cdfde84d15?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        tags: [
            { id: "1", text: "AI", textColor: "text-sky-700", bgColor: "bg-sky-50", borderColor: "border-sky-200" },
            { id: "2", text: "R&D", textColor: "text-indigo-700", bgColor: "bg-indigo-50", borderColor: "border-indigo-200" }
        ],
        title: "NVIDIA buys 1,000 apartments in San Francisco",
        description: "A report of SF News has shown that the tech giant NVIDIA has recently bought more than one thousand apartments in San Francisco....",
        iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/848610293505719ad761b92a628c2cdce3af2d9a0f92aac9e8569b329a8cb4d7?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        source: "reddit.com",
        timeAgo: "2 hours ago",
        sourceUrl: "https://www.reddit.com/r/technology/comments/nvidia_buys_apartments",
        displayUrl: "reddit.com"
    },
    {
        id: 2,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/64169d3d7c3eac9c978d7a3e928d6cc0a9dbf8fa763777ef28932f9aae7e2faa?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b20b973a90d05ec06b378044d6e0a6eb4fb0f18e2e54a10ebcd2ff7f208a456f?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        tags: [
            { id: "3", text: "AI", textColor: "text-sky-700", bgColor: "bg-sky-50", borderColor: "border-sky-200" },
            { id: "4", text: "OpenAI", textColor: "text-indigo-900", bgColor: "bg-white", borderColor: "border-indigo-900" }
        ],
        title: "ByteDance joins OpenAI's Sora rivals with AI video app launch",
        description: "ByteDance has expanded its offering of a software that can generate videos based on text prompts, joining a growing number of Chinese tech...",
        iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f99c0dee6f1d106af593d3fed37a8e9d4ce5d55837cf11c6e866825bc4b5e?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        source: "reuters.com",
        timeAgo: "22 hours ago",
        sourceUrl: "https://www.reuters.com/technology/bytedance-joins-openais-sora-rivals-with-ai-video-app-launch-2024-03-05/",
        displayUrl: "reuters.com"
    },
    {
        id: 3,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5db9bc925339ad5d84da2c65a5d327e2d0f08123a95e955fbdebb72bef928a24?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0414592a3645af67f3bf2aea7ae7520c2fcad5fad9a2eac7149a10a150a20a6?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        tags: [
            { id: "5", text: "AI", textColor: "text-sky-700", bgColor: "bg-sky-50", borderColor: "border-sky-200" },
            { id: "6", text: "Stock", textColor: "text-orange-700", bgColor: "bg-white", borderColor: "border-orange-600" }
        ],
        title: "Nvidia Stock Rebounds as Analysts Highlight AI Leadership",
        description: "Nvidia shares rebounded in early trading Tuesday, after reports its Blackwell artificial intelligence (AI) chip will be delayed sent the...",
        iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f3f6d6e976d83b32d1c12e4b668c9ff56c7938fe2647b661bf9895819ead678?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        source: "investopedia.com",
        timeAgo: "2 days ago",
        sourceUrl: "https://www.investopedia.com/nvidia-stock-rebounds-as-analysts-highlight-ai-leadership-8598436",
        displayUrl: "investopedia.com"
    },
    {
        id: 4,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/placeholder4.jpg?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/logo4.png?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        tags: [
            { id: "7", text: "AI", textColor: "text-sky-700", bgColor: "bg-sky-50", borderColor: "border-sky-200" },
            { id: "8", text: "Healthcare", textColor: "text-green-700", bgColor: "bg-green-50", borderColor: "border-green-200" }
        ],
        title: "AI-powered diagnostic tool receives FDA approval",
        description: "A revolutionary AI-powered diagnostic tool has received FDA approval, promising to improve early detection of various diseases...",
        iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/icon4.png?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        source: "healthtech.com",
        timeAgo: "5 hours ago",
        sourceUrl: "https://www.healthtech.com/articles/ai-diagnostic-tool-fda-approval",
        displayUrl: "healthtech.com"
    },
    {
        id: 5,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/placeholder5.jpg?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/logo5.png?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        tags: [
            { id: "9", text: "AI", textColor: "text-sky-700", bgColor: "bg-sky-50", borderColor: "border-sky-200" },
            { id: "10", text: "Education", textColor: "text-purple-700", bgColor: "bg-purple-50", borderColor: "border-purple-200" }
        ],
        title: "New AI tutor app revolutionizes personalized learning",
        description: "An innovative AI-powered tutor app has been launched, offering personalized learning experiences for students across various subjects...",
        iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/icon5.png?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        source: "edtech-news.com",
        timeAgo: "1 day ago",
        sourceUrl: "https://www.edtech-news.com/new-ai-tutor-app-launch",
        displayUrl: "edtech-news.com"
    },
    {
        id: 6,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/placeholder6.jpg?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/logo6.png?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        tags: [
            { id: "11", text: "AI", textColor: "text-sky-700", bgColor: "bg-sky-50", borderColor: "border-sky-200" },
            { id: "12", text: "Automotive", textColor: "text-red-700", bgColor: "bg-red-50", borderColor: "border-red-200" }
        ],
        title: "Tesla unveils new AI-powered self-driving features",
        description: "Tesla has announced a suite of new AI-powered self-driving features for its vehicles, promising enhanced safety and convenience...",
        iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/icon6.png?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        source: "autoinnovation.com",
        timeAgo: "3 hours ago",
        sourceUrl: "https://www.autoinnovation.com/tesla-new-ai-self-driving-features",
        displayUrl: "autoinnovation.com"
    },
    {
        id: 7,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/placeholder7.jpg?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/logo7.png?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        tags: [
            { id: "13", text: "AI", textColor: "text-sky-700", bgColor: "bg-sky-50", borderColor: "border-sky-200" },
            { id: "14", text: "Finance", textColor: "text-yellow-700", bgColor: "bg-yellow-50", borderColor: "border-yellow-200" }
        ],
        title: "AI-driven trading algorithm outperforms market indices",
        description: "A new AI-driven trading algorithm has consistently outperformed major market indices, sparking interest from institutional investors...",
        iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/icon7.png?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        source: "fintech-insider.com",
        timeAgo: "12 hours ago",
        sourceUrl: "https://www.fintech-insider.com/ai-trading-algorithm-outperforms-market",
        displayUrl: "fintech-insider.com"
    },
    {
        id: 8,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/placeholder8.jpg?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/logo8.png?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        tags: [
            { id: "15", text: "AI", textColor: "text-sky-700", bgColor: "bg-sky-50", borderColor: "border-sky-200" },
            { id: "16", text: "Environment", textColor: "text-emerald-700", bgColor: "bg-emerald-50", borderColor: "border-emerald-200" }
        ],
        title: "AI-powered system tackles climate change prediction",
        description: "Scientists have developed an AI-powered system that significantly improves climate change predictions, aiding in global mitigation efforts...",
        iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/icon8.png?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
        source: "climate-tech.org",
        timeAgo: "8 hours ago",
        sourceUrl: "https://www.climate-tech.org/ai-system-improves-climate-predictions",
        displayUrl: "climate-tech.org"
    }
];

interface SearchParams {
    search: string;
    tags: string[];
    sources: string[];
}

const handleGenerateClick = (id: number) => {
    console.log(`Generate clicked for item with id: ${id}`);
    // Add your logic for handling the generate button click
};

const ResearchResultsPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(searchResults.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = searchResults.slice(startIndex, endIndex);

    const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const search = params.get('search');
        const tags = params.get('tags');
        const sources = params.get('sources');

        if (search || tags || sources) {
            setSearchParams({
                search: search || '',
                tags: tags ? JSON.parse(decodeURIComponent(tags)) : [],
                sources: sources ? JSON.parse(decodeURIComponent(sources)) : []
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

            <div className='flex flex-col gap-6'>
                <div className="flex flex-wrap gap-10 justify-between items-start w-full text-sm font-semibold leading-5 text-slate-700">
                    <Toggle
                        options={[
                            { value: 'date', caption: 'Sort by date' },
                            { value: 'relevance', caption: 'Sort by relevance' },
                        ]}
                        onSelect={(selected) => { }}
                    />
                    <Toggle
                        options={[
                            { value: 'date', caption: 'Sort by date' },
                            { value: 'relevance', caption: 'Sort by relevance' },
                        ]}
                        onSelect={(selected) => { }}
                    />
                </div>

                {currentNews.map((news) => (
                    <SearchResultCard
                        key={news.id}
                        {...news}
                        onGenerateClick={() => handleGenerateClick(news.id)}
                    />
                ))}

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default ResearchResultsPage;