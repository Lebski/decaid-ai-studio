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
    return <Layout sidebarProps={sidebarProps} />;
};

export default HomePage;