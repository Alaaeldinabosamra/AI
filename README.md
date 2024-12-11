# ALAA AI platform

this application small scale of Chatgpt platform using Gemini Model created by [Mongoose,React,Nodejs,Imagekit,Clerk]

## Description
Node (framework) => for handle routes and endpoints and server side rendering
React (framework) => for Building UI into sperated Components 
Clerk (library) => for user authentication and authorization to handle and control users
Imagekit(library) => to store uploaded images and use this with APIs
Mongoose (ODM) => store users sessions and chats with uploaded images in json style

## Getting Started
cd backend 
npm install
npm start

cd .. 
cd client
npm install
npm run dev

notes
if you want to use a instance of my project you must add .env file in backend folder and client folder which hold keys of API of my app
.env for client side [VITE_CLERK_PUBLISHABLE_KEY,VITE_IMAGE_KIT_ENDPOINT,VITE_IMAGE_KIT_PUBLIC_KEY,VITE_GEMINI_PUBLIC_KEY,VITE_API_URL]
* ex. VITE_API_URL = http://localhost:3000 || prodction domain
.env for server side [VITE_IMAGE_KIT_ENDPOINT,VITE_IMAGE_KIT_PUBLIC_KEY,VITE_IMAGE_KIT_PRIVATE_KEY,CLIENT_URL,MONGO,CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY ]
* ex. MONGO = mongodb+srv://your_user_name:your_password@cluster0.6f42aox.mongodb.net/database_name?retryWrites=true&w=majority&appName=Cluster0
* 


## Authors

LamaDev youtube channel i make instance of him technique and add addtional features and responsive design 

## Version History

* 0.1
    * Initial Release
* 0.2
    * Wait for addtional features in future
