import { Component, Prop, State, h } from '@stencil/core';

@Component({
  scoped: true,
  tag: 'product-hunt',
  styleUrl: 'my-component.css',
})
export class MyComponent {
  @State() upvotes: number = 0;

  @Prop() token: string;
  @Prop() product: string;
  @Prop() compact: boolean = false;
  @Prop() schema: 'dark' | 'light' = 'light';

  private resolveProduct(): string {
    return 'https://www.producthunt.com/posts/' + this.product;
  }

  async componentWillLoad() {
    const url = 'https://api.producthunt.com/v2/api/graphql';

    const query = `
       query GetPost($slug: String!) {
        post(slug: $slug) {
          id
          name
          votes {
            totalCount
          }
        }
      }`;

    let response;

    try {
      response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Host': 'api.producthunt.com',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token,
        },
        body: JSON.stringify({ query, variables: { slug: this.product } }),
      });
    } catch (error) {
      // throw new Error('Invalid token or product name');
    }

    if (response.ok) {
      const json = await response.json();
      this.upvotes = json.data.post.votes.totalCount;
    }
  }

  render() {
    return (
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={this.resolveProduct()}
        class={`parent
        ${this.schema === 'light' ? 'light' : 'dark'} 
        ${this.compact ? 'fit' : 'w-250'}`}
      >
        <svg
          width="33"
          height="33"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
              fill={` ${this.schema === 'light' ? '#FF6154' : '#fff'}`}
            ></path>
            <path
              d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
              fill={` ${this.schema === 'light' ? '#fff' : '#000'}  `}
            ></path>
          </g>
        </svg>

        {!this.compact && (
          <div class="grow">
            <small> Featured on </small>
            <span> Product Hunt </span>
          </div>
        )}

        <div class="col">
          <svg
            width={30}
            height={20}
            viewBox="0 0 320 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={` ${this.schema === 'light' ? '#FF6154' : '#fff'}`}
              d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
            />
          </svg>

          {this.upvotes}
        </div>
      </a>
    );
  }
}
