##Text Editor

This is a browser-based text editor application built as a single-page application (SPA) that meets the Progressive Web App (PWA) criteria. The application features various data persistence techniques to ensure redundancy in case certain options are not supported by the browser. It is also designed to function offline.

##Features
Create, edit, and save text documents within the browser.
Offline functionality allows users to access and edit documents even without an internet connection.
Data persistence is achieved using the IndexedDB database.
Utilizes the idb package, a lightweight wrapper around the IndexedDB API, to simplify storing and retrieving data.
The application follows the PWA guidelines, allowing users to install it as a standalone app on their devices.
Supports a responsive design, providing an optimal user experience across different screen sizes.
Technologies Used
HTML, CSS, and JavaScript for the front-end user interface and functionality.
IndexedDB, a web database technology, for data persistence.
idb package, a lightweight wrapper around the IndexedDB API, for simplified database operations.
Service Worker API for enabling offline functionality.
PWA techniques, such as a web app manifest and service worker caching, to meet PWA criteria.


License
This project is licensed under the MIT License.

