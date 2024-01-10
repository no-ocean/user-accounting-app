# User Accounting Application

Full-Stack приложение с авторизацией для сохраниения данных о пользователе в базе. Администратор может зарегистрироваться в приложении и создать свою базу пользователей с возможностью добавлять, редактировать и удалять пользователя. Администратор может изменять только своих пользователей при этом ему доступны данные пользователей других администраторов. 

Frontend stack:
- React JS
- Redux
- Redux toolkit
- RTK Query
- Typescript

UI:
- Ant Design

Backend stack:
- Node JS
- Express
- Prisma
- SQLite DB

### Установка сервера локально
```sh
$ npm i
```

### Установка клиента локально
```sh
$ cd client
$ npm i
```


### Конфиг для .env
```sh
PORT = 8000
JWT_SECRET = 'YOUR_SECRET_KEY'
DATABASE_URL="file:./dev.db"
```

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
