if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const express = require('express');
const path = require('path');
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
// const multer = require('multer');
// const upload = multer({dest: 'uploads/'})
// const ejs = require('ejs');
// const mysql = require('mysql')

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'password',
//     port: 3307,
//     database : 'carsPalace'
//   });

//   connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }

//     console.log('connected as id ' + connection.threadId);
//   });

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));


app.get('/carspalace', (req, res) => {
    res.render('home');
})

app.post('/carspalace', (req, res) => {
    const {userName, userPhone, carBrand, carKilo, modelYear, fuel, engineType, price, description} = req.body;

    const message = `from:${userName}
            phone:${userPhone}
            auto:${carBrand}
            kilometer:${carKilo}
            baujahr:${modelYear}
            motor: ${fuel}
            getrieb: ${engineType}
            price: ${price}
            bezeichnung:${description}`;

    try {
    client.messages
        .create({
            body: message,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+96170385313'
        })
        .then(message => console.log(message.sid))
        .done();

    } catch (err) {
        console.log('error: failed to fetch api:', err)
    }
    res.redirect('/carspalace');
})

app.listen('3000', () => {
    console.log('Serving app on port 3000')
})