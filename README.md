# Webhook Tester

A webhook testing server for local development, uses [express](https://www.npmjs.com/package/express/v/4.18.2)
for the web server and [ngrok](https://www.npmjs.com/package/ngrok/v/5.0.0-beta.2) for creating a publicly
accessible tunnel.

## Usage

Using this tool is a 2-step process.

## Step 01: Setup Web Server & Ngrok

Run the command below to start an express server on port 8080 and tunnel using `ngrok`:

```
npx github:hexbioc/webhook-tester
```

An `ngrok` URL will be printed to `stdout`. Use this URL in the next step.

## Step 02: Webhook Configuration

Configure the application that is expected to invoke the webhook with the `ngrok` URL from the previous
step along with the `/webhook` endpoint. The complete URL will look something like:

```
<ngrok-url>/webhook

Example: https://aaaa-000-000-000-000.in.ngrok.io/webhook
```

Once configured, all `POST` requests that arrive at this endpoint will be forwarded to the local express
server, and the corresponding request body, headers, and URL parameters for each request will be printed
to `stdout`.

*Note that body parsing will require the `Content-Type` header to be set to `application/json`.*
