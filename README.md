# Market Snapshot API

A Node.js API that provides market snapshots using Alpha Vantage data, cached with Redis.

## Deployment

### Prerequisites

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.
- An Alpha Vantage API Key.

### Deployment to Vercel

1.  **Push to GitHub:** Ensure your code is pushed to a GitHub repository.
2.  **Import to Vercel:** Go to [Vercel](https://vercel.com/new), select your repository, and click "Import".
3.  **Configure Environment Variables:**
    In the Vercel project settings, add the following variables:
    - `ALPHA_VANTAGE_KEY`: Your API key.
    - `UPSTASH_REDIS_REST_URL`: Check your Upstash console.
    - `UPSTASH_REDIS_REST_TOKEN`: Check your Upstash console.

    _Alternatively, you can still use `REDIS_HOST`, `REDIS_PORT`, etc. for other Redis providers, but Upstash is recommended for serverless._

4.  **Deploy:** Vercel will automatically build and deploy your application.

### Running with Docker

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd market-snapshot-api
    ```

2.  **Environment Configuration:**
    Create a `.env` file in the root directory (if it doesn't exist) based on the example:

    ```env
    ALPHA_VANTAGE_KEY=your_api_key_here
    ```

    Note: `REDIS_HOST` and `REDIS_PORT` are automatically handled by Docker Compose.

3.  **Build and Run:**
    ```bash
    docker-compose up --build
    ```
    The API will be available at `http://localhost:3000`.

### Stopping the Application

To stop the containers:

```bash
docker-compose down
```

## API Endpoints

- `GET /api/snapshot?symbol=IBM` - Get market snapshot for a symbol.

## Local Development (without Docker)

1.  Start a Redis instance locally.
2.  Install dependencies: `npm install`
3.  Run in development mode: `npm run dev`
