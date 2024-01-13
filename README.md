# EMPLOYEES-HUB PROJECT

> Application for company-wide employee management. Easily store and access information on schedules, experience, skills, and more. User-friendly login with customized permissions for different roles.

## Target customers

- Small and medium size companies in a need of a centralized database with employees' data

## License

One-time license purchase, software to be installed on company's server.

## Software requirements specification

#### Functional:

F1 - Creation organizational structures

F2 - Listing of employees in each organizzational unit

F3 - Editing one's skills, experience and description

F4 - Option for units' heads to create and edit work schedules

F5 - Filtering employees by their names and surnames, position, business unit and skills


#### Non-functional:

N1 - User-friendly, easy-to-read browser to look up people within organisation

N2 - Enabling users' to:

	N2.1. - look up for people with specific background
 
 	N2.2. - create and maintain their profiles
  
  	N2.3. - contact easily, enhancing a collaborative culture environment
   
N3 - Ability to open and run application on widely-used browsers i.e. Google Chrome, Mozilla Firefox, Brave, Edge etc.


## Technology stack

**Mockup**: 
- **Tool**: Excalidraw

**Backend**:
- **Language:** TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Runtime**: Node.js
- **Framework**: Nest.js
	
**Frontend**:
- **Language**: TypeScript
- **Framework**: React
		
**Serwer**:

- **OS**: Linux Debian
- **Tool**: docker i docker-compose || Ngnix
		
**Version Control**:
**Tool**: Git
**Service**: github

**Architektura**: 
- **Type**: monorepo 
- **Architecture tool**: Lerna
		

**UML**:
**Tool**:  Draw.io || Enterprise Architect
**Diagrams**:  Class diagrams

### Monorepo
Steps to create monorepo project architecture:

1. Initialize monorepo with Lerna and install packages. Change default projects name folder from "packages" to "apps", as it better ilustrates project purpose.
```
lerna init && npm install
```

2. Install TypeScript for project 

```
npm install typescript --save-dev
```

3. Create folder manually and step into new folder. We could use *lerna create appname*, but it creates files, which we don't want.

```
mkdir apps && cd apps
```

4. Create backend project using Nest.js

```
nest new api
```

5. Create frontend project using Vite.js, with options React + TypeScript

```
npm create vite@latest
```

6. Later, to install packages in specified projects, use:

```
npm install <dependency> -w <package1> -w <package2>
```

### Prisma

To create migration, use:

```
npx prisma migrate dev --name migration_name
```

**Important!** Prisma uses temporary shadow databases to create migrations, so user has to have "createdb" permission.
