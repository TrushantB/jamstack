# JAMSTACK WEBSITE

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to run json-server ?

### Rename example.env to .env

Run the json server:(Make sure no any server using port 5000)

```bash
npx json-server db.json --watch -p 5000
```
