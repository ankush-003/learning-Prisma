# learning-Prisma
a repository created to learn Prisma

## Prisma
Prisma is a database toolkit that consists of these tools:
- Prisma Client: Auto-generated and type-safe query builder for Node.js & TypeScript
- Prisma Migrate: Declarative data modeling & migration system
- Prisma Studio: GUI to view and edit data in your database
- Prisma CLI: Open-source alternative to Prisma Studio

```bash
npm init -y
npm install --save-dev prisma typescript ts-node @types/node
```
- prisma: ORM
- typescript: type checking
- ts-node: run typescript files
- @types/node: types for node

### Initialize Prisma
```bash
npx prisma init --datasource-provider postgresql
```
### Migrate Database
- it makes changes to the database
```bash
npx prisma migrate dev --name init
```

### Generate Prisma Client
- it generates the prisma client
```bash
npm i -D @prisma/client
npx prisma generate
```


