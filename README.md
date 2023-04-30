# Whalespotting

1. Fork this repo: click `Fork` in the top-right of the page - this will create a copy of this repo in **your own GitHub account**

2. Clone (download) the repo
    * Go to your newly-created fork of the repo (on GitHub).
    * Click `Clone or download` (the green button on the right).
    * Make sure the page says `Clone with SSH` (rather than `Clone with HTTPS`).
    * Open your git client (e.g. GitKraken) and use this link to clone the repo.  
    Your trainer will able to help you with this.

3. "Cloning the repo" will create a folder on your computer with the files from this repo.  
Open this folder Visual Studio Code.

4. Open a command-prompt in this same folder.  
Your trainer can show you how to do this, if you need any help.

5. Ensure you have Postgres installed, using the instructions below. (You'll see there's a `config.json` file that contains the database name, username and password so they must match the database being used).

6. Set up the necessary dependencies by running
```
npm install
```

7. Update the database schema and add an initial user record by running
```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

8. Run your code with
```
npm start
```

9. The app should now be available at `http://localhost:3000`

## Setting up Postgres

Before you run the app you will need to make sure you've got Postgres installed and a database set up by following the instructions below.

### Install Postgres

1. Download and install the [PostgreSQL server software](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) if you haven't already.

2. Open the Windows Start menu and search for "pgAdmin". When you start "pgAdmin" for the first time, you'll be asked to set a master password.

### Set up Whalespotting user

1. Inside your PostgreSQL server in pgAdmin, right-click on *Login/Group Roles* and create a new Login/Group Role with the name `whale-spotting` (in the *General* tab), the password `whale-spotting` (in the *Definition* tab) and the ability to log in and create databases (in the *Privileges* tab).

2. Click `Save` to create the user.

### Set up Whalespotting database

1. Inside your PostgreSQL server in pgAdmin, right-click on *Databases* and create a new Database with the name `whale-spotting` and the owner `whale-spotting` (both in the *General* tab).

2. Click `Save` to create the database.

## Database tables, models and migrations

This project uses [Sequelize](https://sequelize.org/) to manage database tables (which correspond to model classes), migrations (which change the database schema) and seeding data (which set initial data), as discussed [here](https://sequelize.org/docs/v6/other-topics/migrations/).

Most tables in the database will have a corresponding model class under `/models` like `user.js`; see [here](https://sequelize.org/docs/v6/core-concepts/model-basics/#extending-model) for documentation on the approach used there.

Changes to the database schema (to create tables or make changes) are done using migrations, which should be added in `/migrations`. You should be able to map the migration that is already in the repo to the documentation [here](https://sequelize.org/docs/v6/other-topics/migrations/#migration-skeleton).

You can update the database schema by applying any outstanding migrations by running:
```
npx sequelize-cli db:migrate
```

## Existing admin user

There is an admin user already set up for you in the database (by the file under `/seeders`):

```
email: admin@test.com
password: adminpassword
```
