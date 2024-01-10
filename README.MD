### Используемые библиотеки
- bcrypt - для хеширования пароля
- jwt - для выдачи токена
- concurrently - для запуска клиента и сервера одновременно
- ant design - ui

### Используемая DB
- SQLITE

### Дока по пакету 
[Prisma](https://prisma.io/docs/) documentation

### Полезные команды

Создать базу данных по описанным моделям
```sh
$ npx prisma migrate dev --name init 
```

Запуск админ панели для редактирования базы данных
```sh
$ npx prisma studio
```

Запуск server and client 
```sh
$ npm run dev
```
# user-accounting-app
