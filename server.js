const express = require("express");
const { check, validationResult } = require('express-validator');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const warehouses = require('./models/warehouse');
const aisle = require('./models/aisle');
const item = require('./models/Item');

const initialiseDb = require('./initialiseDb');
initialiseDb();

const app = express();
const port = 6000;



app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

//Configures handlebars library to work well w/ Express + Sequelize model
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
});

//Tell Express app we're using handlebars library
app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

const warehouseChecks = [
    check('name').not().isEmpty().trim().escape(),
    check('image').isURL(),
    // check('name').isLength({ max: 50 })
]

app.get('/warehouses', async (req, res) => {
    const warehouses = await Warehouse.findAll();
    res.render('warehouses', { warehouses });
});

app.get('/warehouses/:id', async (req, res) => {
    const warehouse = await Warehouse.findByPk(req.params.id, {include: {
            model: Aisles,
            include: Item
        }
    });
    res.render('warehouse', { warehouse });
});



const aisleChecks = [
    check('name').not().isEmpty().trim().escape(),
    check('image').isURL(),
    // check('name').isLength({ max: 50 })
]

app.get('/aisles', async (req, res) => {
    const aisles = await Aisles.findAll();
    res.render('aisles', { aisles });
});


myapp.get('/aisles/:id', async (req, res) => {
	const aisles = await Aisles.findByPk(req.params.id, {include : Warehouse});
	res.json({ aisles })
})

app.get('/items', async (req, res) => {
    const items = await Item.findAll();
    res.render('items', { items });
});


myapp.get('/items/:id', async (req, res) => {
	const items = await Item.findByPk(req.params.id,);
	res.json({ aisles })
})

app.get('/new-item-form', (req, res) => {
    res.render('newItemForm');
});



app.post('/new-warehouse', async (req, res) => {
    const newWarehouse = await Warehouse.create(req.body);
    const foundWarehouse = await Warehouse.findByPk(newWarehouse.id);
    if(foundWarehouse) {
        res.status(201).send('New Warehouse created!!~')
    } else {
        console.log("Could not create Warehouse~")
    }
});

app.post('/warehouses', warehouseChecks, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    await Warehouse.create(req.body);
    res.sendStatus(201);
});

app.delete('/warehouses/:id', async (req, res) => {
    await Warehouse.destroy({
        where: {
            id: req.params.id
        }
    });
    res.sendStatus(200);
});

app.put('/warehouses/:id', warehouseChecks, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const warehouse = await Warehouse.findByPk(req.params.id);
    await warehouse.update(req.body);
    res.sendStatus(200);
});

app.patch('/warehouses/:id', async (req, res) => {
    const warehouse = await Warehouse.findByPk(req.params.id);
    await warehouse.update(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});