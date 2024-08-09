// esbuild.config.js
const esbuild = require('esbuild');

const isWatchMode = process.argv.includes('--watch');

const buildOptions = {
  entryPoints: ['app/javascript/application.js'],
  bundle: true,
  outdir: 'app/assets/builds',
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.svg': 'file',
    '.jpeg': 'file',
    '.gif': 'file',
    '.tiff': 'file',
    '.ico': 'file',
    '.eot': 'file',
    '.otf': 'file',
    '.ttf': 'file',
    '.woff': 'file',
    '.woff2': 'file',
  },
  publicPath: '/assets/',
  sourcemap: true,  // Inclui sourcemaps para facilitar o debugging
};

// Função para rodar o build
const runBuild = async () => {
  if (isWatchMode) {
    console.log('Running in watch mode...');
    const ctx = await esbuild.context(buildOptions);
    await ctx.watch();
  } else {
    console.log('Running build...');
    await esbuild.build(buildOptions);
  }
};

runBuild().catch(() => process.exit(1));
