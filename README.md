# Взаимодействие контейнеров

Сборка проекта

```
docker-compose build
```

Запуск проекта

```
docker-compose up
```

Просмотр работающих контейнеров

```
docker ps
```

## API

Запрос на сложение чисел

```
http://localhost:5001/get?a=10&b=17&operation=p
```

Запрос на вычитание чисел

```
http://localhost:5001/get?a=10&b=17&operation=m
```

