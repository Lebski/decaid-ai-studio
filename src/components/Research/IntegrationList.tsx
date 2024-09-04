import React from 'react';
import IntegrationCard from './IntegrationCard';

interface Integration {
  name: string;
  imageSrc: string;
  description: string;
  isActive: boolean;
}

const integrations: Integration[] = [
  {
    name: "Hacker News",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ad6e713050035ebab5a8bf85973568f6a780e8b2914a998fcd0fe9da3fd03f3?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
    description: "Streamline software projects, sprints, and bug tracking.",
    isActive: false
  },
  {
    name: "HuggingFace",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e422eb4469e3caf26a7bb727f7a1758f39bdc6eae911f0e90d9e54a306e74f4?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
    description: "Link pull requests and automate workflows.",
    isActive: true
  },
  {
    name: "Reddit",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ca1aa297b3b0f59a7bdeba339b51de2d8a7b35755cfbe8722367ac71f4bd47a?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
    description: "Embed file previews in projects.",
    isActive: false
  },
  {
    name: "Ben's Bites",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/48f03d3085f635076df9cd59da1a7e74b25bb0adb2d5dedf0330b0a5c271fb1a?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
    description: "AI for Non-Techies — Learn how AI tools can transform your productivity",
    isActive: false
  },
  {
    name: "Die Zeit",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bfac51c9d063ac5f41c086b350fc793c3d4f2aefdbf4d72ba264a5252d54fb7f?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
    description: "Die Zeit is a German national weekly newspaper published in Hamburg in Germany.",
    isActive: true
  },
  {
    name: "Tagesschau",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a80f71b817d3eb2df8c535476b3124914bbf898cee762c4adb0bbb38ae0d955?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
    description: "Die erste Adresse für Nachrichten und Information: An 365 Tagen im Jahr, rund um die Uhr aktualisiert.",
    isActive: true
  },
  {
    name: "AP",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/121a38bb628e0a5bfca95a4f3cc909f4af9cd6fb628d75a88d8d2602d2fc9c42?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
    description: "The Associated Press is an American not-for-profit news agency headquartered in New York City.",
    isActive: true
  },
  {
    name: "The Guardian",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/77b2de6a1390fd2dc6d5b2100490dd2a44e315d582f6a2727b283ed86a07dc47?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
    description: "The Guardian is a British daily newspaper. It was founded in 1821 as The Manchester Guardian.",
    isActive: true
  },
  {
    name: "The New York Times",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d298bb549b136e19a14a3563c2886cf822fb9ef6e8b2b94d4481e09b466352cc?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1",
    description: "The New York Times is an American daily newspaper based in New York City.",
    isActive: false
  }
];

const IntegrationList: React.FC = () => {
    return (
      <main className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {integrations.map((integration, index) => (
          <IntegrationCard
            key={index}
            name={integration.name}
            imageSrc={integration.imageSrc}
            description={integration.description}
            isActive={integration.isActive}
          />
        ))}
      </main>
    );
  };

export default IntegrationList;