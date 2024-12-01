CREATE TABLE IF NOT EXISTS Articles (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    badges JSON NOT NULL,
    icon VARCHAR(255) NOT NULL
);


INSERT INTO Articles (id, title, description, category, badges, icon) VALUES
(1, 'Property Rights and Ownership', 'Comprehensive guide to property ownership, transfer, and rights.', 'property', '["recent"]', 'Building2'),
(2, 'Criminal Procedure Code', 'Detailed overview of criminal procedures and regulations.', 'criminal', '["urgent"]', 'Gavel'),
(3, 'Civil Rights Protection', 'Understanding civil rights and legal protections.', 'civil', '["pending"]', 'Scale'),
(4, 'Constitutional Amendments', 'Latest constitutional amendments and their implications.', 'constitutional', '["recent", "urgent"]', 'BookOpen'),
(5, 'Business Regulations', 'Current business laws and regulatory requirements.', 'business', '["recent"]', 'Users2');



CREATE TABLE IF NOT EXISTS article_details (
    id VARCHAR(255) PRIMARY KEY, -- Unique identifier for the article
    title VARCHAR(255) NOT NULL, -- Title of the article
    short_description TEXT, -- Short description of the article
    content TEXT NOT NULL, -- Full content of the article
    author_name VARCHAR(255) NOT NULL, -- Name of the author
    author_avatar VARCHAR(255), -- URL of the author's avatar
    author_role VARCHAR(255), -- Role of the author
    published_at DATETIME NOT NULL, -- Publication date and time
    reading_time VARCHAR(50), -- Estimated reading time
    categories JSON, -- List of categories (stored as JSON)
    images JSON, -- List of images with URLs and alt text (stored as JSON)
    tags JSON -- List of tags (stored as JSON)
);



INSERT INTO article_details (
    id, title, short_description, content, 
    author_name, author_avatar, author_role, 
    published_at, reading_time, categories, 
    images, tags
) VALUES
(
    '1', 
    'Introduction to Node.js', 
    'Learn the basics of Node.js in this comprehensive guide.', 
    'Node.js is a powerful JavaScript runtime environment built on Chromes V8 engine, which is known for its speed and efficiency in executing JavaScript code. Unlike traditional JavaScript environments that operate within the browser, Node.js enables developers to execute JavaScript on the server side. This unique capability has revolutionized the way developers approach both client-side and server-side programming, allowing for a unified development experience.

The V8 engine, developed by Google, is the core of Node.jss performance. It compiles JavaScript directly into machine code, bypassing the need for interpretation and ensuring lightning-fast execution. This makes Node.js particularly suitable for building scalable and high-performance applications.

One of Node.jss standout features is its asynchronous and non-blocking nature. It uses an event-driven architecture that allows it to handle thousands of simultaneous connections without bogging down the server. Traditional server-side technologies often rely on multi-threading to manage concurrent connections, which can be resource-intensive. In contrast, Node.js processes all requests on a single thread, delegating I/O operations to the event loop. This approach is ideal for applications requiring real-time communication, such as chat applications, online gaming platforms, and collaborative tools.

Moreover, Node.jss vast ecosystem, managed through npm (Node Package Manager), provides developers with access to millions of open-source libraries and modules. These tools simplify tasks like setting up web servers, interacting with databases, and implementing real-time features. Frameworks like Express.js, Koa.js, and NestJS further enhance development efficiency.

In summary, Node.js is a versatile runtime that empowers developers to build modern, fast, and scalable applications. Its integration of JavaScript for both front-end and back-end development has made it a cornerstone of full-stack development.',
    'John Doe', 
    'https://example.com/avatars/john.jpg', 
    'Senior Developer', 
    '2024-01-01 10:00:00', 
    '10 minutes', 
    '["Programming", "JavaScript"]', 
    '[{"url": "https://example.com/images/nodejs.jpg", "alt": "Node.js Logo"}]', 
    '["nodejs", "javascript", "backend"]'
),
(
    '2', 
    'Understanding REST APIs', 
    'A guide to understanding how REST APIs work and how to use them.', 
    'REST APIs (Representational State Transfer Application Programming Interfaces) are an integral part of modern web development, serving as a bridge that allows different software systems to communicate seamlessly over the web. They are based on the principles of REST, an architectural style defined by Roy Fielding in his doctoral dissertation in 2000. REST APIs enable developers to build scalable, stateless, and efficient systems that are easy to understand and maintain.

At the heart of REST APIs lies the concept of resources. A resource is any piece of data or functionality that a server can provide, such as a user profile, a blog post, or a product listing. Each resource is uniquely identified by a URL, and developers interact with these resources using standard HTTP methods like GET, POST, PUT, and DELETE. For example, fetching a blog post might involve sending a GET request to `https://api.example.com/posts/1`.

One of the most significant advantages of REST APIs is their stateless nature. Each request from a client to the server must contain all the information needed to process it. The server does not retain any memory of previous requests, which simplifies server-side implementation and improves scalability. This design also enables REST APIs to handle a large number of concurrent users without significant performance degradation.

REST APIs are inherently flexible and can be used with various data formats, although JSON (JavaScript Object Notation) is the most commonly used format due to its lightweight nature and compatibility with virtually all programming languages. JSON responses are easy to read and parse, making them ideal for transmitting structured data between clients and servers.

Another crucial aspect of REST APIs is their reliance on HTTP status codes to communicate the outcome of operations. For instance, a successful operation might return a 200 (OK) status code, while an attempt to retrieve a non-existent resource could result in a 404 (Not Found) status. This standardized approach ensures that developers can quickly identify and handle errors without delving into complex custom error-handling mechanisms.

REST APIs are widely used across industries and applications. They power social media platforms, e-commerce websites, financial systems, and more. A well-designed REST API allows developers to build applications that can integrate with external services effortlessly, enabling functionalities like payment processing, social login, and real-time data synchronization.

In conclusion, REST APIs are a cornerstone of modern software architecture. Their simplicity, scalability, and compatibility with web standards make them a preferred choice for developers worldwide. As the demand for connected and interoperable systems continues to grow, REST APIs remain a foundational tool for building robust and versatile applications.',
    'Jane Smith', 
    'https://example.com/avatars/jane.jpg', 
    'API Specialist', 
    '2024-01-02 15:30:00', 
    '8 minutes', 
    '["Web Development", "APIs"]', 
    '[{"url": "https://example.com/images/restapi.jpg", "alt": "REST API Illustration"}]', 
    '["rest", "api", "web"]'
),
(
    '3', 
    'Getting Started with React', 
    'This article explains the basics of React and how to get started.', 
    'React is a JavaScript library designed for building user interfaces, and it has transformed the way developers approach frontend development since its release by Facebook in 2013. Known for its simplicity, flexibility, and efficiency, React has become one of the most popular tools for creating dynamic and interactive web applications.

At the heart of React is the concept of components. Components are the building blocks of React applications, encapsulating logic, design, and behavior into reusable pieces. For example, a button, a navigation menu, or a user profile card can all be created as independent components. This modular approach makes it easier to manage and scale large applications while maintaining consistency in design and functionality.

One of React’s key innovations is its use of the virtual DOM (Document Object Model). Traditionally, updating the DOM can be a slow process because browsers need to re-render the entire page or significant portions of it after changes. React solves this problem by introducing the virtual DOM, an in-memory representation of the actual DOM. When a component’s state or properties change, React updates the virtual DOM first, compares it with the previous version, and calculates the minimum set of changes required to update the real DOM. This process, known as reconciliation, ensures optimal performance even in complex, data-intensive applications.

React also simplifies state management through hooks like `useState` and `useEffect`. State refers to the dynamic data that influences a component’s behavior and appearance. For instance, a counter component might have a state variable that tracks the current count. Hooks provide an elegant way to manage this state in functional components, replacing the older class-based approach and making code cleaner and more intuitive.

Props (short for properties) are another essential concept in React. Props allow data to be passed from parent components to child components, enabling components to be highly reusable and flexible. Unlike state, props are read-only, ensuring that the data flow in a React application remains predictable and easy to debug.

React applications are typically built using JSX (JavaScript XML), a syntax extension that allows developers to write HTML-like code within JavaScript. JSX combines the declarative nature of HTML with the power of JavaScript, enabling developers to create complex UIs with minimal boilerplate. For example, a simple greeting component in JSX might look like this:

```jsx
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}
```

Beyond the basics, React’s ecosystem offers powerful tools and libraries for building advanced features. React Router, for example, enables seamless navigation between pages in single-page applications. State management libraries like Redux and MobX provide solutions for managing application-wide state, particularly in large projects with complex data flows. For styling, libraries like Styled Components and Emotion integrate seamlessly with React, allowing for CSS-in-JS solutions.

React’s versatility extends beyond the browser. With frameworks like React Native, developers can use the same principles and syntax to build native mobile applications for iOS and Android. This ability to share logic and components across platforms has made React a go-to choice for companies looking to streamline development efforts.

The community around React is another major strength. With thousands of contributors and an active user base, React benefits from a constant stream of updates, tutorials, and third-party libraries. Popular companies like Facebook, Instagram, Airbnb, and Netflix use React in their applications, further solidifying its reputation as a reliable and scalable library.

In summary, React is more than just a library—it’s a comprehensive toolset for building modern user interfaces. Its component-based architecture, efficient virtual DOM, and robust ecosystem make it ideal for projects ranging from simple web apps to complex enterprise solutions. As the web continues to evolve, React remains at the forefront, empowering developers to create fast, interactive, and maintainable applications.',
    'Alice Johnson', 
    'https://example.com/avatars/alice.jpg', 
    'Frontend Developer', 
    '2024-01-03 09:00:00', 
    '12 minutes', 
    '["Frontend", "React"]', 
    '[{"url": "https://example.com/images/react.jpg", "alt": "React Logo"}]', 
    '["react", "frontend", "javascript"]'
);


CREATE TABLE ipc (
    id INT PRIMARY KEY,
    number VARCHAR(10) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    punishment TEXT NOT NULL,
    relatedSections TEXT
);

INSERT INTO ipc (id, number, title, description, punishment, relatedSections)
VALUES
(1, '302', 'Punishment for murder', 'Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.', 'Death or imprisonment for life, and fine', '299, 300, 301');


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (email, password)
VALUES 
('john.doe@example.com', 'hashedpassword123'),
('jane.doe@example.com', 'hashedpassword456'),
('sam.smith@example.com', 'hashedpassword789');


