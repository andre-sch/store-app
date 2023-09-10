import { Client } from "pg";

export async function createConnection(): Promise<Client> {
  const client = new Client();

  await client.connect();

  return client;
}
