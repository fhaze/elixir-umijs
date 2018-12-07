
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true
      },
      dynamicImport: false,
      title: 'umi-web',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  theme: {
    "primary-color": "#fc65c9"
  }
}
