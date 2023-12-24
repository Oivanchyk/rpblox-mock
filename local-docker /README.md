### Starting Docker Compose

Checkout the repository or download the sources.

Simply run `docker-compose up -d` and you are done.

| Service     | Host           | User     | Pass   |
|-------------|----------------|----------|--------|
| Postgre SQL | localhost:5432 | postgres | secret |
| Kafka       | localhost:9092 |          |        |
| Zookeper    | localhost:2181 |          |        |
| Redis       | localhost:6379 |          |        |
| H2          | localhost:1521 | sa       |        |
| Clickhouse  | localhost:8123 |          |        |

### PostgreSQL

init.sql create db's for services on first start

```
CREATE DATABASE "salary-contract";
CREATE DATABASE "salary-payments";
CREATE DATABASE "salary-payroll";
CREATE DATABASE "salary-permission";
CREATE DATABASE "salary-bank";
```

## Clear cache

```
docker-compose rm --all
docker-compose pull
docker-compose build --no-cache
docker-compose up -d --force-recreate
```