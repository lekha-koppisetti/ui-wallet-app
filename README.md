# UIWalletApp

Ui interfaces to save wallet and perform transactions on wallet

Page 1 - Form 1 to enter the details which will create the wallet and one another form to perform transactions

page 2 - Transactions list with pagination and sorting

## hostedUrl 

 `https://ui-wallet-service-txho7xwdwq-el.a.run.app/`

## preRequistes

- `install node v16.13.0 and angular cli`

- `npm i`

-  `npm run build` to build the project

- `npm to start` - starts server in http://localhost:4200/

  or

- ` Install Docker `

- Run `docker build -t ui-wallet-app .`

- RUN `docker run -p 4200:4200 ui-wallet-app` to start server in http://localhost:4200/

## Deployment
- `gcloud auth login`

- `docker build -t ui-wallet-app .`

- `docker run -p 4200:4200 ui-wallet-app`

- `docker tag ui-wallet-app:latest gcr.io/original-voyage-381915/ui-wallet-service:1`

- `docker push gcr.io/original-voyage-381915/ui-wallet-service:1` 

- `gcloud run deploy ui-wallet-service --image gcr.io/original-voyage-381915/ui-wallet-service:1 --platform managed --region asia-south1 --project original-voyage-381915`
