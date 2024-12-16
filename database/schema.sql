set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "movie" (
  "itemId" serial PRIMARY KEY,
  "title" text,
  "summary" text,
  "link" text,
  "rating" text
);