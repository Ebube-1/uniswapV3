import { ethers } from "hardhat";

async function main() {
    const LIQUIDITY_CONTRACT_ADDRESS = "0xeF66010868Ff77119171628B7eFa0F6179779375";
    const liquidityContract = await ethers.getContractAt("UniswapV3Liquidity", LIQUIDITY_CONTRACT_ADDRESS);

    const amountWETH = ethers.parseEther("1");
    const amountUSDC = ethers.parseUnits("1000", 6);
    const tickLower = -887272;
    const tickUpper = 887272;

    console.log("🔹 Adding liquidity...");
    await liquidityContract.addLiquidity(amountWETH, amountUSDC, tickLower, tickUpper);
    console.log(" Liquidity added!");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});