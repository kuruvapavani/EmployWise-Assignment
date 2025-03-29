
# **EmployWise Assignment**  

### **Overview**  
EmployWise Assignment is a React application built with **React.js** and **Tailwind CSS**. The project implements authentication and user management features.  

### **Live Demo**  
🔗 [EmployWise Assignment Live Demo](https://pavani-employwise-assignment.netlify.app/)  

### **GitHub Repository**  
📂 [EmployWise Assignment GitHub](https://github.com/kuruvapavani/EmployWise-Assignment.git)  

---

## **Getting Started**  

### **1. Clone or Download the Repository**  
Clone the repository using Git:  

```bash
git clone https://github.com/kuruvapavani/EmployWise-Assignment.git
```

Then, navigate to the project directory:  

```bash
cd EmployWise-Assignment
```

### **2. Install Dependencies**  
Run the following command to install all required dependencies:  

```bash
npm install
```

### **3. Start the Development Server**  
To start the project locally, run:  

```bash
npm start
```

This will start the development server, and the project will be available at:  

```
http://localhost:3000
```

---

## **Deployment**  
To create a production-ready build, run:  

```bash
npm run build
```

This will generate a `build` folder, which can be deployed to hosting services like **Netlify** or **Vercel**.  

### **Handling React Router on Deployment**  
Since React Router uses client-side routing, ensure proper redirects are set up to prevent 404 errors.  

#### **1. Create a `_redirects` file inside the `public` folder:**  
Add the following content to handle all routes correctly:  

```
/*    /index.html   200
```

This ensures that all routes are redirected to `index.html`, allowing React Router to manage navigation.  

---

## **Technologies Used**  
- **React.js**  
- **Tailwind CSS**  
- **React Router**  
- **Netlify for Deployment**  

---

## **Assumptions & Considerations**  
- Ensure **Node.js** (version 22.14.0 or later) is installed.  
- The project assumes a **React Router setup** for navigation.  
- Tailwind CSS is configured via `tailwind.config.js`.  

---

## **Contributing**  
If you’d like to contribute, fork the repository, make changes, and submit a pull request. 🚀  

---

## **License**  
This project is licensed under [MIT License](#).  

---