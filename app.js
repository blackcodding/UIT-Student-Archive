const fs = require('fs')
const http = require('http')
const url = require('url')

// Third party modules
const slugify = require('slugify')

// User defined modules
const replaceTemplate = require('./Modules/replaceTemplate')

// Reading data from file synchronously
// Load all templates synchronously bsc we need them to load only single time!

const tempOverview = fs.readFileSync(`${__dirname}/Templates/overviewTemplate.html`, 'utf8')
const tempStudent = fs.readFileSync(`${__dirname}/Templates/studentTemplate.html`, 'utf8')
const tempCard = fs.readFileSync(`${__dirname}/Templates/cardTemplate.html`, 'utf8')
const data = fs.readFileSync(`${__dirname}/Data/student.json`, 'utf8')

const dataObject = JSON.parse(data)

const slugs = dataObject.map(slug => slugify(slug.name, {lower: true}))
dataObject.forEach((el, i) => el['slug'] = slugs[i]);

const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true)

    // Overview Page 
    if(pathname === '/' || pathname === '/overview') {
        // Set content type to text/html for parsing html file!
        res.writeHead(202, {
            'content-type': 'text/html'
        })
        // Join to make the whole array a large one string
        // Here I have to loop through and replace placeholders for all array elements
        const cardHTML = dataObject.map(el => replaceTemplate(tempCard, el)).join('')
        const output = tempOverview.replace('{%STUDENTS_CARDS%}', cardHTML)
        res.end(output)

    // Product Page
    }else if(pathname === '/student'){
        res.writeHead(202, {
            'content-type': 'text/html'
        })
        // Here I have to only replace placeholders of a particular ID elements
        // Slug
        const id = dataObject.findIndex(el => el.slug === query.id)
        const student = dataObject[id]
        const output = replaceTemplate(tempStudent, student)

        res.end(output)

    // API Page 
    }else if(pathname === '/api'){
        // Can see this inside network -> errors
        res.writeHead(202, {
            'content-type': 'application/json'
        })
        res.end(data)  
        
    // 404 Not Found
    }else{
        // Can see this inside network -> errors
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.end('<h1>404</h1>')
    }
})

server.listen(8000, "127.0.0.1", () =>{
    console.log("Listening to request on port 8000...")
})