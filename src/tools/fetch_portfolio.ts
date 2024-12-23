import { SolanaAgentKit } from "../index";

/**
 * @param agent SolanaAgentKit instance
 * @returns Portfolio(Fungible Tokens + NFTs) for given address
 * 
 */

export async function fetchPortfolio(
    agent: SolanaAgentKit,
    address: string,
    addressSystem: string,
  ) {
    try {
      const response = await fetch(
        `https://portfolio-api-public.sonar.watch/v1/portfolio/fetch?` +
        new URLSearchParams({
          address,
          addressSystem,
          useCache: 'false'
        }).toString(),
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      
      const tokenElement = data.elements.find(
        (element: any) => element.platformId === "wallet-tokens"
      );

      const nftElement = data.elements.find(
        (element: any) => element.platformId === "wallet-nfts"
      );
  
      return {
        totalValue: tokenElement?.value || 0,
        fungibleTokenPortfolio: tokenElement?.data?.assets || [],
        nftPortfolio: nftElement?.data?.assets || [],
        tokenInfo: data.tokenInfo?.[addressSystem] || {}
      };
  
    } catch (error: any) {
      throw new Error(`Error fetching token portfolio: ${error.message}`);
    }
  }