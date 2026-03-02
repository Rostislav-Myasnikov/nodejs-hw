import { Schema, model } from 'mongoose';

const noteShema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      require: true,
    },
    content: {
      type: String,
      default: '',
      trim: true,
      require: false,
    },
    tag: {
      type: String,
      require: false,
      enum: [
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
      ],
      default: 'Todo',
    },
  },
  { timestamps: true },
);

export const Note = model('Note', noteShema);
