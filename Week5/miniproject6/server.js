const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');

const app = express();
const PORT = 3000;
const parser = new Parser();

// RSS Feed URL
const RSS_FEED_URL = 'https://thefactfile.org/feed/';

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', './public/pages');
app.use(express.static('./public'));

// Helper function to fetch RSS feed
async function fetchFeed() {
  try {
    let feed = await parser.parseURL(RSS_FEED_URL);
    return feed.items;
  } catch (error) {
    console.error('Error fetching feed:', error);
    return [];
  }
}

// GET / - Display all facts from RSS feed
app.get('/', async (req, res) => {
  try {
    const posts = await fetchFeed();
    res.render('index', { posts });
  } catch (error) {
    console.error('Error on home route:', error);
    res.render('index', { posts: [] });
  }
});

// GET /search - Render search page without posts
app.get('/search', (req, res) => {
  res.render('search', { posts: [] });
});

// POST /search/title - Search posts by title
app.post('/search/title', async (req, res) => {
  try {
    const searchTitle = req.body.title.toLowerCase();
    const allPosts = await fetchFeed();
    
    // Filter posts by title
    const filteredPosts = allPosts.filter(post => 
      post.title.toLowerCase().includes(searchTitle)
    );
    
    res.render('search', { posts: filteredPosts });
  } catch (error) {
    console.error('Error searching by title:', error);
    res.render('search', { posts: [] });
  }
});

// POST /search/category - Search posts by category
app.post('/search/category', async (req, res) => {
  try {
    const searchCategory = req.body.category.toLowerCase();
    const allPosts = await fetchFeed();
    
    // Filter posts by category
    const filteredPosts = allPosts.filter(post => {
      const categories = post.categories || [];
      return categories.some(cat => cat.toLowerCase().includes(searchCategory));
    });
    
    res.render('search', { posts: filteredPosts });
  } catch (error) {
    console.error('Error searching by category:', error);
    res.render('search', { posts: [] });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`RSS Reader server is running on http://localhost:${PORT}`);
});
