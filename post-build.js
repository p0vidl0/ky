import fs from 'node:fs';
import path from 'node:path';

const types = [
	{ type: 'commonjs', name: 'cjs'},
	{ type: 'module', name: 'mjs'},
];

types.forEach(({ type, name }) => {
	const filePath = path.resolve(`./distribution/${name}/package.json`);
	fs.writeFileSync(filePath, JSON.stringify({ type, types: './index.d.ts' }, null, 4));
});
