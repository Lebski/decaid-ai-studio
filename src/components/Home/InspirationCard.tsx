import arrowIcon from 'assets/images/arrow-up-right.svg';

interface InspirationCardProps {
    image: string;
    title: string;
    description: string;
    tags: string[];
}

const InspirationCard: React.FC<InspirationCardProps> = ({ image, title, description, tags }) => {
    return (
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[320px]">
            <img loading="lazy" src={image} alt={title} className="object-contain w-full rounded-2xl aspect-[1.43]" />
            <div className="flex flex-col mt-5 w-full">
                <div className="flex flex-col w-full">
                    <div className="flex gap-4 items-start w-full">
                        <h3 className="flex-1 shrink text-2xl font-semibold leading-8 text-gray-900 basis-0">{title}</h3>
                        <div className="flex flex-col pt-1 w-6">
                            <img src={arrowIcon} alt="" className="object-contain w-6 aspect-square" />
                        </div>
                    </div>
                    <p className="mt-2 text-base leading-6 text-ellipsis text-slate-600">{description}</p>
                </div>
                <div className="flex flex-wrap gap-2 items-start mt-6 w-full text-sm font-medium leading-5 text-center whitespace-nowrap">
                    {tags.map((tag, index) => (
                        <span key={index} className={`self-stretch px-2.5 py-0.5 rounded-full border border-solid ${getTagStyle(tag)}`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const getTagStyle = (tag: string) => {
    const styles: { [key: string]: string } = {
        Marketing: 'text-sky-700 bg-sky-50 border-sky-200',
        Communication: 'text-indigo-700 bg-indigo-50 border-indigo-200',
        Management: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        Leadership: 'text-pink-700 bg-pink-50 border-pink-200',
        News: 'text-violet-700 bg-purple-50 border-purple-200',
        Notes: 'text-orange-700 bg-orange-50 border-orange-200',
    };
    return styles[tag] || 'text-indigo-900 bg-slate-50 border-slate-300';
};

export default InspirationCard;
export type { InspirationCardProps };