## Run images

```shell
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Admin1234*" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
```
```shell
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Admin1234*" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-CU14-ubuntu-20.04
```

> Password need to be strong password.

## More information

Docs: https://hub.docker.com/_/microsoft-mssql-server
