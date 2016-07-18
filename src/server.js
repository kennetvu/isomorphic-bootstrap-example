import Express from 'express';

const app = new Express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Application running on http://%s:%s/", "localhost", PORT);
});
