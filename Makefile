#Change your pwd
PWD = "/Users/mahautlatinis/Desktop/3"

all:
			docker-compose up --build

buildImage:
			docker build -t react-image . -f ./my-app/Dockerfile

#runContainer: 
#			docker run -it -p 3000:3000 -e CHOKIDAR_USEPOLLING=true react-image

stopContainer:
			docker stop react-app

clean:
			docker system prune

#stopAll:
#			docker stop $(docker ps -a -q)
#rmAll:
#			docker stop $(docker ps -a -q)
