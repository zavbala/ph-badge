import React, { useEffect, useState } from "react";
// import Badge from '@packages/ph-badge/react/src/Component.jsx';

interface Props {}

const Overview = ({}: Props) => {
  const [site, setSite] = useState("https://tailwindcss.com");

  const [state, setState] = useState({});

  return (
    <div className='flex h-full'>
      <aside className='flex flex-col grow'></aside>

      <div className='flex flex-col w-[85%] relative p-10'>
        <input
          type='text'
          value={site}
          onChange={(event) => setSite(event.target.value)}
          className='rounded p-3 text-center mb-3 shadow bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-700'
        />
        <iframe src={site} className='w-full h-full rounded-md' />
      </div>

      {/* <Badge {...state} /> */}
    </div>
  );
};

export default Overview;
