import type { Agent } from "./types"

export const mockAgents: Agent[] = [
  {
    id: "1",
    name: "DeFi Optimizer",
    description: "Optimizes yield across DeFi protocols based on risk parameters",
    persona: "DeFi Specialist",
    status: "active",
    portfolioValue: 250000,
    pnl: 12.5,
    lastDecision: "Moved funds from Aave to Compound",
    nextExecution: "In 35 minutes",
    executionProgress: 42,
    frequency: "Hourly",
  },
  {
    id: "2",
    name: "Bitcoin Accumulator",
    description: "Accumulates Bitcoin using dollar-cost averaging and market timing",
    persona: "Bitcoin Maximalist",
    status: "active",
    portfolioValue: 500000,
    pnl: 8.3,
    lastDecision: "Purchased 0.15 BTC",
    nextExecution: "In 4 hours",
    executionProgress: 15,
    frequency: "Daily",
  },
  {
    id: "3",
    name: "Stablecoin Manager",
    description: "Manages stablecoin allocations for maximum yield with minimal risk",
    persona: "Risk Manager",
    status: "active",
    portfolioValue: 1000000,
    pnl: 4.2,
    lastDecision: "Rebalanced USDC/USDT ratio",
    nextExecution: "In 2 hours",
    executionProgress: 65,
    frequency: "Hourly",
  },
  {
    id: "4",
    name: "Altcoin Trader",
    description: "Trades altcoins based on technical analysis and market sentiment",
    persona: "Technical Analyst",
    status: "paused",
    portfolioValue: 150000,
    pnl: -2.1,
    lastDecision: "Sold SOL position",
    nextExecution: "Paused",
    executionProgress: 0,
    frequency: "Hourly",
  },
  {
    id: "5",
    name: "ETH Staking Manager",
    description: "Optimizes ETH staking and liquid staking positions",
    persona: "Ethereum Specialist",
    status: "active",
    portfolioValue: 350000,
    pnl: 6.7,
    lastDecision: "Moved ETH to Lido",
    nextExecution: "In 12 hours",
    executionProgress: 25,
    frequency: "Daily",
  },
]
