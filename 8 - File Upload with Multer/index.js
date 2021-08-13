const express = require('express')
const multer = require('multer')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('./public'))

// * multer(option: {}) -> we can provide options in options object. like 'dest' property save uploaded file in provided path

/**
 * ! Upload single file
 * * upload.single('input-field-name') -> upload single file at a time
 */
const upload = multer({ dest: './uploads' })
app.post('/single', upload.single('single-file'), (req, res) => {
    res.send('<h1>File is uploaded successfully</h1>')
})

/**
 * ! Upload multiple files
 * * upload.array('input-field-name', max-file-no: number) -> upload multiple files at a time. if maximum files limit reach throw error
 */

app.post('/multiple', upload.array('multiple-file', 2), (req, res) => {
    res.send('<h1>File is uploaded successfully</h1>')
})

/**
 * ! Upload multiple files from multiple fields
 * * upload.fields(fields: [{},{},..]) -> upload multiple files from multiple fields at a time. every field object contains {name: input-field-name, maxCount: maximum-file-length}
 */

app.post(
    '/multifield',
    upload.fields([
        { name: 'avatar', maxCount: 2 },
        { name: 'gallery', maxCount: 2 }
    ]),
    (req, res) => {
        res.send('<h1>File is uploaded successfully</h1>')
    }
)

/**
 * ! Form submit
 * * multer can use for parse form data with Content-type: multipart/form-data
 * * upload.none() can parse form data
 */

app.post('/form', upload.none(), (req, res) => {
    console.log(req.body)
    res.send('<h1>Form submitted successfully</h1>')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
