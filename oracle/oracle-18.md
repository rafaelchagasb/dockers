 # installing oracle 18c on docker  
First extract the image from the docker repository:

```$ sudo docker pull dockerhelp/docker-oracle-ee-18c```

We run the Oracle 18c image and assign a port where it is going to communicate:

```$ sudo docker run -p 7000:7000 -it dockerhelp/docker-oracle-ee-18c bash```

We run the installation file sh:

```$ sh post_install.sh```

We proceed to connect to the database, always inside the container:

```$ sqlplus```

The user who creates us by default is the following:

```USER: sys as sysdba```
```PASS: oracle```

We enter and create a test user

```SQL> alter session set "_ORACLE_SCRIPT"=true;```

Session altered.

```SQL> create user TEST identified by 1234;```

User created.

```SQL> grant dba to TEST;```

The IP of the container can be found out by exiting the container (without turning it
off) with 
the key combination ctrl + p and then ctrl + q and running the following commands.
To display all containers that are active. In turn we will display the container id:

```sudo docker ps```

The following command is used to get the ip of the container:

```sudo docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' [CONTAINER_ID]```

where "CONTAINER_ID" is the id generated in the previous step.
