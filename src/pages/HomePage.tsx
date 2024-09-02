import ContentCreationSection from 'components/Home/ContentCreationSection';
import { InspirationCardProps } from 'components/Home/InspirationCard';
import InspirationSection from 'components/Home/InspirationSection';
import Layout from 'components/Layout/Layout';
import React from 'react';

const HomePage: React.FC = () => {
    const sidebarProps = {
        logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/963c23baa7ac0da5c1671f78779d34ba4c9c093a1877c01eb458b49ff5b9300f?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
        brandName: 'https://cdn.builder.io/api/v1/image/assets/TEMP/08cec61121443f9e911065a15c5686fa7fdbb89bb5e666c40c2eda1b94682b77?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
        navItems: [
            { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0982fe7aa1b1ba25cc1892140186275bee37110c60f449d233b6a942892cb515?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1', label: 'Home', isActive: true },
            { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ab88cc2468d7648d31028386433ac02b662e010eba035cca22ffe11348a75d07?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1', label: 'Create' },
            { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fbfba1e777b62aed3a14a11cfdf7ae0c2daa9e548e41466e7ee9cd65f82a3fdc?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1', label: 'Research' },
            { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cca0081e6a532aa190019c1bc8e35cebe83482006a87b72b7988d7c67aa5be51?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1', label: 'Design' },
        ],
        userProfile: {
            avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0235daaa207d332f31c8feddbecbc46d279fdc9b156b85637667ce2d60dddeee?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
        },
    };
    const inspirationCards: InspirationCardProps[] = [
        {
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/42492cf06bf2644edc83108647fb0297f0abe10fbdd2ef73656238ac7cec229f?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
            title: 'Create On-Brand Marketing Texts',
            description: 'Easily Create marketing texts that match your tone of voice and your companies style guides',
            tags: ['Marketing', 'Communication'],
        },
        {
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/17e92e8df5969c6d573031be52b486929e7b2521e95964a901301616e6a58a16?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
            title: 'Create a Meeting-Summary',
            description: 'Quickly generate comprehensive meeting summaries that capture key points and action items',
            tags: ['Management', 'Leadership'],
        },
        {
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6dabe04d717f205e6c0a6c3323e41e8b96f93efa7755184fc564d823e2898f2d?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
            title: 'Create Social Media Posts from News',
            description: 'Effortlessly transform the latest news into engaging social media content tailored for your audience',
            tags: ['News', 'Management'],
        },
        {
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6e7e15aff87625c5da178b2092997d221dee4b7a20653157b06ae7834b6d2fdb?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
            title: 'Generate a Project Briefing',
            description: 'Automatically create detailed project briefings to keep your team informed and aligned',
            tags: ['Management', 'Leadership'],
        },
        {
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c83e3462b174fa2a57fb0c2ebd31ab0752533f06b443612149a97001982f8742?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
            title: 'Create a Podcast from News',
            description: 'Convert current news articles into ready-to-record podcast scripts for dynamic content creation',
            tags: ['News', 'Communication'],
        },
        {
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e0f25d7299e804db15d93c467b62c39c4d6d632b0d7703fefd0aa8d9f0e5620b?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
            title: 'Create Notes from a Voice Mail',
            description: 'Accurately transcribe voicemail messages into organized notes for easy reference and follow-up',
            tags: ['Notes', 'Communication'],
        },
    ];
    return <Layout title="Home" sidebarProps={sidebarProps}>
        <ContentCreationSection />
        <InspirationSection
            cards={inspirationCards}
        />
    </Layout>;
};

export default HomePage;