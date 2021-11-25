const mongoose = require("mongoose")
const schema = mongoose.schema

const inventorySchema = new schema({
    item: {
        name: string,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)