require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "SkoobyDude";
const description = "SkoobyDude is a one a kind NFT collection inspired by the hit cartoon.";
const baseUri = "ipfs://uritoreplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 2400,
    layersOrder: [
      { name: "girl base" },
      { name: "girl Eyes" },
      { name: "girl eyebrows" },
      { name: "girl nose" },
      { name: "girl mouth" },
      { name: "girl clothes" },
      { name: "girl 1 hair" },
      { name: "girl 1 accessories" },
    ],
  },{
    growEditionSizeTo: 3400,
    layersOrder: [
      { name: "girl base" },
      { name: "girl Eyes" },
      { name: "girl eyebrows" },
      { name: "girl nose" },
      { name: "girl mouth" },
      { name: "girl clothes" },
      { name: "girl 2 hair" },
      { name: "girl 2 accessories" },
    ],
  },{
    growEditionSizeTo: 4200,
    layersOrder: [
      { name: "girl base" },
      { name: "girl Eyes" },
      { name: "girl eyebrows" },
      { name: "girl nose" },
      { name: "girl mouth" },
      { name: "girl special suits" },
      { name: "girl 2 accessories" },
    ],
  },{
    growEditionSizeTo: 4600,
    layersOrder: [
      { name: "girl base" },
      { name: "girl Eyes" },
      { name: "girl eyebrows" },
      { name: "girl nose" },
      { name: "girl mouth" },
      { name: "girl clothes" },
      { name: "girl 3 hair" },
      { name: "girl 3 accessories" },
    ],
  },{
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "girl base" },
      { name: "girl Eyes" },
      { name: "girl eyebrows" },
      { name: "girl nose" },
      { name: "girl mouth" },
      { name: "girl clothes" },
      { name: "girl special hats" },
    ],
  },{
    growEditionSizeTo: 6000,
    layersOrder: [
      { name: "godzilla base" },
      { name: "godzilla mouth" },
      { name: "godzilla eyes" },
      { name: "godzilla hair" },
      { name: "godzilla clothes" },
      { name: "godzilla accessories" },
    ],
  },{
    growEditionSizeTo: 6800,
    layersOrder: [
      { name: "godzilla base" },
      { name: "godzilla mouth" },
      { name: "godzilla eyes" },
      { name: "godzilla suits"},
      { name: "godzilla glasses" },
    ],
  },{
    growEditionSizeTo: 8400,
    layersOrder: [
      { name: "godzilla base" },
      { name: "godzilla mouth" },
      { name: "godzilla eyes" },
      { name: "godzilla hats" },
      { name: "godzilla clothes" },
    ],
  },{
    growEditionSizeTo: 8800,
    layersOrder: [
      { name: "godzilla base" },
      { name: "godzilla mouth" },
      { name: "godzilla eyes" },
      { name: "godzilla clothes" },
      { name: "godzilla nh accessories" },
    ],
  },{
    growEditionSizeTo: 9600,
    layersOrder: [
      { name: "godzilla base" },
      { name: "godzilla fins" },
      { name: "godzilla mouth" },
      { name: "godzilla eyes" },
      { name: "godzilla hair" },
      { name: "godzilla accessories" },
    ],
  },{
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "godzilla base" },
      { name: "godzilla fins" },
      { name: "godzilla mouth" },
      { name: "godzilla eyes" },
      { name: "godzilla accessories" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://skoobydude.io", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'SkoobyDude';
const CONTRACT_SYMBOL = 'SKD';
const METADATA_UPDATABLE = false; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x0C0B2b5db7A5324966249238a554fCC70a365297';
const TREASURY_ADDRESS = '0x0C0B2b5db7A5324966249238a554fCC70a365297';
const MAX_SUPPLY = 10000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 115.59090068429812; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-06-27T16:00:00+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-06-20T16:00:00+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x0C0B2b5db7A5324966249238a554fCC70a365297"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x1ab96E29F985F175a76E721B1d7fB37Ba5E96dE6","0x066a4Dbbbe048429e5AEAF961b61f2648f6e3F7c","0xb3bbB687B8206a6122060E5C7fA8C0754b689027","0x9cfB0e53775ad9b7c7A19BF7c771ceE7874cA7Ba","0x99Bf29f16d53a34d05B0E5327c3689e26fd4034B","0x5c3d28b3867876881398925dc191da706058996d","0x98DC78593a790052fa539EcF0ed2Eb4fe4A1D61b","0x9c0E48EccC35fCd0052B44a8319bB78af6019A12","0xd7c14fA1a0798D9988442d85975b4F968a5bD5e9","0xc8214128a55786Ec4c07aA0139fE4Eb45C2d1ad1","0x02667c75CeB9E932ca46c755367a5D3D2BaD0D42","0xa809EF2Eeea6B6d53E57367A21690032D6689AFb","0x1a025EAea3b631Ac92Fec05b58b8A988808244fc","0xe5c863502c7Db17f829d63406Fbf9ACdD3Bd0e86","0x205a971a8C496BfbCbaab63ca510041b1af32143","0xC54F0adB8468b6D301092c09A1F3c0d52FBaF618","0x4021fEAcF6d2638c652dB49c2791C55830d2FABe","0x644bc4ccbDa7741C01D2D0A9992f0d87F8326DfB","0x73E265f5a369d40fb1E957FD7E3ba1310e16DCbA","0x6083231bfc47921ad8109dd3646a6a9e52dcfd2f","0x81b31865d2aef2ddaf45d22531bdec099f63054f","0x5428f2D2847Bf5b397Bed387919Ea4A87c2853e7","0x6b7c81bDA9199B4258a30641Ece5A69de9b7c83D","0x5a6ebcce974b392fbb58998d3d48a0bd4466035d","0x2f4A43d5862D1cC8294E27Db1EBFDD2c018622d0","0x884B9892791c42318AD75F1dFd2d9eBabAbAE933","0x130ef3fc96AB350Af3667c1A598f15Fdf247359a","0x397465a975255aadBAd3Dfe4E4F5b70dC1544fBF","0x2394e2AF12FF9a97Ef77704caC8Ff913F17297dc","0x4D9Fb67001e117380D7a4F3c20CEb5A4c03459cB","0xE53392035b78b819D7619f0Fc49A070681BdDbd6","0x102d6093EfEF4cda25d647409fF5B3bfc16757d8","0xDB1d159A82a1EE6cABf2657EaD2e5CB24Fb5ddbE","0xB2027B52d7Ff46E29CDA6C1011AE406e35677AF0","0x104eA50ce926b242e3342C3Fa425E37000A130Bc","0x9F943105355EcC32203E47822716130bBA1FE306","0x07e50E9180640c94B26E138561a3150Ba8f81256","0xea4fb360A52455751e4864FCb584e98B2Aa2D3D9","0x350460bD73d8F005C246e0b8e89825e6eBd380D3","0x3a8A5A2E8b9C524CC90c484D2d7837247BC6Ea17","0x345055deFD846ff2b3a6E72ca6e59D0F5234C966","0xad5b352EC7E149b4509BCFe994a506B6cb25129E","0xa511718B29A498A25C614Da0AEbd4eD20F955E4A","0xc408D328ba0990070EFD1053B70fc12ebE4dD3AB","0x634fa36e48ded227d5ccea1753590cc99b28031a","0xE3f6dF2A86c56EfBf2548A0719AE5534F1C40010","0xE3f6dF2A86c56EfBf2548A0719AE5534F1C40010","0x9e2d9a0dc393b100b5407bd299487d64b5f9a173","0x2da35c478b412a821Df4dD3AEe0670b10bA70167","0xCC2cA9BeFf81e1EcC8257352C2E0E6022300e890","0x26b26512621627C1380ED79E83820C34b68F2676","0xf5BCC258EAB5Fddc8eaD53c8dEA5232F46c9649F","0x3325f78D02be28e5f48Cb83FC31844f322E51621","0xfFBebE9C2e1553d0b877E76eb8a327C6FdF44B3E"]; //haha

// ** OPTIONAL **
let CONTRACT_ADDRESS = ""; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "REPLACE THIS"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/QmUf9tDbkqnfHkQaMdFWSGAeXwVXWA61pFED7ypx4hcsfh"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
