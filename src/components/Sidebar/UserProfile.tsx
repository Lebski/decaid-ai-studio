import React from 'react';

interface UserProfileProps {
  avatar: string;
  name: string;
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ avatar, name, email }) => {
  return (
    <div className="flex relative gap-4 items-start pt-6 pr-8 pl-2 mt-6 w-full border-t border-gray-200 max-md:pr-5">
      <div className="flex z-0 flex-1 shrink gap-3 items-center basis-4">
        <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square">
          <img loading="lazy" src={avatar} alt={`${name}'s avatar`} className="object-cover absolute inset-0 size-full" />
          <div className="flex relative shrink-0 h-10 rounded-full border border-solid border-black border-opacity-10" />
        </div>
        <div className="flex flex-col self-stretch my-auto">
          <div className="text-sm font-semibold leading-5 text-slate-700">{name}</div>
          <div className="text-sm leading-none text-slate-600">{email}</div>
        </div>
      </div>
      <button className="flex overflow-hidden absolute right-0 bottom-3 z-0 gap-2 justify-center items-center p-2 w-9 rounded-lg">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83af8216ed38ddf54b5e3d366328a5fde697ed5f8738509a22687c6590dcd646?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1" alt="More options" className="object-contain self-stretch my-auto w-5 aspect-square" />
      </button>
    </div>
  );
};

export default UserProfile;