import openapiV1 from './schemas/v1.2/apiDeclaration.json';
import openapiV2 from './schemas/v2.0/schema.json';
import openapiV3 from './schemas/v3.0/schema.json';
import openapiV31 from './schemas/v3.1/schema.json';

export const openapi = {
  v1: openapiV1,
  v2: openapiV2,
  v3: openapiV3,
  v31: openapiV31,
} as const;
