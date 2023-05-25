import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('ph-badge', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<product-hunt></product-hunt>',
    });
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<product-hunt></product-hunt>`,
    });
  });
});
