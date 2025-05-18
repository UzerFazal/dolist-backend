let tasks = [];

exports.createTask = (req, res) => {
  const {
    title,
    description = "",
    status = "Not Started",
    dueDate = "",
    projectId = null,
  } = req.body;

  if (!title || typeof title !== "string") {
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
  tasks = tasks.filter((task) => task.id !== id);
  res.json({ message: "Task deleted successfully!" });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, status, projectId } = req.body;

  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (dueDate !== undefined) task.dueDate = dueDate;
  if (status !== undefined) task.status = status;
  if (projectId !== undefined) task.projectId = projectId;

  res.json({ message: "Task updated", task });
};
