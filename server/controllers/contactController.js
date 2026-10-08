const memoryContacts = [];

export const getContacts = async (_req, res) => {
  res.json({ success: true, data: memoryContacts });
};

export const createContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields.' });
  }

  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedMessage = String(message).trim();

  if (trimmedName.length < 2) {
    return res.status(400).json({ success: false, message: 'Name must be at least 2 characters long.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  if (trimmedMessage.length < 10 || trimmedMessage.length > 1200) {
    return res.status(400).json({ success: false, message: 'Message must be between 10 and 1200 characters.' });
  }

  const newContact = {
    id: Date.now(),
    name: trimmedName,
    email: trimmedEmail,
    message: trimmedMessage,
    createdAt: new Date().toISOString(),
  };

  memoryContacts.unshift(newContact);

  return res.status(201).json({ success: true, message: 'Message sent successfully', data: newContact });
};
