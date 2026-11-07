import { expect, test } from "bun:test";
import { topic } from "../src/topic.ts";

test("define topic with configured science feeds", () => {
  expect(topic.name).toBe("ciencia-hoje");
  expect(topic.title).toBe("Ciência Hoje");
  expect(topic.emoji).toBe("🔬");
  expect(topic.feeds.length).toBeGreaterThan(0);
  expect(topic.systemPrompt).toContain("divulgador científico");
});
