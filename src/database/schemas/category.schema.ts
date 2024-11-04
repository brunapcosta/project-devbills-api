import mongoose from "mongoose";

export const CategoySchema = new mongoose.Schema(
    {
        title: String,
        color: String,
    },
    { versionKey: false },
);

export const CategoryModel = mongoose.model('Category', CategoySchema);
