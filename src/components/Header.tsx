import Image from "next/image";
import {
  ChevronDownIcon,
  HomeIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  VideoCameraIcon,
  GlobeAltIcon,
  BellIcon,
  PlusIcon,
  SparklesIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header
      className="flex items-cente bg-white px-4 py-2 shadow-sm sticky top-0 left-0 
    right-0
    z-50"
    >
      <div className="relative h-10 w-24 flex-shrink-0">
        <Image
          layout="fill"
          objectFit="contain"
          src="/assets/reddit-logo.png"
          alt="Reddit Logo"
        />
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 mx-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form
        className="flex items-center flex-1 space-x-2 border border-gray-200 
      rounded-sm bg-gray-100 px-3 py-1 focus-within:shadow-md"
      >
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none max-w-full w-full"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="lg:flex hidden items-center mx-5 space-x-2 text-gray-500">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-1- border border-gray-100" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {status === "authenticated" ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <Image
            src="/assets/reddit.png"
            height={20}
            width={20}
            alt="Reddit"
            objectFit="contain"
            className="flex-shrink-0"
          />
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <Image
            src="/assets/reddit.png"
            height={20}
            width={20}
            alt="Reddit"
            objectFit="contain"
            className="flex-shrink-0"
          />
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </header>
  );
};
