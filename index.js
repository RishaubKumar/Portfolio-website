const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 80;

const indexPath = path.join(__dirname, 'index.html');
const home = fs.readFileSync(indexPath);
const aboutPath = path.join(__dirname, 'About.html');
const about = fs.readFileSync(aboutPath);
const servicesPath = path.join(__dirname,'services.html');
const services = fs.readFileSync(servicesPath);
const projectsPath = path.join(__dirname,'projects.html');
const projects = fs.readFileSync(projectsPath);
const contactPath = path.join(__dirname,'contact.html');
const contact = fs.readFileSync(contactPath);

const server = http.createServer((req, res) => {
    console.log(req.url);
    let content;
    if (req.url === '/') {
        content = home;
    } else if (req.url === '/about') {
        content = about;
    } else if (req.url === '/services') {
        content = services;
    } else if (req.url === '/projects') {
        content = projects;
    } else if (req.url === '/contact') {
        content = contact;
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
        return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(content);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});