

# 📌 Express CRUD Posts App

A simple **CRUD (Create, Read, Update, Delete)** application built with **Node.js, Express, and EJS**.
It allows users to create posts, view all posts, edit existing posts, and delete posts.

---

## 🚀 Features

* ✍️ **Create** new posts with username + content
* 📖 **Read** all posts in a styled UI
* 📝 **Update (Edit)** existing posts
* ❌ **Delete** posts with confirmation
* 🎨 Styled with **custom CSS (public/style.css)**

---

## 🛠️ Tech Stack

* **Node.js** (v22+)
* **Express.js** (web framework)
* **EJS** (template engine)
* **CSS** (for UI design)

---

## 📂 Project Structure

```
rest-class/
│── index.js          # Main server file
│── package.json      # Project dependencies
│── views/            # EJS templates
│   ├── index.ejs     # All posts page
│   ├── new.ejs       # Create new post
│   ├── edit.ejs      # Edit post
│   ├── show.ejs      # Single post view
│── public/           # Static files (CSS, images, JS)
│   └── style.css     # Custom UI styles
│── README.md         # Project documentation
```

---

## ⚡ Installation

1. Clone this repo:

```bash
git clone https://github.com/YOUR-USERNAME/express-crud-posts.git
cd express-crud-posts
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

(or use `nodemon index.js` for auto-reload)

4. Open in browser:

```
http://localhost:8000/posts
```

---

<img width="1362" height="610" alt="image" src="https://github.com/user-attachments/assets/77933a81-086b-4209-b321-39f382d8a8da" />


### 🏠 All Posts Page

* View all posts in a grid layout with options to edit/delete.

### ➕ New Post Form

* Add a new post with username + content.

### ✏️ Edit Post Page

* Update existing posts.

### ❌ Delete Post

* Remove a post with a confirmation popup.

---

## 📝 Future Improvements

* Add database (MongoDB / PostgreSQL)
* Add authentication (login system)
* Improve UI with TailwindCSS or Bootstrap

---

## 👨‍💻 Author

Built by **[Sonu kumar](https://github.com/YOUR-USERNAME)** ✨

