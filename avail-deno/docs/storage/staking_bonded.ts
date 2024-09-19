import { SDK } from "https://raw.githubusercontent.com/availproject/avail/main/avail-deno/src/sdk.ts";

const providerEndpoint = "ws://127.0.0.1:9944";
const sdk = await SDK.New(providerEndpoint);

const key = "5EYCAe5ijiYfAXEth5DCfmQ9jnv4BFmdonKpbxwrc2nAw5uj";
const value = await sdk.api.query.staking.bonded(key);
console.log(value.toHuman());

Deno.exit();