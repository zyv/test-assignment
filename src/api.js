import 'whatwg-fetch';

import config from './config';

export default async (endpoint) => {
  const response = await window.fetch(`${config.host}${endpoint}`, {
    headers: { Accept: 'application/json' },
  });

  if ((response.status >= 400) && (response.status < 600)) {
    throw new Error(`Http error: ${response.status}`);
  }

  return await response.json();
};
