import ContentCreationSection from 'components/Home/ContentCreationSection';
import { InspirationCardProps } from 'components/Home/InspirationCard';
import InspirationSection from 'components/Home/InspirationSection';
import Layout from 'components/Layout/Layout';
import React from 'react';

import logo from 'assets/images/logo.svg';

import homeIcon from 'assets/images/home-line.svg';
import createIcon from 'assets/images/edit-04.svg';
import researchIcon from 'assets/images/search-refraction.svg';
import designIcon from 'assets/images/palette.svg';

import inspirationImage01 from 'assets/images/inspiration/01.png';
import inspirationImage02 from 'assets/images/inspiration/02.png';
import inspirationImage03 from 'assets/images/inspiration/03.png';
import inspirationImage04 from 'assets/images/inspiration/04.png';
import inspirationImage05 from 'assets/images/inspiration/05.png';
import inspirationImage06 from 'assets/images/inspiration/06.png';

const HomePage: React.FC = () => {
    const sidebarProps = {
        logo: logo,
        navItems: [
            { icon: homeIcon, label: 'Home', isActive: true },
            { icon: createIcon, label: 'Create' },
            { icon: researchIcon, label: 'Research' },
            { icon: designIcon, label: 'Design' },
        ],
        userProfile: {
            avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0235daaa207d332f31c8feddbecbc46d279fdc9b156b85637667ce2d60dddeee?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
        },
        onSearchInputChange: (value: string) => {
            console.log('Search input changed:', value);
        },
        onSearchSubmit: (value: string) => {
            console.log('Search submitted:', value);
        }
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