export const ApiPrefix = 'https://api.canitext911.us/v1/';

export const ApiEndpointTypes = {
  lookup: {
    natural: 'lookup.natural',
    zip: 'lookup.zip',
    suggest: 'lookup.suggest',
  },
  location: 'location',
};

export const ApiEndpoints = {
  [ApiEndpointTypes.lookup.natural]: 'lookup?search=',
  [ApiEndpointTypes.lookup.zip]: 'lookup/by-zip/',
  [ApiEndpointTypes.lookup.suggest]: 'lookup/suggest?search=',
  [ApiEndpointTypes.location]: 'location',
};

/**
 * Fetch from API
 *
 * @param endpoint
 * @param params
 * @returns {Promise<any>}
 */
export async function get(endpoint = '', params = {}) {
  const response = await fetch(`${ApiPrefix}${endpoint}${new URLSearchParams(params)}`);
  const json = await response.json();
  return json;
}

export default {
  get,
  ApiEndpointTypes,
  ApiEndpoints,
};
