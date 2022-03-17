docker volume create qm1datalight
docker run \
--env LICENSE=accept \
--volume qm1datalight:/var/mqlight \
--publish 5672:5672 \
--publish 9180:9180 \
--detach \
ibmimages/mqlight:latest
