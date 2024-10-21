// ============================================================================
// W2Inc, Amsterdam 2023, All Rights Reserved.
// See README in the root project for more information.
// ============================================================================

import { boolean, integer, json, pgEnum, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { declareTable, joinTable, urlType } from "../utils";
import { relations, sql, type InferSelectModel } from "drizzle-orm";
export * from "./shared";

// ============================================================================

export const navigationItems = declareTable("navigation_items", {
	displayName: varchar("display_name", { length: 256 }),
	groupId: uuid("group_id").references(() => navigationGroups.id),
	order: integer("order"),
	href: varchar("href", { length: 256 }).notNull(),
	permissions: text("permissions")
		.array()
		.notNull()
		.default(sql`'{}'::text[]`),
});

export const navigationGroups = declareTable("navigation_groups", {
	displayName: varchar("display_name", { length: 256 }),
});

// Format tentans:read || tenants:write
// screens:read || screens:write
export const permissions = declareTable("permissions", {
	name: varchar("name", { length: 256 }),
});

// Enums
// ============================================================================

export const diet = pgEnum("diet_type", ["vegan", "vegetarian"]);
export type DietType = (typeof diet.enumValues)[number];

export const score = pgEnum("nutriscore", ["A", "B", "C", "D", "E"]);
export type NutriscoreType = (typeof diet.enumValues)[number];

// Tables
// ============================================================================

// Create any and new tables here along with their relations
export const products = declareTable("products", {
	brand: text("brand"),
	name: text("name"),
	ingredients: text("ingredients"),
	imageUrl: urlType(),
	ean: text("ean").notNull(), // EANS are not unique!
	nutriscore: score(),
	dietType: diet(),
	containsPalmoil: boolean().default(false),
	mayContain: text("may_contain")
		.array()
		.notNull()
		.default(sql`'{}'::text[]`),
	contains: text("contains")
		.array()
		.notNull()
		.default(sql`'{}'::text[]`),
});

export type Product = InferSelectModel<typeof products>;

// Examples
// ============================================================================

// export const {
// 	joinTable: usersToPermissions,
// 	joinRelations: usersToPermissionsRelations
// } = joinTable(users, permissions);

// export const enumExample = pgEnum("enum_demo", ["1", "2"]);
// export type EnumType = (typeof enumExample.enumValues)[number];
