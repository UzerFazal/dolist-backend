let projects = [];

exports.createProject = (req, res) => {
  const { name, description = "", status = "Planned", dueDate = "" } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Project name is required" });
  }

  const project = {
    id: Date.now().toString(),
    name,
    description,
    status,
    dueDate,
  };

  projects.push(project);
  res.status(201).json({ message: "Project created successfully!", project });
};

exports.getAllProjects = (req, res) => {
  res.json(projects);
};
