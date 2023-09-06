import { Client } from "pg";

export async function createConnection() {
  const client = new Client();

  await client.connect();

  return client;
}
