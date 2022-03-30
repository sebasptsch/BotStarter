# DiscordJS + TypeScript + Prisma Bot Starter

This is a starter template for discord bots using DiscordJS, TypeScript, Prisma and tsup.

Makes it easy to register new commands, events and autocompletes.

## Commands

> Note that this project uses yarn as it's prefered package manager.

- **`start`** - If the bot has been built then this can be used to start it.
- **`dev`** - Watches the `src/` directory and automatically recompiles and restarts the bot when files are changed.
- **`lint`** - Formats all the files in `src/` using prettier.
- **`generate`** - Generates the prisma functions based off of the config in `prisma/schema.prisma`.
- **`build`** - Builds the bot to the `dist/` directory.
