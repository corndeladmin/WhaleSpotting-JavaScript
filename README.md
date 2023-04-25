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

5. Ensure you have Postgres installed, using the instructions below.

5. Run this command to set up the necessary dependencies:  
`npm install`

6. Run this command to run your code:  
`npm start`

## Setting up Postgres

Before you run the app you will need to make sure you've got Postgres installed and a database set up by following the instructions below.

### Install Postgres

1. Download and install the [PostgreSQL server software](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) if you haven't already.

2. Make sure you've added Postgres to your PATH (`C:\Program Files\PostgreSQL\<your version number>\bin`).

3. Open the Windows Start menu and search for "pgAdmin". When you start "pgAdmin" for the first time, you'll be asked to set a password for your superuser.

### Set up Whalespotting user

1. Inside your `PostgreSQL <version number>` server, right-click on Login/Group Roles and create a new Login/Group Role with the name `whale-spotting` (in the General tab), the password `whale-spotting` (in the Definition tab) and the ability to log in and create databases (in the Privileges tab).

2. Click `Save` to create the user.

### Set up Whalespotting database

1. Inside your `PostgreSQL <version number>` server, right-click on Databases and create a new Database with the name `whale-spotting` and the owner `whale-spotting` (both in the General tab).

2. Click `Save` to create the database.
