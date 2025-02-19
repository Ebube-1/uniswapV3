import { ethers } from "hardhat";

async function main() {
    const UNISWAP_V3_NFT_MANAGER = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88"; // Mainnet Position Manager
    const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    const FEE_TIER = 500;

    const LiquidityContract = await ethers.getContractFactory("UniswapV3Liquidity");
    const liquidity = await LiquidityContract.deploy(UNISWAP_V3_NFT_MANAGER, WETH, USDC, FEE_TIER);
    await liquidity.waitForDeployment();

    console.log(` Uniswap V3 Liquidity Contract Deployed at: ${await liquidity.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});