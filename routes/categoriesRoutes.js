const express = require ('express');
const router = express.Router();


router.get('/', (req, res) => {
    const categories = [
        { name: 'burgers',
          img: '/img/categories/burgers.png'
        },
        { name: 'drinks',
          img: '/img/categories/drinks.png'
        },
        { name: 'deserts',
          img: '/img/categories/deserts.png'
        },
    ];
    res.json(categories);
});

module.exports = router;