import ContentCreationSection from 'components/Home/ContentCreationSection';
import { InspirationCardProps } from 'components/Home/InspirationCard';
import InspirationSection from 'components/Home/InspirationSection';
import Layout from 'components/Layout/Layout';
import React from 'react';

import inspirationImage01 from 'assets/images/inspiration/01.png';
import inspirationImage02 from 'assets/images/inspiration/02.png';
import inspirationImage03 from 'assets/images/inspiration/03.png';
import inspirationImage04 from 'assets/images/inspiration/04.png';
import inspirationImage05 from 'assets/images/inspiration/05.png';
import inspirationImage06 from 'assets/images/inspiration/06.png';

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
            image: inspirationImage01,
            title: 'Create On-Brand Marketing Texts',
            description: 'Easily Create marketing texts that match your tone of voice and your companies style guides',
            tags: ['Marketing', 'Communication'],
        },
        {
            image: inspirationImage02,
            title: 'Create a Meeting-Summary',
            description: 'Quickly generate comprehensive meeting summaries that capture key points and action items',
            tags: ['Management', 'Leadership'],
        },
        {
            image: inspirationImage03,
            title: 'Create Social Media Posts from News',
            description: 'Effortlessly transform the latest news into engaging social media content tailored for your audience',
            tags: ['News', 'Management'],
        },
        {
            image: inspirationImage04,
            title: 'Generate a Project Briefing',
            description: 'Automatically create detailed project briefings to keep your team informed and aligned',
            tags: ['Management', 'Leadership'],
        },
        {
            image: inspirationImage05,
            title: 'Create a Podcast from News',
            description: 'Convert current news articles into ready-to-record podcast scripts for dynamic content creation',
            tags: ['News', 'Communication'],
        },
        {
            image: inspirationImage06,
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