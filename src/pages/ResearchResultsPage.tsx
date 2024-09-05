import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'components/Common/Header';
import SearchResultCard, {
  SearchResultCardTagData
} from 'components/Research/SearchResultCard';
import Pagination from 'components/Common/Pagination';
import Toggle from 'components/Forms/Toggle';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import redditIcon from 'assets/images/source-icons/reddit.png';
import bensBytesIcon from 'assets/images/source-icons/bens-bites.png';
import hackerNewsIcon from 'assets/images/source-icons/hackernews.png';
import nytIcon from 'assets/images/source-icons/nyt.png';

import news1 from 'assets/images/news/01.webp';
import news2 from 'assets/images/news/02.webp';
import news3 from 'assets/images/news/03.webp';
import news4 from 'assets/images/news/04.webp';
import news5 from 'assets/images/news/05.webp';
import news6 from 'assets/images/news/06.webp';
import news7 from 'assets/images/news/07.webp';
import news8 from 'assets/images/news/08.webp';

// Extend dayjs
dayjs.extend(relativeTime);

interface SearchResultItem {
  id: number;
  imageUrl: string;
  logoUrl: string;
  tags: SearchResultCardTagData[];
  title: string;
  description: string;
  publishedAt: Date;
  sourceUrl: string;
  displayUrl: string;
  relevanceScore: number;
}

const searchResults: SearchResultItem[] = [
  {
    id: 1,
    imageUrl: news1,
    logoUrl: redditIcon,
    tags: [
      {
        id: '1',
        text: 'AI',
        textColor: 'text-sky-700',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200'
      },
      {
        id: '2',
        text: 'R&D',
        textColor: 'text-indigo-700',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200'
      }
    ],
    title: 'NVIDIA buys 1,000 apartments in San Francisco',
    description:
      'A report of SF News has shown that the tech giant NVIDIA has recently bought more than one thousand apartments in San Francisco....',
    publishedAt: new Date(2024, 8, 5, 10, 0), // September 5, 2024, 10:00 AM
    sourceUrl:
      'https://www.reddit.com/r/technology/comments/nvidia_buys_apartments',
    displayUrl: 'reddit.com',
    relevanceScore: 0.95
  },
  {
    id: 2,
    imageUrl: news6,
    logoUrl: bensBytesIcon,
    tags: [
      {
        id: '3',
        text: 'AI',
        textColor: 'text-sky-700',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200'
      },
      {
        id: '4',
        text: 'OpenAI',
        textColor: 'text-indigo-900',
        bgColor: 'bg-white',
        borderColor: 'border-indigo-900'
      }
    ],
    title: "ByteDance joins OpenAI's Sora rivals with AI video app launch",
    description:
      'ByteDance has expanded its offering of a software that can generate videos based on text prompts, joining a growing number of Chinese tech...',
    publishedAt: new Date(2024, 8, 4, 14, 0), // September 4, 2024, 2:00 PM
    sourceUrl:
      'https://www.reuters.com/technology/bytedance-joins-openais-sora-rivals-with-ai-video-app-launch-2024-03-05/',
    displayUrl: 'reuters.com',
    relevanceScore: 0.88
  },
  {
    id: 3,
    imageUrl: news8,
    logoUrl: hackerNewsIcon,
    tags: [
      {
        id: '5',
        text: 'AI',
        textColor: 'text-sky-700',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200'
      },
      {
        id: '6',
        text: 'Stock',
        textColor: 'text-orange-700',
        bgColor: 'bg-white',
        borderColor: 'border-orange-600'
      }
    ],
    title: 'Nvidia Stock Rebounds as Analysts Highlight AI Leadership',
    description:
      'Nvidia shares rebounded in early trading Tuesday, after reports its Blackwell artificial intelligence (AI) chip will be delayed sent the...',
    publishedAt: new Date(2024, 8, 3, 9, 30), // September 3, 2024, 9:30 AM
    sourceUrl:
      'https://www.investopedia.com/nvidia-stock-rebounds-as-analysts-highlight-ai-leadership-8598436',
    displayUrl: 'investopedia.com',
    relevanceScore: 0.92
  },
  {
    id: 4,
    imageUrl: news3,
    logoUrl: nytIcon,
    tags: [
      {
        id: '7',
        text: 'AI',
        textColor: 'text-sky-700',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200'
      },
      {
        id: '8',
        text: 'Healthcare',
        textColor: 'text-green-700',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
      }
    ],
    title: 'AI-powered diagnostic tool receives FDA approval',
    description:
      'A revolutionary AI-powered diagnostic tool has received FDA approval, promising to improve early detection of various diseases...',
    publishedAt: new Date(2024, 8, 5, 7, 0), // September 5, 2024, 7:00 AM
    sourceUrl:
      'https://www.healthtech.com/articles/ai-diagnostic-tool-fda-approval',
    displayUrl: 'healthtech.com',
    relevanceScore: 0.85
  },
  {
    id: 5,
    imageUrl: news7,
    logoUrl: nytIcon,
    tags: [
      {
        id: '9',
        text: 'AI',
        textColor: 'text-sky-700',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200'
      },
      {
        id: '10',
        text: 'Education',
        textColor: 'text-purple-700',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200'
      }
    ],
    title: 'New AI tutor app revolutionizes personalized learning',
    description:
      'An innovative AI-powered tutor app has been launched, offering personalized learning experiences for students across various subjects...',
    publishedAt: new Date(2024, 8, 4, 8, 0), // September 4, 2024, 8:00 AM
    sourceUrl: 'https://www.edtech-news.com/new-ai-tutor-app-launch',
    displayUrl: 'edtech-news.com',
    relevanceScore: 0.78
  },
  {
    id: 6,
    imageUrl: news2,
    logoUrl: hackerNewsIcon,
    tags: [
      {
        id: '11',
        text: 'AI',
        textColor: 'text-sky-700',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200'
      },
      {
        id: '12',
        text: 'Automotive',
        textColor: 'text-red-700',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200'
      }
    ],
    title: 'Tesla unveils new AI-powered self-driving features',
    description:
      'Tesla has announced a suite of new AI-powered self-driving features for its vehicles, promising enhanced safety and convenience...',
    publishedAt: new Date(2024, 8, 5, 9, 0), // September 5, 2024, 9:00 AM
    sourceUrl:
      'https://www.autoinnovation.com/tesla-new-ai-self-driving-features',
    displayUrl: 'autoinnovation.com',
    relevanceScore: 0.89
  },
  {
    id: 7,
    imageUrl: news5,
    logoUrl: redditIcon,
    tags: [
      {
        id: '13',
        text: 'AI',
        textColor: 'text-sky-700',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200'
      },
      {
        id: '14',
        text: 'Finance',
        textColor: 'text-yellow-700',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200'
      }
    ],
    title: 'AI-driven trading algorithm outperforms market indices',
    description:
      'A new AI-driven trading algorithm has consistently outperformed major market indices, sparking interest from institutional investors...',
    publishedAt: new Date(2024, 8, 4, 22, 0), // September 4, 2024, 10:00 PM
    sourceUrl:
      'https://www.fintech-insider.com/ai-trading-algorithm-outperforms-market',
    displayUrl: 'fintech-insider.com',
    relevanceScore: 0.91
  },
  {
    id: 8,
    imageUrl: news4,
    logoUrl: bensBytesIcon,
    tags: [
      {
        id: '15',
        text: 'AI',
        textColor: 'text-sky-700',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200'
      },
      {
        id: '16',
        text: 'Environment',
        textColor: 'text-emerald-700',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200'
      }
    ],
    title: 'AI-powered system tackles climate change prediction',
    description:
      'Scientists have developed an AI-powered system that significantly improves climate change predictions, aiding in global mitigation efforts...',
    publishedAt: new Date(2024, 8, 5, 4, 0), // September 5, 2024, 4:00 AM
    sourceUrl:
      'https://www.climate-tech.org/ai-system-improves-climate-predictions',
    displayUrl: 'climate-tech.org',
    relevanceScore: 0.87
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
  const [sortBy, setSortBy] = useState<'date' | 'relevance'>('date');
  const itemsPerPage = 3;

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
    }
  }, [location]);

  const sortedResults = [...searchResults].sort((a, b) => {
    if (sortBy === 'date') {
      return b.publishedAt.getTime() - a.publishedAt.getTime();
    } else {
      return b.relevanceScore - a.relevanceScore;
    }
  });

  const totalPages = Math.ceil(sortedResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = sortedResults.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const formatTimeAgo = (date: Date) => {
    return dayjs(date).fromNow();
  };

  if (!searchParams) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header title="Research" />

      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full text-sm font-semibold leading-5 text-slate-700">
          <Toggle
            options={[
              { value: 'date', caption: 'Sort by date' },
              { value: 'relevance', caption: 'Sort by relevance' }
            ]}
            onSelect={(selected) => setSortBy(selected as 'date' | 'relevance')}
          />
        </div>

        {currentNews.map((news) => (
          <SearchResultCard
            key={news.id}
            {...news}
            timeAgo={formatTimeAgo(news.publishedAt)}
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
