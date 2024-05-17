import fs from 'node:fs';

import asdf from './schemas/v3.1/schema.json';

// we gotta fix that type woof
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const clone = structuredClone(asdf) as any;

// we gotta make sure that this is the only actual change and that this change is actually correct
clone.$defs.header.properties.schema = { type: ['object', 'boolean'] };

fs.writeFileSync('src/schemas/v3.1/legacy-schema.json', JSON.stringify(clone, null, 2));

console.log('legacy schema created!');
