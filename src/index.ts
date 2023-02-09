import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import Web3 from "web3";

dotenv.config();

const app: Express = express();
const port = process.env.NODE_PORT;

const web3 = new Web3(
  `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
);

app.get("/GetData", async (_: Request, res: Response) => {
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
