import Express from 'express';
import path from 'path';

const app = new Express();
const PORT = process.env.PORT || 3000;
const staticDir = path.join(__dirname, '..', 'public');

app.set('view engine', 'ejs');
app.use(Express.static(staticDir));

app.get('/', (req, res) => {
    res.render('index', {message: 'Index page'});
});


app.listen(PORT, () => {
    console.log("Application running on http://%s:%s/", "localhost", PORT);
    console.log("Servic static from %s", staticDir);
});
