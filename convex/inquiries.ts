import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    project_type: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const name = args.name.trim();
    const email = args.email.trim().toLowerCase();
    const message = args.message.trim();
    const company = args.company?.trim();

    if (name.length < 2 || message.length < 10 || !email.includes("@")) {
      throw new Error("Invalid inquiry");
    }

    return await ctx.db.insert("inquiries", {
      name,
      email,
      company: company || undefined,
      project_type: args.project_type,
      message,
      status: "new",
    });
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("inquiries").order("desc").take(50);
  },
});
