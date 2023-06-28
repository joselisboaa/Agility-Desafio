# Agility Desafio
Repositorio para o Desafio de front end da Agility

## Principais Bibliotecas 
| Environment | Info |
|---|---|
| Node | v.18.5.0 (LTS) |
| React | >= v.18.0.0 |
| Next.js | >= 13.0 |
| React Hook Form | >= v.7.0.0 |
| Zod | >= v.3.21.4 |
| TypeScript | v.5.0.2 |
| Tailwindcss | v.3.3.0 |
| React notifications component | >= v.3.3.3 |
| Recharts | >= v.2.4.3 |
| React Query | v.4.29.1 |

**Documentação**

[React](https://beta.reactjs.org/learn/installation)  
[React Hook Form](https://react-hook-form.com/)  
[TypeScript](https://www.typescriptlang.org/)  
[Next.js](https://nextjs.org)  
[Zod](https://zod.dev/)    
[Tailwind](https://tailwindcss.com/)  
[React notifications component](https://github.com/teodosii/react-notifications-component/)  
[Recharts](https://recharts.org/en-US/)  
[React Query](https://tanstack.com/query/latest/)  

## Instalação para desenvolvimento

Com todos os pré-requisitos instalados. Após clonar o projeto execute o comando:

> npm install

Depois de iniciar a pasta node_modules, execute o comando:

> npm run dev

Isso irá iniciar o servidor front-end

**OBS: A maneira de instalar npm e node varia com o sistema operacional. Geralmente é utilizado o nvm.**

Url para acessar o servidor:

```md
http://localhost:3000/
```

## Padrões 

### Padrão de id

O id deve ser _AG_ junto com a id da issue com 3 casas de unidades, exemplo: AF001

### Padrão de issue
* feature/{id} - {Titulo}
* bugfix/{id} - {Titulo}
* refactor/{id} - {Titulo}
* architecture/{id} - {Titulo}
* document/{id} - {Titulo}

**Obs:** Os titulos devem ser em inglẽs.

### Padrão de branch
* feature/{id}
* bugfix/{id}
* refactor/{id}

### Padrão de commit
O projeto utiliza os padrões do __Conventional commmits__ 
