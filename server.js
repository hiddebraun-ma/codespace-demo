import getTime from 'ntp-client-promise'
import { DateTime } from 'luxon'
import express from 'express'

const server = express()
const port = 3000

server.get('/', (req, res) => {
    getTime()
        .then(date => {
            const now = DateTime.fromJSDate(date, { zone: "Europe/Amsterdam" })
            const timestring = now.setLocale('nl').toLocaleString(DateTime.DATETIME_FULL)
            res.send(`<h1>Het is nu exact: ${timestring}</h1>`)
        })
        .catch(console.log);
    
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

