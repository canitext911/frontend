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
  [ApiEndpointTypes.lookup.natural]: 'lookup',
  [ApiEndpointTypes.lookup.zip]: 'lookup/by-zip/',
  [ApiEndpointTypes.lookup.suggest]: 'lookup/suggest',
  [ApiEndpointTypes.location]: 'location',
};

/**
 * Fetch from API
 *
 * @param String endpoint
 * @param Object params
 * @param AbortController signal
 * @returns {Promise<any>}
 */
export async function get(endpoint = '', params = {}, signal = null) {
  const response = await fetch(`${ApiPrefix}${endpoint}?${new URLSearchParams(params)}`, {
    method: 'get',
    signal,
  });

  const json = await response.json();
  return json;
}

export default {
  get,
  ApiEndpointTypes,
  ApiEndpoints,
};
