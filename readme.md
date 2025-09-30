# Shortly - URL Shortener 🚀

A simple and modern **URL Shortener** built with **Node.js, Express, MongoDB, and EJS**.  
This project allows users to shorten long URLs, manage their links after login, and experience a sleek modern UI for signup/login.

we must have to login first to use this
and every signin member will have user 'role' assigned so he can only create and tracks his own created links, Admin role is only assigned to shumail582k@gmail.com || pass: test
admin can see his own links and links which have been created so far by all users.
---

## ✨ Features
- 🔗 Shorten long URLs into compact shareable links
- 👤 User authentication (Signup / Login / Logout)
- 🖼️ Responsive modern UI (Login & Signup pages styled with Bootstrap & custom CSS)
- 📊 Track & manage shortened links (future scope)
- 🌗 Dark-themed forms with gradient backgrounds

---
## ✨ url's and their purpose
/login                    >for login
/signup                   >for signup
/                         >responsible displaying URL shortner and all generated short url's tracking
/url/:ShortId             >responsible for redirecting to original url for which short id has been generated 
/url/analytics/:ShortId   >responsible for displaying analytics for specific shortn url or shordID 

## url's for admin only shumail582k@gmail.com || pass: test
/admin/urls               >only for member who have admin excess, it show all the links and their analytics which have been created by all users so far.                         

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **View Engine:** EJS (Embedded JavaScript Templates)
- **Frontend:** HTML5, CSS3, Bootstrap 5
- **Authentication:** Basic email/password auth (extendable to OAuth like Google/Facebook)

---

## 📂 Project Structure
.
├── controllers/ # Business logic (URL handling, auth, etc.)
├── models/ # Mongoose models (User, URL)
├── routes/ # Express route definitions
├── views/ # EJS templates (login, signup, home, etc.)
├── public/ # Static files (CSS, JS, images)
├── app.js # Main Express app entry point
└── README.md # Project documentation

yaml
Copy code

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Configure environment variables
Create a .env file in the project root:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=8000
SESSION_SECRET=your_secret_key
4️⃣ Run the app
bash
Copy code
npm start
The app will be live at 👉 http://localhost:8000

📸 Screenshots
🔐 Login Page

📝 Signup Page

🏠 Home Page

🛡️ Future Improvements
Add URL click analytics (track visits, referrers, device info)

Add password encryption (bcrypt)

Implement JWT authentication

Add Google/Facebook OAuth

Deploy to Heroku / Render / Vercel

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check issues page.

📜 License
This project is licensed under the MIT License.

👨‍💻 Author
Mohd Shumayl (Ayan Zaidi)
Full-Stack Developer | MERN | Node.js | React | Next.