// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IUniswapV3Pool {
    function liquidity() external view returns (uint128);
    function tickSpacing() external view returns (int24);
}