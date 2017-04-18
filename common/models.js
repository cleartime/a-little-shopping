module.exports = {
    user: {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        gender: {
            type: Boolean,
            default: true
        }
    },
    commodity: {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        }
    },
    cart: {
        uId: {
            type: String,
            required: true
        },
        cId: {
            type: String,
            required: true
        },
        cName: {
            type: String,
            required: true
        },
        cPrice: {
            type: String,
            required: true
        },
        cImgSrc: {
            type: String,
            required: true
        },
        cQuantity: {
            type: Number,
            required: true
        },
        cStatus: {
            type: Boolean,
            default: false
        }
    }
};