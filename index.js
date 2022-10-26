const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const courses = require('./data/Courses.json');
const blogs = require('./data/blog.json');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Learn with Nahian server is running')
});
app.get('/courses-categories', (req, res) => {
  res.send(categories);
});
app.get('/courses', (req, res) => {
  res.send(courses);
});
app.get('/blogs', (req, res) => {
  res.send(blogs);
});
app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if (id === '08') {
      res.send(courses);
  }
  else {
      const selectedCategorycourses = courses.filter(c => c.category_id === id);
      res.send(selectedCategorycourses);
  }
});
app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find(c => c._id === id);
  res.send(selectedCourses);
});

app.listen(port, () => {
  console.log(`Learn with Nahian server is running on port ${port}`)
})