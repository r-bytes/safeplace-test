import express, { Request, Response } from "express"

type Message = {
    id: number,
    text: string
}
// Define the complaint data model
type Complaint = {
  id: number
  title: string
  description: string
  messages: Message[]
}

// Mock data for complaints
const complaints: Complaint[] = [
  {
    id: 1,
    title: "Title for Complaint 1",
    description: "Description for Complaint 1",
    messages: [
      { id: 1, text: "Message  1 for Complaint  1" },
      { id: 2, text: "Message  2 for Complaint  1" },
    ],
  },
  {
    id: 2,
    title: "Title for Complaint 2",
    description: "Description for Complaint 2",
    messages: [
      { id: 3, text: "Message  1 for Complaint  2" },
      { id: 4, text: "Message  2 for Complaint  2" },
    ],
  },
  {
    id: 99,
    title: "Title for Complaint 99",
    description: "Description for Complaint 99",
    messages: [
      { id: 5, text: "Message  1 for Complaint  99" },
      { id: 6, text: "Message  2 for Complaint  99" },
    ],
  },
]

const app = express()

/* ---------------------------
    Routes for complaints
--------------------------- */

// Route to get a complaint by id
app.get("/complaints/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10)
  const complaint = complaints.find((c: Complaint) => c.id === id)

  if (complaint) {
    res.json(complaint)
  } else {
    res.status(404).send("Complaint not found")
  }
})

// Route to update a complaint by ID
app.put("/complaints/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10)
  const index = complaints.findIndex((c: Complaint) => c.id === id)

  if (index !== -1) {
    complaints[index] = req.body
    res.json(complaints[index])
  } else {
    res.status(404).send("Complaint not found")
  }
})

// Route to delete a complaint by ID
app.delete("/complaints/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10)
  const index = complaints.findIndex((c: Complaint) => c.id === id)

  if (index !== -1) {
    complaints.splice(index, 1)
    res.status(204).send()
  } else {
    res.status(404).send("Complaint not found")
  }
})

/* ---------------------------
    Routes for messages
--------------------------- */

// Route to get messages for a specific complaint
app.get('/complaints/:id/messages', (req, res) => {
  const id = parseInt(req.params.id,  10);
  const complaint = complaints.find(c => c.id === id);

  if (complaint) {
    res.json(complaint.messages);
  } else {
    res.status(404).send('Complaint not found');
  }
});

// Route to update a message for a specific complaint
app.put('/complaints/:complaintId/messages/:messageId', (req, res) => {
  const complaintId = parseInt(req.params.complaintId,   10);
  const messageId = parseInt(req.params.messageId,   10);
  const complaint = complaints.find(c => c.id === complaintId);

  if (complaint) {
    const messageIndex = complaint.messages.findIndex(m => m.id === messageId);
    if (messageIndex !== -1) {
      complaint.messages[messageIndex] = req.body;
      res.json(complaint.messages[messageIndex]);
    } else {
      res.status(404).send('Message not found');
    }
  } else {
    res.status(404).send('Complaint not found');
  }
});

// Route to delete a message from a specific complaint
app.delete('/complaints/:complaintId/messages/:messageId', (req, res) => {
  const complaintId = parseInt(req.params.complaintId,   10);
  const messageId = parseInt(req.params.messageId,   10);
  const complaint = complaints.find(c => c.id === complaintId);

  if (complaint) {
    const messageIndex = complaint.messages.findIndex(m => m.id === messageId);
    if (messageIndex !== -1) {
      complaint.messages.splice(messageIndex,   1);
      res.status(204).send();
    } else {
      res.status(404).send('Message not found');
    }
  } else {
    res.status(404).send('Complaint not found');
  }
});

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
