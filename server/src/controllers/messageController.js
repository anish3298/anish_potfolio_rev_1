import Message from '../models/Message.js';

export const getMessages = async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
};

export const createMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: 'Name, email, and message are required' });

  const savedMessage = await Message.create({ name, email, subject, message });
  res.status(201).json(savedMessage);
};

export const markMessageRead = async (req, res) => {
  const message = await Message.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
  if (!message) return res.status(404).json({ message: 'Message not found' });
  res.json(message);
};

export const deleteMessage = async (req, res) => {
  const message = await Message.findByIdAndDelete(req.params.id);
  if (!message) return res.status(404).json({ message: 'Message not found' });
  res.json({ message: 'Message deleted' });
};
