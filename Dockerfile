FROM node:latest  

# Expose port
EXPOSE 3000  


RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json  
RUN npm install

COPY . /app
   
CMD npm start