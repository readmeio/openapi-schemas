import fs from 'node:fs';

import oas31 from './schemas/v3.1/schema.json';

const clone = structuredClone(oas31);

// @ts-expect-error: we're replacing the $dynamicRef with the following
// object so it should expect an error
clone.$defs.header.properties.schema = { type: ['object', 'boolean'] };

fs.writeFileSync('src/schemas/v3.1/legacy-schema.json', JSON.stringify(clone, null, 2));

console.log('legacy schema created!');
