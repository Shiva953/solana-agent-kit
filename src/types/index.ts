import { PublicKey } from "@solana/web3.js";

export interface Creator {
  address: string;
  percentage: number;
}

export interface CollectionOptions {
  name: string;
  uri: string;
  royaltyBasisPoints?: number;
  creators?: Creator[];
}

// Add return type interface
export interface CollectionDeployment {
  collectionAddress: PublicKey;
  signature: Uint8Array;
}

export interface MintCollectionNFTResponse {
  mint: PublicKey;
  metadata: PublicKey;
}

export interface PumpFunTokenOptions {
  twitter?: string;
  telegram?: string;
  website?: string;
  initialLiquiditySOL?: number;
  slippageBps?: number;
  priorityFee?: number;
}

export interface PumpfunLaunchResponse {
  signature: string;
  mint: string;
  metadataUri?: string;
  error?: string;
}

/**
 * Lulo Account Details response format
 */
export interface LuloAccountDetailsResponse {
  totalValue: number;
  interestEarned: number;
  realtimeApy: number;
  settings: {
    owner: string;
    allowedProtocols: string | null;
    homebase: string | null;
    minimumRate: string;
  };
}

export interface JupiterTokenData {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  tags: string[];
  logoURI: string;
  daily_volume: number;
  freeze_authority: string | null;
  mint_authority: string | null;
  permanent_delegate: string | null;
  extensions: {
    coingeckoId?: string;
  };
}

export interface FetchPriceResponse {
  status: "success" | "error";
  tokenId?: string;
  priceInUSDC?: string;
  message?: string;
  code?: string;
}

export interface PythFetchPriceResponse {
  status: "success" | "error";
  priceFeedID: string;
  price?: string;
  message?: string;
  code?: string;
}

export interface FetchPortfolioResponse{
  status: "success" | "error",
  address: string,
  fungibleTokenPortfolio?: TokenAsset[],
  nftPortfolio?: NFTAsset[],
  message?: string,
  code?: string
}

export interface TokenData {
  address: string;
  amount: number;
  price: number | null;
}

export interface TokenAsset {
  type: "token";
  networkId: string;
  value: number;
  data: TokenData;
  attributes: Record<string, unknown>;
}

export interface NFTData {
  address: string;
  amount: number;
  price: number | null;
  name: string;
  dataUri: string;
  imageUri: string;
  attributes: Array<{
    value: string;
    trait_type: string;
  }>;
  collection: {
    floorPrice: number | null;
    id: string;
    name: string;
  };
}

export interface NFTAsset {
  type: "collectible";
  attributes: {
    tags: string[];
  };
  name: string;
  data: NFTData;
  networkId: string;
  value: number | null;
}

export interface TokenInfo {
  address: string;
  decimals: number;
  name: string;
  networkId: string;
  symbol: string;
  logoURI: string;
  chainId: number;
  sourceId: string;
}