CREATE TYPE "public"."diet_type" AS ENUM('vegan', 'vegetarian');--> statement-breakpoint
CREATE TYPE "public"."nutriscore" AS ENUM('A', 'B', 'C', 'D', 'E');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v7() NOT NULL,
	"created_at" timestamp (3) DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) DEFAULT now() NOT NULL,
	"brand" text,
	"ingredients" text,
	"imageUrl" text,
	"ean" text NOT NULL,
	"nutriscore" "nutriscore",
	"dietType" "diet_type",
	"may_contain" text[] DEFAULT '{}'::text[] NOT NULL,
	"contains" text[] DEFAULT '{}'::text[] NOT NULL
);
