import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';


export default {
    input:'raw/test/ui.jsx',
    output: {
        format: 'amd',
        file: 'src/test/ui.js',
        strict: false
    },
    plugins:[
        resolve(),
        babel(),
        commonjs(),
        postcss({extensions: ['.less']})
    ]
}