npx sequelize-cli model:generate --name admin --attributes name:string,email:string,password:string

npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string,dateOfBirth:date,address:text,education:text,organizationExp:text,workExp:text

npx sequelize-cli model:generate --name item --attributes title:string,content:text,posting:integer
