import { Client, Account, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("68dff05a00306c14c905");

export const account = new Account(client);
export const databases = new Databases(client);

export default client;
export { ID };
