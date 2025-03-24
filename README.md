# Programação Back-End | 24/03/25

---
### | O que foi utilizado? 
VSCode, Prisma, JavaScript, Insomnia e outros.

Códigos utilizados da aula 3: 
#### Aula 03 - PRISMA

##### Conhecimentos ORM (Object Relationship Management) Prisma  
- Aula demonstrativa  

##### ORM - PRISMA  
Passo a passo de como iniciar um projeto com esse framework:  

##### | Abrir o terminal:  
1. Navegar até a pasta API do seu projeto.  
2. Instalar o Prisma globalmente.  

```sh
npm i prisma -g
npm i express cors dotenv
prisma init --datasource-provider mysql
prisma migrate dev --name "descricao"
npm init
npm i express cors dotenv