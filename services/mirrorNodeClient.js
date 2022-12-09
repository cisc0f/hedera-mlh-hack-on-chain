class MirrorNodeClient {
  url = "https://mainnet-public.mirrornode.hedera.com/";
  constructor(network) {
    if (network === "testnet") {
      this.url = "https://testnet.mirrornode.hedera.com/";
    } else if (network === "previewnet") {
      this.url = "https://previewnet.mirrornode.hedera.com/";
    }
  }

  async getAccountInfo(accountId) {
    // TO COMPLETE
  }
}


module.exports = { MirrorNodeClient };