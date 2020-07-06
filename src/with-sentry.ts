import * as Sentry from '@sentry/node';

export const withSentry = <E>(handler: (event: E) => Promise<any>) => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN
  });

  return (event: E) => {
    return handler(event).catch(async (error) => {
      Sentry.captureException(error);

      await Sentry.flush(2000);

      return {
        statusCode: 500,
        body: JSON.stringify({
          message: `Something went wrong`
        })
      };
    });
  };
};
