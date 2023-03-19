import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import clear from 'rollup-plugin-clear';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    vue(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
        include: null,
      },
      module: 'es2015'
    }),
    clear({
      targets: ['./dist'],
    }),
  ]
}
