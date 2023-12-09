import cn from "classnames";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Picker from "./picker";

// @ts-ignore
import Badge from "@ph-badge/react";

const Styles = "appearance-none rounded-md bg-gray-50/5 p-2 focus:outline-none";

const Overview = () => {
  const [open, setOpen] = useState(false);
  const [site, setSite] = useState("https://astro.build");

  const [state, setState] = useState({
    tagline: "",
    compact: false,
    color: "#FF4500",
    backgroundColor: "#FFF",
    product: "product-hunt-badge",
  });

  const handleChange = (event: any) => {
    const { id, name, value, type, checked } = event.target;

    setState({
      ...state,
      [name || id]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className='flex lg:flex-row flex-col h-full md:my-10 my-5 gap-5'>
      <aside className='flex flex-col gap-y-3'>
        <div className='flex items-center space-x-3'>
          <button
            type='button'
            onClick={() => setState({ ...state, compact: !state.compact })}
            className={cn(
              state.compact && "bg-orange-600",
              !state.compact && "bg-gray-50/20",
              "w-20 h-10 rounded-md flex items-center justify-between px-2",
            )}
          >
            <span className={`w-6 h-6 rounded ${!state.compact && "bg-white"}`} />
            <span className={`w-6 h-6 rounded ${state.compact && "bg-white"}`} />
          </button>

          <span>Mode: {state.compact ? "Compact" : "Full"}</span>
        </div>

        <label htmlFor='tagline'>Tagline</label>
        <input
          id='tagline'
          type='text'
          name='tagline'
          className={Styles}
          value={state.tagline}
          onChange={handleChange}
          placeholder='Featured on'
        />

        <label htmlFor='color'>Color</label>
        <Picker
          selected={state.color}
          openPicker={() => setOpen(!open)}
          event={(color: string) => setState({ ...state, color })}
          colors={["#FF4500", "#3838FF", "#279D27", "#f73db6"]}
        />

        <label htmlFor='color'>Background Color</label>
        <Picker
          colors={["#FFF"]}
          selected={state.backgroundColor}
          event={(color: string) => setState({ ...state, backgroundColor: color })}
        />

        {open && <HexColorPicker />}
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
          styles={{ position: "absolute", bottom: 10, right: 10 }}
        />
      </div>
    </div>
  );
};

export default Overview;
