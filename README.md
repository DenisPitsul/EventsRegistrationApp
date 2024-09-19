# Application Setup and Running Instructions

## Server

To set up and run the server, follow these steps:

1. **Create a `.env` File**:

   - Inside the `server` folder, create a `.env` file.
   - Use the `.env.example` file as a reference for the necessary environment variables.
   - Ensure that the PostgresSQL server is running and accessible as specified in your .env file.

2. **Install Dependencies**:

   ```bash
   cd server
   npm install
   ```

3. **Create the Database**:

   ```bash
   npx sequelize db:create
   ```

4. **Run Migrations**:

   ```bash
   npx sequelize db:migrate
   ```

5. **Run Migrations**:

   ```bash
   npx sequelize db:seed:all
   ```

6. **Start the Server**:
   ```bash
   npm start
   ```

## Client

To set up and run the client, follow these steps:

1. **Install Dependencies**:
   ```bash
   cd client
   npm install
   ```
1. **Start the Development Server:**:
   ```bash
   npm run dev
   ```

Application should be available by link: http://localhost:5173

## Notes

Advanced level accomplished except for `Implement a separate script that runs at a defined interval of time...`.
