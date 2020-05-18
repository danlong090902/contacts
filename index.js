const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.json())
const cors = require('cors')

// app.use(morgan)
app.use(cors())


let persons = [
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]

app.get('/', (req, res) => {
  return res.send('<h1>Hello World!</h1>')
})


app.get('/api/persons', (req, res) => {
  return res.json(persons)
})

app.get('/info', (req, res) => {
  const personsLength = persons.length;
  const date = new Date();
  const content = `<h3>PhoneBook has info for ${personsLength} people</h3><h3>${date}</h3>`
  return res.send(content)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  console.log(id)
  const person = persons.find(person => person.id === id);
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(person => person.id !== id);
  res.status(204).end()
})

const tiny = morgan('tiny')

app.post('/api/persons', (req, res) => {
  const body = req.body
  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  }

  const unique = persons.some(person => person.name === body.name);


  if (unique) {
    return res.status(400).json({
      error: "name must unique"
    })
  }

  tiny(req, res, () => {
    console.log([
      req.url,
      JSON.stringify(req.body)
    ].join(' '))
  })

  const person = {
    name: body.name,
    number: body.number,
    id: 99,
  }

  persons = persons.concat(person)

  res.json(person)
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)