import { useState } from "react";

interface Props {
  show?: boolean;
}

const Managers = ["npm", "yarn", "pnpm"];
const Frameworks = ["react", "vue", "solid", "preact", "svelte", "alpine"];

const NPM = ({ show = false }: Props) => {
  const [manager, setManager] = useState(0);
  const [framework, setFramework] = useState("react");

  const command = `${Managers[manager]} install @ph-badge/${framework}`;

  return (
    <>
      <div className='mb-5 flex flex-wrap mt-5 gap-2'>
        {show &&
          Frameworks.map((f, index) => (
            <button
              key={index}
              type='button'
              onClick={() => setFramework(f)}
              className={`capitalize rounded-full px-3 py-1 text-sm
            ${framework === f ? "bg-orange-700" : "lg:hover:bg-gray-100/10"}`}
            >
              {f}
            </button>
          ))}
      </div>

      <div className='rounded p-3 items-center justify-between flex shadow w-fit mb-5'>
        <div className='space-x-2'>
          <code>{command}</code>
        </div>

        <button
          type='button'
          onClick={() => navigator.clipboard.writeText(command)}
          className='lg:hover:bg-gray-100/5 rounded w-10 h-10 flex items-center justify-center'
        >
          <svg
            width='15'
            height='15'
            fill='none'
            viewBox='0 0 15 15'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              fill='currentColor'
              d='M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z'
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default NPM;
