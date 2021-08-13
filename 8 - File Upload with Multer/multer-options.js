const path = require('path')
const express = require('express')
const multer = require('multer')
const app = express()
const port = process.env.PORT || 3000

/**
 * ! Multer options
 * ? limits: {fileSize, fieldNameSize}
 * * fileSize -> maximum size of each file in byte
 * * fieldNameSize -> maximum size of field name in byte
 * All limits: https://github.com/expressjs/multer/blob/master/README.md#limits
 *
 * ? fileFilter: (req,file,callback) => {}
 * * req -> request object
 * * file -> all file related info in this object like fieldName, originalname with extension, encoding, file's mimetype
 * * callback(error,isAcceptable) -> we can pass error and acceptable false when condition not match
 * note: multer error is a instance of multer.multerError
 *
 * ? multer.diskStorage({destination(),filename()})
 * * -> create and set a filename before storing in database
 */

const generateRandomName = (length) => {
    const possibleChar = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let randomString = ''
    for (let i = 0; i < length; i++) {
        randomString += possibleChar.charAt(
            Math.floor(Math.random() * (possibleChar.length + 1))
        )
    }
    return randomString
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname)
        const fileName = `${generateRandomName(10)}${Date.now()}${fileExtension}`
        cb(null, fileName)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3000000, // Default 1mb / 10 lakh bytes
        fieldNameSize: 400 // Default 100 bytes
    },
    fileFilter: (req, file, callback) => {
        if (file.fieldname === 'image') {
            if (
                file.mimetype === 'image/png' ||
                file.mimetype === 'image/jpeg' ||
                file.mimetype === 'image/x-icon'
            ) {
                callback(null, true)
            } else {
                callback(Error('Only jpg, jpeg, png or ico formate acceptable'), false)
            }
        } else if (file.fieldname === 'doc') {
            if (file.mimetype === 'application/pdf') {
                callback(null, true)
            } else {
                callback(Error('Only pdf formate acceptable'), false)
            }
        } else {
            callback(Error('Incorrect field name', false))
        }
    }
})

app.disable('x-powered-by')
app.use(express.static('./public', { index: 'multer-options.html' }))

app.post(
    '/options',
    upload.fields([
        { name: 'image', maxCount: 1 },
        { name: 'doc', maxCount: 1 }
    ]),
    (req, res) => {
        console.log(req.files) // multer files information
        res.send('<h1>Form is submitted successfully</h1>')
    }
)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
