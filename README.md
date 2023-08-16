# Agility Desafio
Repositorio para o Desafio de front end da Agility

## Principais Bibliotecas/Ferramentas
| Environment | Info |
|---|---|
| Node | v.20.3.2 |
| React | v.18.2.14 |
| Next.js | 13.4.7 |
| React Hook Form | v.7.45.1 |
| Zod | v.3.21.4 |
| TypeScript | v.5.1.5 |
| Tailwindcss | v.3.3.2 |
| Recharts | v.2.7.2 |
| React Query | v.4.29.1 |
| classNames | v.2.3.2 |
| tailwind-merge | v.1.13.2 |
| tailwind-scrollbar | v.3.0.4 |
| json-server | v.0.17.3 |
| react-toastify | v.9.1.2 |
| @react-google-maps/api | v.2.18.1 |

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

ou

> npm install --legacy-peer-deps

Depois de iniciar a pasta node_modules, execute o comando:

> npm run dev

Isso irá iniciar o servidor front-end

**OBS: A maneira de instalar npm e node varia com o sistema operacional. Geralmente é utilizado o nvm.**

Url para acessar o servidor:

```md
http://localhost:3000/
```

## Configuração do Json-Server

Após a instalação de todos os pacotes, execute o comando:

> npm run server

desse modo o mock do backend poderá funcionar corretamente.

**OBS: Apenas irá ter 1 usuário cadastrado.**
```
Login: admin
Senha: admin
```

## Demo da aplicação
https://github.com/joselisboaa/agility-desafio/assets/67613937/e8f4a009-7f96-4ff7-83b6-1fceee768359



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
