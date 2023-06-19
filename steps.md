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

