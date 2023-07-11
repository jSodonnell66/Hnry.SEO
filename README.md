<<<<<<< HEAD
# My First 11ty Blog

Welcome to my first Eleventy.js blog project using WebC! 

This README provides step-by-step instructions on how to set up and work with my blog. 

This project aims to create a landing page that serves as a hub for others to learn about my professional experience, interests, and aspirations as a software engineer. 

The centrepiece will be an "about me" section that provides a comprehensive overview of my background and development journey, showcasing my growth and dedication to expanding my skill set. 

Additionally, the blog will include relevant information about my past experiences and accomplishments, highlighting my educational background, work history, and notable projects to provide a broader perspective on my professional development.
 
To ensure a smooth development experience, please follow the steps outlined below:

## Prerequisites 
=======
# Eleventy.js Blog Setup Guide

Welcome to my first Eleventy.js blog project using WebC!

This README provides step-by-step instructions on how to set up and work with my blog.

This project aims to create a landing page that serves as a hub for others to learn about my professional experience, interests, and aspirations as a software engineer.

The centrepiece will be an "about me" section that provides a comprehensive overview of my background and development journey, showcasing my growth and dedication to expanding my skill set.

Additionally, the blog will include relevant information about my past experiences and accomplishments, highlighting my educational background, work history, and notable projects to provide a broader perspective on my professional development.

To ensure a smooth development experience, please follow the steps outlined below:

## Prerequisites
>>>>>>> ccb9fa5 (README added)

Before starting, make sure you have the following software installed on your system:

-Node.js (version 12 or higher)

-NPM (Node Package Manager)

## Getting Started

1. Clone the repository to your local machine.

```
git clone <repository-url>
```

2. Navigate to the project directory:

```
cd <project-directory>
```

3. Install project dependencies.

```
npm install
```

4. Configure the webc extension:

The Eleventy.js blog project includes WebC files, which require the WebC extension to be installed. Follow these steps to update the settings.json file and associate .webc and .njk files with HTML:

- Open the settings.json file in your preferred code editor.

- Locate the files.associations section.

- Add the following code snippet:

```
"files.associations": {
  "*.webc": "html",
  "*.njk": "html"
}
```

5. Build and run the project:

```
npm run dev
```

This command will compile the blog and start a local development server. Access the blog in your web browser at http://localhost:8080.

<<<<<<< HEAD

=======
>>>>>>> ccb9fa5 (README added)
## Note on webc Syntax Highlighting

Please be aware that webc is a relatively new technology, and as such, syntax highlighting may be inconsistent or not fully supported in all code editors. Exercise caution and ensure you are following webc principles by referencing the official WebC documentation and resources provided by Eleventy.

For more information and detailed documentation about Eleventy.js and WebC, please visit the following resources:

- Eleventy Documentation

- WebC Specification

### Contributing

If you encounter any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request on the project repository. Your contributions are all welcome!

## License

This project is licensed under the MIT License.
