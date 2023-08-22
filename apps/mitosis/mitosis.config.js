/** @type {import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
  files: 'src/**',
  dest: '../../packages',
  targets: [
    'vue2',
    'vue3',
    'solid',
    'svelte',
    'react',
    'preact',
    'alpine',
    'qwik',
  ],
};
