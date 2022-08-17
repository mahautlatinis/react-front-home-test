all:
			cd ./app && npm install && npm start

buildImage:
			docker build -t react-image . -f ./my-app/Dockerfile