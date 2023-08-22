import { GitHubLogoIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const Link = "rounded w-10 h-10 flex items-center lg:hover:bg-gray-100/10 px-2 space-x-2 w-fit";

const Github = () => {
  const [stars, setStars] = useState(0);

  const retrieveStars = async () => {
    const response = await fetch("https://api.github.com/repos/zavbala/ph-abdge"),
      data = await response.json();

    setStars(data.stargazers_count);
  };

  useEffect(() => {
    retrieveStars();
  }, []);

  return (
    <a
      className={Link}
      target='_blank'
      rel='noreferrer noopener'
      href='https://github.com/zavbala/ph-badge'
    >
      <GitHubLogoIcon className='w-5' />

      <div className='flex items-center gap-x-2'>
        <span className=''>{stars}</span>
        <StarFilledIcon className='' />
      </div>
    </a>
  );
};

export default Github;
