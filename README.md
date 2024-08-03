# React with github

Two of the most common ways to create react project are create-react-app and vite. Vite is much faster and recommended

## Components
To create component in react. In src file, if you are using vite create a .jsx file, it is recommended that the file name is in capital letters. It is must in vite that th name of fucntion is capital. create-react-app is not that strict you can name the file .js or .jsx but in vite .jsx is must.

In App.jsx(or .js) you need to import the exported component and also use the component in return like <C_name />. A return keyword only return one thing so  U can use react fragments <> </> to return multiple things.

One question is that how script is loaded in HTMl in create-react-app, answer is it is laoded by react-script you have installed, and in vite script is called directly in HTML .


## React Router
React Router is a 3rd party library. Its not the part of core react library.
Its an industry standard to make a component folder in src and make all components inside it like a folder for Header anohter for Footer. In this folder header.jsx etc.
Link: 
 It is used in place of a tag. a tag refreshes pages so we use Link
 uses to
NavLink: 
Provides some additional features. 
