const importAll = (r) => { r.keys().forEach(r); };

document.addEventListener('DOMContentLoaded', () => {
  importAll(require.context('../components/', true, /\.js$/));
});
