import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    type(req) {
      return true;
    },
  })
);
app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

let posts = [
  {id: 1, content: "Устройство предназначено для выполнения функций релейной защиты, автоматики, управления и мониторинга электродвигателей и других электроустановок в трехфазных цепях переменного тока промышленной частоты 50 Гц напряжением 230/400 В."},
  {id: 2, content: "Условное обозначение устройства: УМЗ-X-N IP65 (исп. 9), где Х – модификация устройства (обозначение может отсутствовать), N – номинал устройства."}
];
let nextId = 3;

app.get("/posts", (req, res) => {
  res.send(JSON.stringify(posts));
});

app.get("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  const index = posts.findIndex((o) => o.id === postId);
  res.send(JSON.stringify({ post: posts[index] }));
});

app.post("/posts", (req, res) => {
  posts.push({ ...req.body, id: nextId++, created: Date.now() });
  res.status(204);
  res.end();
});

app.put("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  posts = posts.map((o) => {
    if (o.id === postId) {
      return {
        ...o,
        ...req.body,
        id: o.id,
      };
    }
    return o;
  });
  res.status(204).end();
});

app.delete("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  const index = posts.findIndex((o) => o.id === postId);
  if (index !== -1) {
    posts.splice(index, 1);
  }
  res.status(204);
  res.end();
});

const port = process.env.PORT || 7070;
app.listen(port, () =>
  console.log(`The server is running on http://localhost:${port}`)
);
