import React, { useEffect, useState } from "react";
import cn from "classnames";

// @ts-ignore
import Badge from "@ph-badge/react";

interface Props {}

const Styles = "appearance-none rounded-md bg-gray-50/5 p-2 focus:outline-none";

const Overview = ({}: Props) => {
  const [site, setSite] = useState("https://astro.build");

  const [state, setState] = useState({
    compact: false,
    color: "#000",
    product: "ph-badge",
    tagline: "Featured on",
    backgroundColor: "#FFF",
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;

    setState({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className='flex lg:flex-row flex-col h-full md:my-10 my-5 gap-5'>
      <aside className='flex flex-col gap-y-3'>
        <label htmlFor='tagline'>Tagline</label>

        <input
          id='tagline'
          type='text'
          name='tagline'
          className={Styles}
          value={state.tagline}
          onChange={handleChange}
        />

        <label htmlFor='color'>Color</label>

        <input
          id='color'
          type='text'
          name='color'
          className={Styles}
          value={state.color}
          onChange={handleChange}
        />

        <label htmlFor='color'>Background Color</label>

        <input
          type='text'
          className={Styles}
          id='backgroundColor'
          name='backgroundColor'
          onChange={handleChange}
          value={state.backgroundColor}
        />

        <div className='space-y-3'>
          <span>Mode: {state.compact ? "Compact" : "Full"}</span>

          <button
            type='button'
            onClick={() => setState({ ...state, compact: !state.compact })}
            className={cn(
              !state.compact && "bg-gray-50/20",
              state.compact && "bg-orange-600",
              "w-20 h-10 rounded-md flex items-center justify-between px-2",
            )}
          >
            <span className={`w-6 h-6 rounded ${!state.compact && "bg-white"}`} />
            <span className={`w-6 h-6 rounded ${state.compact && "bg-white"}`} />
          </button>
        </div>
      </aside>

      <div className='flex flex-col relative grow'>
        <input
          type='text'
          value={site}
          onChange={(event) => setSite(event.target.value)}
          className='lg:block hidden rounded p-3 text-center mb-3 shadow bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-700'
        />

        <iframe src={site} className='md:block hidden w-full h-full rounded-md relative' />

        <Badge
          {...state}
          token={import.meta.env.PUBLIC_PH_TOKEN}
          styles={{ right: 15, bottom: 15, position: "absolute" }}
        />
      </div>
    </div>
  );
};

export default Overview;
