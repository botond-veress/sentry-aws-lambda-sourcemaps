import { withSentry } from './with-sentry';

export const handler = withSentry(async () => {
  throw new Error(`Some error.`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      random: Math.random()
    })
  };
});
