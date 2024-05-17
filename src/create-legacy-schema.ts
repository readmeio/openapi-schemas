import fs from 'node:fs';

import asdf from './schemas/v3.1/schema.json';

const clone = structuredClone(asdf) as typeof asdf;

// @ts-expect-error: we're replacing the $dynamicRef with the following
// object so it should expect an error
clone.$defs.header.properties.schema = { type: ['object', 'boolean'] };

fs.writeFileSync('src/schemas/v3.1/legacy-schema.json', JSON.stringify(clone, null, 2));

console.log('legacy schema created!');
