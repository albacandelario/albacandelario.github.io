const c = require('./../config/constants');

const rankingData = [
    {
        id: 1,
        userName: 'test1',
        times: {
            world1: {
                level1: 0,
                level2: 0,
                level3: 0,
                level4: 0,
            },
            world2: {
                level1: 0,
                level2: 0,
                level3: 3,
                level4: 0,
            },
            world3: {
                level1: 0,
                level2: 0,
                level3: 0,
                level4: 0,
            }
        },
        onlineScore: 5,
    },
    {
        id: 2,
        userName: 'test2',
        times: {
            world1: {
                level1: 0,
                level2: 0,
                level3: 0,
                level4: 0,
            },
            world2: {
                level1: 0,
                level2: 0,
                level3: 1,
                level4: 0,
            },
            world3: {
                level1: 0,
                level2: 0,
                level3: 0,
                level4: 0,
            }
        },
        onlineScore: 7,
    },
    {
        id: 3,
        userName: 'test3',
        times: {
            world1: {
                level1: 0,
                level2: 0,
                level3: 0,
                level4: 0,
            },
            world2: {
                level1: 0,
                level2: 0,
                level3: 7,
                level4: 0,
            },
            world3: {
                level1: 0,
                level2: 0,
                level3: 0,
                level4: 0,
            }
        },
        onlineScore: 2,
    },
    {
        id: 4,
        userName: 'test4',
        times: {
            world1: {
                level1: 0,
                level2: 0,
                level3: 0,
                level4: 0,
            },
            world2: {
                level1: 0,
                level2: 0,
                level3: 4,
                level4: 0,
            },
            world3: {
                level1: 0,
                level2: 0,
                level3: 0,
                level4: 0,
            }
        },
        onlineScore: 12
    },
    {
        id: 5,
        userName: 'test5',
        times: {
            world1: {
                level1: 0,
                level2: 0,
                level3: 0,
                level4: 0,
            },
            world2: {
                level1: 0,
                level2: 0,
                level3: 25,
                level4: 0,
            },
            world3: {
                level1: 0,
                level2: 0,
                level3: 12,
                level4: 0,
            }
        },
        onlineScore: 19
    },
];

module.exports = {
    getRankings: (req, res) => {
        if (req.query.type === 'indiv') {
            res.status(c.status.success).send({ msg: rankingData
                .sort((a, b) => (b.times[`world${req.query.world}`][`level${req.query.level}`]) 
                - a.times[`world${req.query.world}`][`level${req.query.level}`])});
        } else {
            res.status(c.status.success).send({ msg: rankingData
                .sort((a, b) => b.onlineScore - a.onlineScore) });
        }
    }
}