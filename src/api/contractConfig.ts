export const networkConfig: Record<string, Record<string, string>> =
{
  mainnet: {
    linkToken: "0x514910771af9ca656af840dff83e8264ecf986ca",
    functionsOracleProxy: "",
    functionsBillingRegistryProxy: "",
    functionsPublicKey: ""
  },
  "0xaa36a7": {
    linkToken: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    functionsOracleProxy: "0x649a2C205BE7A3d5e99206CEEFF30c794f0E31EC",
    functionsBillingRegistryProxy: "0x3c79f56407DCB9dc9b852D139a317246f43750Cc",
    functionsPublicKey:
      "a30264e813edc9927f73e036b7885ee25445b836979cb00ef112bc644bd16de2db866fa74648438b34f52bb196ffa386992e94e0a3dc6913cee52e2e98f1619c",
  },
  polygon: {
    linkToken: "0xb0897686c545045afc77cf20ec7a532e3120e0f1",
    functionsOracleProxy: "",
    functionsBillingRegistryProxy: "",
    functionsPublicKey: ""
  },
  "0x13881": {
    linkToken: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
    functionsOracleProxy: "0xeA6721aC65BCeD841B8ec3fc5fEdeA6141a0aDE4",
    functionsBillingRegistryProxy: "0xEe9Bf52E5Ea228404bB54BCFbbDa8c21131b9039",
    functionsPublicKey:
      "a30264e813edc9927f73e036b7885ee25445b836979cb00ef112bc644bd16de2db866fa74648438b34f52bb196ffa386992e94e0a3dc6913cee52e2e98f1619c",
  },
  '0x501': {
    linkToken: '0x09fBA6F441dbD890578802f08574Ac488c4D210b',
    functionsOracleProxy: '0x430f425B6628Dd9E73Ee780B061343AacdB8998d',
    functionsBillingRegistryProxy: '0x586c4f88aF8B347fb3D18Dbda4E069Cd794B8B2f',
    functionsPublicKey: '0x971f006163a12ee3383a00d7743334480d6b1c83fdf60497e0c520b16d1a4ee421cc61375679b63466156fee6f2f1da5a7e630ba0b1cddb2704ef907ead223db'
  }


}


export const abis = {
  linkToken: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "decimalPlaces",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "tokenName",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "tokenSymbol",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "totalTokensIssued",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "transferAndCall",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  functionsOracleProxy: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "node",
          "type": "address"
        }
      ],
      "name": "deleteNodePublicKey",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint32",
          "name": "gasLimit",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "gasPrice",
          "type": "uint256"
        }
      ],
      "name": "estimateCost",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "",
          "type": "uint96"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllNodePublicKeys",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        },
        {
          "internalType": "bytes[]",
          "name": "",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDONPublicKey",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRegistry",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "subscriptionId",
              "type": "uint64"
            },
            {
              "internalType": "address",
              "name": "client",
              "type": "address"
            },
            {
              "internalType": "uint32",
              "name": "gasLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint256",
              "name": "gasPrice",
              "type": "uint256"
            }
          ],
          "internalType": "struct FunctionsBillingRegistryInterface.RequestBilling",
          "name": "billing",
          "type": "tuple"
        }
      ],
      "name": "getRequiredFee",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "",
          "type": "uint96"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint32",
          "name": "gasLimit",
          "type": "uint32"
        }
      ],
      "name": "sendRequest",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "donPublicKey",
          "type": "bytes"
        }
      ],
      "name": "setDONPublicKey",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "node",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "publicKey",
          "type": "bytes"
        }
      ],
      "name": "setNodePublicKey",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "registryAddress",
          "type": "address"
        }
      ],
      "name": "setRegistry",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  functionsBillingRegistryProxy: [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "internalBalance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "externalBalance",
          "type": "uint256"
        }
      ],
      "name": "BalanceInvariantViolated",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CannotSelfTransfer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EmptySendersList",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "have",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "want",
          "type": "uint32"
        }
      ],
      "name": "GasLimitTooBig",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "IncorrectRequestID",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCalldata",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "consumer",
          "type": "address"
        }
      ],
      "name": "InvalidConsumer",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "linkWei",
          "type": "int256"
        }
      ],
      "name": "InvalidLinkWeiPrice",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidSubscription",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "proposedOwner",
          "type": "address"
        }
      ],
      "name": "MustBeRequestedOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "MustBeSubOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotAllowedToSetSenders",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotProposedOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OnlyCallableByOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OnlyCallableFromLink",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnerMustBeSet",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PaymentTooLarge",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PendingRequestExists",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Reentrant",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TooManyConsumers",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnauthorizedSender",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "senders",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "changedBy",
          "type": "address"
        }
      ],
      "name": "AuthorizedSendersChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint96",
          "name": "signerPayment",
          "type": "uint96"
        },
        {
          "indexed": false,
          "internalType": "uint96",
          "name": "transmitterPayment",
          "type": "uint96"
        },
        {
          "indexed": false,
          "internalType": "uint96",
          "name": "totalCost",
          "type": "uint96"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "name": "BillingEnd",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "subscriptionId",
              "type": "uint64"
            },
            {
              "internalType": "address",
              "name": "client",
              "type": "address"
            },
            {
              "internalType": "uint32",
              "name": "gasLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint256",
              "name": "gasPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "don",
              "type": "address"
            },
            {
              "internalType": "uint96",
              "name": "donFee",
              "type": "uint96"
            },
            {
              "internalType": "uint96",
              "name": "registryFee",
              "type": "uint96"
            },
            {
              "internalType": "uint96",
              "name": "estimatedCost",
              "type": "uint96"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct FunctionsBillingRegistry.Commitment",
          "name": "commitment",
          "type": "tuple"
        }
      ],
      "name": "BillingStart",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "maxGasLimit",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "stalenessSeconds",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "gasAfterPaymentCalculation",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "fallbackWeiPerUnitLink",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "gasOverhead",
          "type": "uint32"
        }
      ],
      "name": "ConfigSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "FundsRecovered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        }
      ],
      "name": "RequestTimedOut",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "SubscriptionCanceled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "consumer",
          "type": "address"
        }
      ],
      "name": "SubscriptionConsumerAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "consumer",
          "type": "address"
        }
      ],
      "name": "SubscriptionConsumerRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "SubscriptionCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldBalance",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newBalance",
          "type": "uint256"
        }
      ],
      "name": "SubscriptionFunded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "SubscriptionOwnerTransferRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "SubscriptionOwnerTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "MAX_CONSUMERS",
      "outputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "name": "acceptSubscriptionOwnerTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "consumer",
          "type": "address"
        }
      ],
      "name": "addConsumer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "cancelSubscription",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "createSubscription",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "gasLimit",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "gasPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint96",
          "name": "donFee",
          "type": "uint96"
        },
        {
          "internalType": "uint96",
          "name": "registryFee",
          "type": "uint96"
        }
      ],
      "name": "estimateCost",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "",
          "type": "uint96"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "response",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "err",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "transmitter",
          "type": "address"
        },
        {
          "internalType": "address[31]",
          "name": "signers",
          "type": "address[31]"
        },
        {
          "internalType": "uint8",
          "name": "signerCount",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "reportValidationGas",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "initialGas",
          "type": "uint256"
        }
      ],
      "name": "fulfillAndBill",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAuthorizedSenders",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getConfig",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "maxGasLimit",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "stalenessSeconds",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "gasAfterPaymentCalculation",
          "type": "uint256"
        },
        {
          "internalType": "int256",
          "name": "fallbackWeiPerUnitLink",
          "type": "int256"
        },
        {
          "internalType": "uint32",
          "name": "gasOverhead",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "linkAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "linkPriceFeed",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentsubscriptionId",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRequestConfig",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        },
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "subscriptionId",
              "type": "uint64"
            },
            {
              "internalType": "address",
              "name": "client",
              "type": "address"
            },
            {
              "internalType": "uint32",
              "name": "gasLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint256",
              "name": "gasPrice",
              "type": "uint256"
            }
          ],
          "internalType": "struct FunctionsBillingRegistryInterface.RequestBilling",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "getRequiredFee",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "",
          "type": "uint96"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "name": "getSubscription",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "balance",
          "type": "uint96"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "consumers",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "name": "getSubscriptionOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "link",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "linkEthFeed",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "isAuthorizedSender",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "onTokenTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint96",
          "name": "amount",
          "type": "uint96"
        }
      ],
      "name": "oracleWithdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "name": "ownerCancelSubscription",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "name": "pendingRequestExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "recoverFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "consumer",
          "type": "address"
        }
      ],
      "name": "removeConsumer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "requestSubscriptionOwnerTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "senders",
          "type": "address[]"
        }
      ],
      "name": "setAuthorizedSenders",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "maxGasLimit",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "stalenessSeconds",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "gasAfterPaymentCalculation",
          "type": "uint256"
        },
        {
          "internalType": "int256",
          "name": "fallbackWeiPerUnitLink",
          "type": "int256"
        },
        {
          "internalType": "uint32",
          "name": "gasOverhead",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "requestTimeoutSeconds",
          "type": "uint32"
        }
      ],
      "name": "setConfig",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "subscriptionId",
              "type": "uint64"
            },
            {
              "internalType": "address",
              "name": "client",
              "type": "address"
            },
            {
              "internalType": "uint32",
              "name": "gasLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint256",
              "name": "gasPrice",
              "type": "uint256"
            }
          ],
          "internalType": "struct FunctionsBillingRegistryInterface.RequestBilling",
          "name": "billing",
          "type": "tuple"
        }
      ],
      "name": "startBilling",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "requestIdsToTimeout",
          "type": "bytes32[]"
        }
      ],
      "name": "timeoutRequests",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  consumer: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "EmptyArgs",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EmptySecrets",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EmptySource",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RequestIsAlreadyPending",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RequestIsNotPending",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SenderIsNotRegistry",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "result",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "err",
          "type": "bytes"
        }
      ],
      "name": "OCRResponse",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "RequestFulfilled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "RequestSent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "oracleAddress",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        }
      ],
      "name": "addSimulatedRequestId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "enum Functions.Location",
              "name": "codeLocation",
              "type": "uint8"
            },
            {
              "internalType": "enum Functions.Location",
              "name": "secretsLocation",
              "type": "uint8"
            },
            {
              "internalType": "enum Functions.CodeLanguage",
              "name": "language",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "source",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "secrets",
              "type": "bytes"
            },
            {
              "internalType": "string[]",
              "name": "args",
              "type": "string[]"
            }
          ],
          "internalType": "struct Functions.Request",
          "name": "req",
          "type": "tuple"
        },
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "uint32",
          "name": "gasLimit",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "gasPrice",
          "type": "uint256"
        }
      ],
      "name": "estimateCost",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "",
          "type": "uint96"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "source",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "secrets",
          "type": "bytes"
        },
        {
          "internalType": "enum Functions.Location",
          "name": "secretsLocation",
          "type": "uint8"
        },
        {
          "internalType": "string[]",
          "name": "args",
          "type": "string[]"
        },
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "uint32",
          "name": "gasLimit",
          "type": "uint32"
        }
      ],
      "name": "executeRequest",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDONPublicKey",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "response",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "err",
          "type": "bytes"
        }
      ],
      "name": "handleOracleFulfillment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestError",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestRequestId",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestResponse",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        }
      ],
      "name": "updateOracleAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}

export const consumer_bytecode = "0x60806040523480156200001157600080fd5b5060405162001e1638038062001e16833981016040819052620000349162000199565b600080546001600160a01b0319166001600160a01b038316178155339081906001600160a01b038216620000af5760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600280546001600160a01b0319166001600160a01b0384811691909117909155811615620000e257620000e281620000ec565b50505050620001cb565b6001600160a01b038116331415620001475760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401620000a6565b600380546001600160a01b0319166001600160a01b03838116918217909255600254604051919216907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b600060208284031215620001ac57600080fd5b81516001600160a01b0381168114620001c457600080fd5b9392505050565b611c3b80620001db6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063d22b224a11610081578063f2fde38b1161005b578063f2fde38b146101a0578063f7023bb6146101b3578063fffeb84e146101c657600080fd5b8063d22b224a14610155578063d328a91e14610168578063d4b391751461017057600080fd5b806379ba5097116100b257806379ba50971461011d5780638da5cb5b14610125578063bef3a2f01461014057600080fd5b80630ca76175146100d95780631aa46f59146100ee57806330bda99d1461010a575b600080fd5b6100ec6100e7366004611540565b6101ce565b005b6100f760045481565b6040519081526020015b60405180910390f35b6100ec6101183660046114fb565b610274565b6100ec61028a565b6002546040516001600160a01b039091168152602001610101565b610148610344565b6040516101019190611885565b6100f761016336600461161b565b6103d2565b610148610542565b61018361017e366004611719565b6105e0565b6040516bffffffffffffffffffffffff9091168152602001610101565b6100ec6101ae3660046114c1565b610676565b6100ec6101c13660046114c1565b61068a565b6101486106b0565b60008381526001602052604090205483906001600160a01b03163314610220576040517fa0c5ec6300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008181526001602052604080822080546001600160a01b03191690555182917f85e1543bf2f84fe80c6badbce3648c8539ad1df4d2b3d822938ca0538be727e691a261026e8484846106bd565b50505050565b61027c610724565b6102868282610780565b5050565b6003546001600160a01b031633146102e95760405162461bcd60e51b815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e65720000000000000000000060448201526064015b60405180910390fd5b600280546001600160a01b0319808216339081179093556003805490911690556040516001600160a01b03909116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6005805461035190611b26565b80601f016020809104026020016040519081016040528092919081815260200182805461037d90611b26565b80156103ca5780601f1061039f576101008083540402835291602001916103ca565b820191906000526020600020905b8154815290600101906020018083116103ad57829003601f168201915b505050505081565b60006103dc610724565b6104166040805160c08101909152806000815260200160008152602001600081526020016060815260200160608152602001606081525090565b61045d6000808d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879594939250506108009050565b871561050657600087600181111561047757610477611bae565b14156104c4576104bf89898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085939250506108949050565b610506565b61050689898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085939250506108d89050565b8415610520576105206105198688611aed565b8290610902565b600061052d828686610942565b60048190559c9b505050505050505050505050565b60008054604080517fd328a91e00000000000000000000000000000000000000000000000000000000815290516060936001600160a01b039093169263d328a91e9260048082019391829003018186803b15801561059f57600080fd5b505afa1580156105b3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105db91908101906115ad565b905090565b600080546001600160a01b031663d227d245856105fc88610ab4565b86866040518563ffffffff1660e01b815260040161061d94939291906118f6565b60206040518083038186803b15801561063557600080fd5b505afa158015610649573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066d919061182b565b95945050505050565b61067e610724565b61068781610d4a565b50565b610692610724565b600080546001600160a01b0319166001600160a01b03831617905550565b6006805461035190611b26565b81516106d090600590602085019061128e565b5080516106e490600690602084019061128e565b50827f7bab0ec163b5c132c72b8146ac4d6e067e82ed58f8b131150aa71c92589115628383604051610717929190611898565b60405180910390a2505050565b6002546001600160a01b0316331461077e5760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e65720000000000000000000060448201526064016102e0565b565b60008181526001602052604090205481906001600160a01b0316156107d1576040517f8b457ad200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50600090815260016020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b8051610838576040517f22ce3edd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8383600181111561084b5761084b611bae565b9081600181111561085e5761085e611bae565b9052506040840182801561087457610874611bae565b9081801561088457610884611bae565b9052506060909301929092525050565b80516108b35760405163e889636f60e01b815260040160405180910390fd5b6020820160005b908160018111156108cd576108cd611bae565b905250608090910152565b80516108f75760405163e889636f60e01b815260040160405180910390fd5b6020820160016108ba565b805161093a576040517ffe936cb700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a090910152565b6000805481906001600160a01b03166328242b048561096088610ab4565b866040518463ffffffff1660e01b815260040161097f939291906118bd565b602060405180830381600087803b15801561099957600080fd5b505af11580156109ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d19190611527565b905060008054906101000a90046001600160a01b03166001600160a01b0316635ab1bd536040518163ffffffff1660e01b815260040160206040518083038186803b158015610a1f57600080fd5b505afa158015610a33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5791906114de565b60008281526001602052604080822080546001600160a01b0319166001600160a01b039490941693909317909255905182917f1131472297a800fee664d1d89cfa8f7676ff07189ecc53f80bbb5f4969099db891a2949350505050565b6060610ad3604051806040016040528060608152602001600081525090565b610adf81610100610df5565b5060408051808201909152600c81527f636f64654c6f636174696f6e00000000000000000000000000000000000000006020820152610b1f908290610e60565b8251610b3d906001811115610b3657610b36611bae565b8290610e7c565b60408051808201909152600881527f6c616e67756167650000000000000000000000000000000000000000000000006020820152610b7c908290610e60565b6040830151610b93908015610b3657610b36611bae565b60408051808201909152600681527f736f7572636500000000000000000000000000000000000000000000000000006020820152610bd2908290610e60565b6060830151610be2908290610e60565b60a08301515115610c915760408051808201909152600481527f61726773000000000000000000000000000000000000000000000000000000006020820152610c2c908290610e60565b610c3581610ea2565b60005b8360a0015151811015610c8757610c758460a001518281518110610c5e57610c5e611bc4565b602002602001015183610e6090919063ffffffff16565b80610c7f81611b5b565b915050610c38565b50610c9181610ead565b60808301515115610d435760408051808201909152600f81527f736563726574734c6f636174696f6e00000000000000000000000000000000006020820152610cdb908290610e60565b610cf483602001516001811115610b3657610b36611bae565b60408051808201909152600781527f73656372657473000000000000000000000000000000000000000000000000006020820152610d33908290610e60565b6080830151610d43908290610eb8565b5192915050565b6001600160a01b038116331415610da35760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016102e0565b600380546001600160a01b0319166001600160a01b03838116918217909255600254604051919216907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b604080518082019091526060815260006020820152610e15602083611b76565b15610e3d57610e25602083611b76565b610e30906020611ad6565b610e3a90836119b4565b91505b506020808301829052604080518085526000815283019091019052815b92915050565b610e6d8260038351610ec1565b610e778282610fd0565b505050565b67ffffffffffffffff811115610e96576102868282610ffe565b61028682600083610ec1565b610687816004611035565b610687816007611035565b610e6d82600283515b60178167ffffffffffffffff1611610ee65761026e8360e0600585901b168317611046565b60ff8167ffffffffffffffff1611610f2457610f0d836018611fe0600586901b1617611046565b5061026e8367ffffffffffffffff8316600161106b565b61ffff8167ffffffffffffffff1611610f6357610f4c836019611fe0600586901b1617611046565b5061026e8367ffffffffffffffff8316600261106b565b63ffffffff8167ffffffffffffffff1611610fa457610f8d83601a611fe0600586901b1617611046565b5061026e8367ffffffffffffffff8316600461106b565b610fb983601b611fe0600586901b1617611046565b5061026e8367ffffffffffffffff8316600861106b565b604080518082019091526060815260006020820152610ff783846000015151848551611099565b9392505050565b6110098260c2611046565b50610286828260405160200161102191815260200190565b604051602081830303815290604052610eb8565b610e7782601f611fe0600585901b16175b604080518082019091526060815260006020820152610ff78384600001515184611183565b6040805180820190915260608152600060208201526110918485600001515185856111df565b949350505050565b60408051808201909152606081526000602082015282518211156110bc57600080fd5b60208501516110cb83866119b4565b11156110fe576110fe856110ee876020015187866110e991906119b4565b611260565b6110f9906002611ab7565b611277565b60008086518051876020830101935080888701111561111d5787860182525b505050602084015b6020841061115d578051825261113c6020836119b4565b91506111496020826119b4565b9050611156602085611ad6565b9350611125565b51815160001960208690036101000a019081169019919091161790525083949350505050565b604080518082019091526060815260006020820152836020015183106111b8576111b884856020015160026110f99190611ab7565b8351805160208583010184815350808514156111d5576001810182525b5093949350505050565b604080518082019091526060815260006020820152602085015161120385846119b4565b111561121757611217856110ee86856119b4565b6000600161122784610100611a0f565b6112319190611ad6565b90508551838682010185831982511617815250805184870111156112555783860181525b509495945050505050565b600081831115611271575081610e5a565b50919050565b81516112838383610df5565b5061026e8382610fd0565b82805461129a90611b26565b90600052602060002090601f0160209004810192826112bc5760008555611302565b82601f106112d557805160ff1916838001178555611302565b82800160010185558215611302579182015b828111156113025782518255916020019190600101906112e7565b5061130e929150611312565b5090565b5b8082111561130e5760008155600101611313565b600067ffffffffffffffff8084111561134257611342611bda565b8360051b602061135381830161195b565b86815293508084018583810189101561136b57600080fd5b60009350835b888110156113a657813586811115611387578586fd5b6113938b828b0161141c565b8452509183019190830190600101611371565b5050505050509392505050565b600082601f8301126113c457600080fd5b610ff783833560208501611327565b60008083601f8401126113e557600080fd5b50813567ffffffffffffffff8111156113fd57600080fd5b60208301915083602082850101111561141557600080fd5b9250929050565b600082601f83011261142d57600080fd5b813561144061143b8261198c565b61195b565b81815284602083860101111561145557600080fd5b816020850160208301376000918101602001919091529392505050565b80356001811061148157600080fd5b919050565b80356002811061148157600080fd5b803563ffffffff8116811461148157600080fd5b803567ffffffffffffffff8116811461148157600080fd5b6000602082840312156114d357600080fd5b8135610ff781611bf0565b6000602082840312156114f057600080fd5b8151610ff781611bf0565b6000806040838503121561150e57600080fd5b823561151981611bf0565b946020939093013593505050565b60006020828403121561153957600080fd5b5051919050565b60008060006060848603121561155557600080fd5b83359250602084013567ffffffffffffffff8082111561157457600080fd5b6115808783880161141c565b9350604086013591508082111561159657600080fd5b506115a38682870161141c565b9150509250925092565b6000602082840312156115bf57600080fd5b815167ffffffffffffffff8111156115d657600080fd5b8201601f810184136115e757600080fd5b80516115f561143b8261198c565b81815285602083850101111561160a57600080fd5b61066d826020830160208601611afa565b600080600080600080600080600060c08a8c03121561163957600080fd5b893567ffffffffffffffff8082111561165157600080fd5b61165d8d838e016113d3565b909b50995060208c013591508082111561167657600080fd5b6116828d838e016113d3565b909950975087915061169660408d01611486565b965060608c01359150808211156116ac57600080fd5b818c0191508c601f8301126116c057600080fd5b8135818111156116cf57600080fd5b8d60208260051b85010111156116e457600080fd5b6020830196508095505050506116fc60808b016114a9565b915061170a60a08b01611495565b90509295985092959850929598565b6000806000806080858703121561172f57600080fd5b843567ffffffffffffffff8082111561174757600080fd5b9086019060c0828903121561175b57600080fd5b611763611932565b61176c83611486565b815261177a60208401611486565b602082015261178b60408401611472565b60408201526060830135828111156117a257600080fd5b6117ae8a82860161141c565b6060830152506080830135828111156117c657600080fd5b6117d28a82860161141c565b60808301525060a0830135828111156117ea57600080fd5b6117f68a8286016113b3565b60a083015250955061180d915050602086016114a9565b925061181b60408601611495565b9396929550929360600135925050565b60006020828403121561183d57600080fd5b81516bffffffffffffffffffffffff81168114610ff757600080fd5b60008151808452611871816020860160208601611afa565b601f01601f19169290920160200192915050565b602081526000610ff76020830184611859565b6040815260006118ab6040830185611859565b828103602084015261066d8185611859565b67ffffffffffffffff841681526060602082015260006118e06060830185611859565b905063ffffffff83166040830152949350505050565b67ffffffffffffffff851681526080602082015260006119196080830186611859565b63ffffffff949094166040830152506060015292915050565b60405160c0810167ffffffffffffffff8111828210171561195557611955611bda565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561198457611984611bda565b604052919050565b600067ffffffffffffffff8211156119a6576119a6611bda565b50601f01601f191660200190565b600082198211156119c7576119c7611b98565b500190565b600181815b80851115611a075781600019048211156119ed576119ed611b98565b808516156119fa57918102915b93841c93908002906119d1565b509250929050565b6000610ff78383600082611a2557506001610e5a565b81611a3257506000610e5a565b8160018114611a485760028114611a5257611a6e565b6001915050610e5a565b60ff841115611a6357611a63611b98565b50506001821b610e5a565b5060208310610133831016604e8410600b8410161715611a91575081810a610e5a565b611a9b83836119cc565b8060001904821115611aaf57611aaf611b98565b029392505050565b6000816000190483118215151615611ad157611ad1611b98565b500290565b600082821015611ae857611ae8611b98565b500390565b6000610ff7368484611327565b60005b83811015611b15578181015183820152602001611afd565b8381111561026e5750506000910152565b600181811c90821680611b3a57607f821691505b6020821081141561127157634e487b7160e01b600052602260045260246000fd5b6000600019821415611b6f57611b6f611b98565b5060010190565b600082611b9357634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461068757600080fdfea26469706673582212201e24c555937b9e0342aa88d12d249583be5da883e35085c144de62e8b161a77c64736f6c63430008070033"
