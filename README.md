# UIWalletApp

Ui interfaces to save wallet and perform transactions on wallet

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment
- `gcloud auth login`

- `docker build -t ui-wallet-app .`

 docker run -p 4200:4200 ui-wallet-app

- `docker tag ui-wallet-app:latest gcr.io/original-voyage-381915/ui-wallet-service:1`

- `docker push gcr.io/original-voyage-381915/ui-wallet-service:1` 

- `gcloud run deploy ui-wallet-service --image gcr.io/original-voyage-381915/ui-wallet-service:1 --platform managed --region asia-south1 --project original-voyage-381915`