module.exports = (Schema, model) => {
    const Book = new Schema({
        title: { type: String, required: true },
        authors: [{ type: String, require: true }], 
        description: String, 
        image: { type: String }, 
        link: { type: String }
    })

    return model('Book', Book)
}

// const Book = mongoose.model('Book', bookSchema)
// module.exports = Book 