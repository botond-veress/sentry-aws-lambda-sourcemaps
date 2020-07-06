# Sentry sourcemaps in AWS lambda functions

## Install dependencies

```bash
yarn
```

## Deploy

```bash
SENTRY_DSN="YOUR_SENTRY_DSN" yarn serverless deploy --stage local
```

## Invoke the endpoint

Note: replace it with the endpoint that you got after deployment

```bash
curl -v https://xxxxxxxxxx.execute-api.eu-central-1.amazonaws.com/local/random
```

## Check the error reported in Sentry
