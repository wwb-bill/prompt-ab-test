# prompt-ab-test

A/B test prompt variants — Z-test statistical significance, margin calculations.

```typescript
import { runABTest } from "prompt-ab-test";
const result = runABTest([
  { name:"A", prompt:"...", trials:100, successes:80, avgDurationMs:500 },
  { name:"B", prompt:"...", trials:100, successes:60, avgDurationMs:500 },
]);
result.winner; // "A" if significant
```

MIT
