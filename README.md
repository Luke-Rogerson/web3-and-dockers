# Web3 and dockers

## What's this?

Show the latest block information for the Ethereum (ETH) and Polygon (MATIC) blockchains.

## Getting started

1. Obtain API keys from https://www.infura.io/ and https://www.alchemy.com/. They will be used to fetch from Ethereum mainnet and Polygon respectively. We need to use two providers as Infura [now requires payment for Polygon access](https://docs.infura.io/infura/networks/polygon-pos/how-to/choose-a-network).
2. Rename `.env_example` to `.env` and add your two API keys to this file.
3. Run `make start` to start API servers. `make stop` will stop the servers.

## Usage

Navigate to "http://localhost:5000/GetData" to view ETH block info and http://localhost:5001/GetData to view MATIC block info.
