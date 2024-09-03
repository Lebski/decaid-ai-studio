import React from 'react';
import logoutIcon from 'assets/images/log-out-01.svg';

interface UserProfileProps {
  avatar: string;
  name: string;
  email: string;
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ avatar, name, email, onLogout }) => {
  return (
    <div className="flex relative gap-4 items-start pt-6 pr-8 pl-2 mt-6 w-full border-t border-gray-200 max-md:pr-5">
      <div className="flex z-0 flex-1 shrink gap-3 items-center basis-4">
        <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square rounded-full">
          <img loading="lazy" src={avatar} alt={`${name}'s avatar`} className="object-cover absolute inset-0 size-full" />
        </div>
        <div className="flex flex-col self-stretch my-auto">
          <div className="text-sm font-semibold leading-5 text-slate-700">{name}</div>
          <div className="text-sm leading-none text-slate-600">{email}</div>
        </div>
      </div>
      <button 
        className="flex overflow-hidden absolute right-0 bottom-3 z-0 gap-2 justify-center items-center p-2 w-9 rounded-lg"
        onClick={onLogout}
        aria-label="Logout"
      >
        <img loading="lazy" src={logoutIcon} alt="Logout" className="object-contain self-stretch my-auto w-5 aspect-square" />
      </button>
    </div>
  );
};

export default UserProfile;
export type { UserProfileProps };