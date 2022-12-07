const { AccountId, PrivateKey, Client } = require('@hashgraph/sdk');
const { transferHbars } = require('../services/hederaAccountServices');

require('dotenv').config({path: __dirname + '/../.env'});

const operatorAccountId = AccountId.fromString(process.env.OPERATOR_ACCOUNT_ID);
const operatorPrivateKey = PrivateKey.fromString(process.env.OPERATOR_PRIVATE_KEY);

const client = Client.forTestnet().setOperator(operatorAccountId, operatorPrivateKey);

const hbarTransferExample = async () => {
    
    // Step 1: Create a new testnet account using the Hedera Portal
    // https://portal.hedera.com/
    // Step 2: Add account ID and private key to the .env file

    // Transfer HBARs to an account
    console.log("Step 3: Transfer HBARs to an account");
    await transferHbars(operatorAccountId, "0.0.26300235", 200, client);



};

hbarTransferExample();