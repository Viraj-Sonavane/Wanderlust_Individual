module.exports = mongoose => {
    const Photography = mongoose.model(
      "photography",
      mongoose.Schema(
        {
          photographyPlace: String,
          photographyDescription: String,
          photographyReview: String,
          photographyAddress: String,
          isOpen: Boolean
        },
        { timestamps: true }
      )
    );
    return Photography;
  };