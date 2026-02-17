import { buildReasoning } from "./services/reasoning.service.js";

console.log("--- Reasoning Engine Demo ---\n");

const scenarios = [
    { name: "Big Green Candle", change: 5.2 },
    { name: "Small Green Candle", change: 0.5 },
    { name: "Flat/Negative", change: -0.1 },
    { name: "Market Crash", change: -4.5 }
];

scenarios.forEach(scenario => {
    const result = buildReasoning(scenario.change);
    console.log(`Scenario: ${scenario.name} (${scenario.change}%)`);
    console.log(`Result:   Thesis: "${result.thesis}", Risk: "${result.risk}"`);
    console.log("--------------------------------------------------");
});
