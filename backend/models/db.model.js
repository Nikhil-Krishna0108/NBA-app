const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const criteria1 = new Schema(
    {
        c11 : {type : JSON},
        c12 : {type : JSON},
    }
);

const criteria2 = new Schema(
    {
        c21 : {type : JSON},
        c22 : {type : JSON},
        c24 : {type : JSON}, 
    }
);

const criteria3 = new Schema(
    {
        c31 : {type : JSON},
        c32 : {type : JSON},
        c33 : {type : JSON},
        c34 : {type : JSON},
    }
);

const criteria5 = new Schema(
    {
        c51 : {type : JSON},
        c52 : {type : JSON},
        c53 : {type : JSON}, 
        c54 : {type : JSON},
        c55 : {type : JSON},
    }
);

const criteria6 = new Schema(
    {
        c61 : {type : JSON},
        c62 : {type : JSON},
        c63 : {type : JSON},
    }
);