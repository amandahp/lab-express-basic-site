import express from 'express';
import path from 'path';


const app = express();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/PinkFloyd.html');
})

app.get('/home', (request, response, next) => {
  response.sendFile(__dirname + '/views/Home.html');
})

app.get('/history', (request, response, next) => {
  response.sendFile(__dirname + '/views/History.html');
})

app.get('/albums', (request, response, next) => {
  response.sendFile(__dirname + '/views/Albums.html');
})


app.listen(8080, () => console.log('Server Started'))