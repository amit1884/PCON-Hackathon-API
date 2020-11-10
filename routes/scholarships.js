const express = require('express')
const mongoose = require('mongoose');

const Scholarship = require('../Model/Info');

const router = express.Router();

router.get('/', async (req, res) => {
    res.send('Welcome to ScholarShips');
});

router.get('/types', async (req, res) => {
    const infoes = await Scholarship.find({}).distinct('Type');

    res.status(200).json({
        status: 1,
        types: infoes
    });
});

router.get('/froms', async (req, res) => {
    const type = req.query.type;
    const infoes = await Scholarship.find({ Type: type }).distinct('From');

    res.status(200).json({
        status: 1,
        froms: infoes
    })
});

router.get('/details', async (req, res) => {
    let type = req.query.type;
    let from = req.query.from;

    let info;

    if (type == undefined) {
        res.status(200).json({
            status: 0,
            message: 'Chilla Chilla ke Scheme Bta'
        });
    } else if (from == undefined) {
        info =  Scholarship.find({
            Type: type
        });
    }   else {
        info = Scholarship.find({
            Type: type,
            From: from
        });
    }
    
    info = await info.exec();
    res.status(200).json({
        message: info,
        status: 1
    })
});




// Central Scheme Data Route
router.get('/central', async(req,res)=>{
    const infoes = await Scholarship.find({ Type: 'Central Schemes' });
    res.status(200).json({
        message:'Central Scheme Data Fetched',
        data:infoes
    })
})
// State Scheme Data Route
router.get('/state', async(req,res)=>{
    const infoes = await Scholarship.find({ Type: 'State Schemes' });
    res.status(200).json({
        message:'State Scheme Data Fetched',
        data:infoes
    })
})
// UGC/AICTE Scheme Data Route
router.get('/ugc', async(req,res)=>{
    const infoes = await Scholarship.find({ Type: 'UGC / AICTE Schemes' });
    res.status(200).json({
        message:'UGC Scheme Data Fetched',
        data:infoes
    })
})
module.exports = router;