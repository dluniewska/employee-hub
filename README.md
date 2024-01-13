# EMPLOYEES-HUB PROJECT

> Application for company-wide employee management. Easily store and access information on schedules, experience, skills, and more. User-friendly login with customized permissions for different roles.

## Target customers

- Small and medium size companies in a need of a centralized database with employees' data

## License

One-time license purchase, software to be installed on company's server.

## Software requirements specification

#### Functional:

| Identyfikator | F1 |
|---------------|----|
| Nazwa         | Creation of organizational structures |
| Priorytet     | 1  |

| Identyfikator | F2 |
|---------------|----|
| Nazwa         | Listing of employees in each organizational unit |
| Priorytet     | 1  |

| Identyfikator | F3 |
|---------------|----|
| Nazwa         | Editing one's skills, experience, and description |
| Priorytet     | 2  |

| Identyfikator | F4 |
|---------------|----|
| Nazwa         | Option for units' heads to create and edit work schedules |
| Priorytet     | 3  |

| Identyfikator | F5 |
|---------------|----|
| Nazwa         | Filtering employees by their names, surnames, position, business unit, and skills |
| Priorytet     | 1  |


#### Non-functional:

| Identyfikator | N1 |
|---------------|----|
| Nazwa         | User-friendly, easy-to-read browser to look up people within organisation |
| Priorytet     | 1 |


| Identyfikator | N2.1 |
|---------------|------|
| Nazwa         | Look up for people with specific background |
| Priorytet     | 1    |

| Identyfikator | N2.2 |
|---------------|------|
| Nazwa         | Maintain their profiles |
| Priorytet     | 1    |

| Identyfikator | N2.3 |
|---------------|------|
| Nazwa         | Contact easily, enhancing a collaborative culture environment |
| Priorytet     | 1    |

| Identyfikator | N3 |
|---------------|----|
| Nazwa         | Ability to open and run application on widely-used browsers i.e. Google Chrome, Mozilla Firefox, Brave, Edge etc. |
| Priorytet     | 1  |



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
