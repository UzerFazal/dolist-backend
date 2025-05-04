let tasks = [];

exports.createTask = (req, res) => {
  const { title, description = "", status = "Not Started", dueDate = "", projectId = null } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const task = {
    id: Date.now().toString(),
    title,
    description,
    status,
    dueDate,
    projectId,
  };

  tasks.push(task);
  res.status(201).json({ message: "Task created successfully!", task });
};

exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: "Task deleted successfully!" });
};
