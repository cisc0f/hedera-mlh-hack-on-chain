const { TransferTransaction, Hbar } = require("@hashgraph/sdk");

const transferHbars = async (operatorId, newAccountId, amount, client) => {

    // 1. Create HBAR transfer transaction (variable amount)
    const hbarTransfer = new TransferTransaction()
        .addHbarTransfer(operatorId, new Hbar(-amount)) // From account
        .addHbarTransfer(newAccountId, new Hbar(amount)) // To account

    // 2. Submit transaction to the Hedera Network
    const hbarTransferTx = await hbarTransfer.execute(client);
    // 3. Request receipt of transaction
    const hbarTransferRx = await hbarTransferTx.getReceipt(client);
    // 4. Get transaction status 
    const hbarTransferStatus = hbarTransferRx.status.toString();

    console.log("Transfer Transactions Status: " + hbarTransferStatus);

};

module.exports = { transferHbars };