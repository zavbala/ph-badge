import { Show, onMount, useStore } from '@builder.io/mitosis';
import fetcher from './fetcher';

interface Props {
  token: string;
  color?: string;
  product: string;
  tagline?: string;
  compact?: boolean;
  backgroundColor?: string;
  styles: Record<string, string>;
}

export default function ProductHunt(props: Props) {
  const state = useStore({ upvotes: 0 });

  onMount(() => {
    fetcher(props.product, props.token).then((upvotes) => {
      state.upvotes = upvotes || 0;
    });
  });

  return (
    <a
      css={{
        zIndex: '10',
        display: 'flex',
        borderRadius: '4px',
        padding: '10px 15px',
        fontFamily: 'inherit',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      style={{
        color: props.color || '#FF6154',
        width: props.compact ? 'fit-content' : '260px',
        border: `1px solid ${props.color || '#FF6154'}`,
        backgroundColor: props.backgroundColor || '#FFF',
        ...props.styles,
      }}
      target="_blank"
      rel="noreferrer noopener"
      href={'https://www.producthunt.com/posts/' + props.product}
    >
      <svg
        width="33"
        height="33"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            fill={`${props.color || '#FF6154'}`}
            d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
          ></path>
          <path
            fill="#fff"
            d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
          ></path>
        </g>
      </svg>

      <Show when={!props.compact}>
        <div
          style={{
            flexGrow: '1',
            display: 'flex',
            marginLeft: '10px',
            flexDirection: 'column',
          }}
        >
          <small
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
            }}
          >
            {props.tagline || 'Featured on'}
          </small>
          <span style={{ fontWeight: 'bold' }}>Product Hunt</span>
        </div>
      </Show>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <svg
          width={30}
          height={20}
          viewBox="0 0 320 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={`${props.color || '#FF6154'}`}
            d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
          />
        </svg>

        <span>{state.upvotes}</span>
      </div>
    </a>
  );
}
