import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  inquiries: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    project_type: v.string(),
    message: v.string(),
    status: v.string(),
  }).index("by_status", ["status"]),
});
