import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import Web3 from "web3";

dotenv.config();

const app: Express = express();
const port = process.env.NODE_PORT;

const api_url = process.env.API_URL;
console.log(`Using API URL ${api_url}`);

const web3 = new Web3(process.env.API_URL!);

const isPolygon = api_url!.includes("polygon");

app.get("/GetData", async (_: Request, res: Response) => {
  console.info(
    isPolygon
      ? "Contacting MATIC mainnet via INFURA"
      : "Contacting ETH mainnet via alchemy"
  );

  let latestBlockNumber: number | null = null;

  try {
    latestBlockNumber = await web3.eth.getBlockNumber();
  } catch (error) {
    res.status(500).send("Error fetching latest block number: " + error);
  }

  try {
    res.json(await web3.eth.getBlock(latestBlockNumber!));
  } catch (error) {
    res.status(500).send("Error getting latest block information: " + error);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
