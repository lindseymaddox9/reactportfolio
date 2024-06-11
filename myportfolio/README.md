# reactportfolio
portfolio of single page applications using react skills deployed usin netlify, vite,coolers, bootstrap, dotenv,axios

GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)


You’ll deploy this application to Netlify. Follow the instructions in the Git Guide or consult the [Docs on Netlify](https://vitejs.dev/guide/static-deploy.html#netlify) to create a build that you can deploy.


![User clicks through About Me, Portfolio, Resume, and Contact sections on the webpage and enters information on Contact page.](./Assets/20-react-homework-demo-01.gif)


* Use mobile-first design.
* Ensure that the font size is large enough to read and that the colors don't cause eye strain.
* Consider using animations and React component libraries. Note that this will not affect your grade, but it might impact how potential employers gauge your knowledge.

  * Application must use React to render content.

  * Application has a single `Header` component that appears on multiple pages, with a `Navigation` component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.

* A single `Navigation` component within the header that will use `Link` components from `react-router-dom` to conditionally render the different sections of your portfolio

  * Application has a single `Project` component that’s used multiple times in the Portfolio section.

 

  * Application must be deployed to Netlify.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh