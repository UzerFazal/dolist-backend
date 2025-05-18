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

exports.deleteProject = (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Project not found' });
  }

  projects.splice(index, 1);
  res.json({ message: 'Project deleted successfully' });
};

exports.updateProject = (req, res) => {
  const { id } = req.params;
  const { name, description, status, dueDate } = req.body;

  const project = projects.find(p => p.id === id);
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  if (name !== undefined) project.name = name;
  if (description !== undefined) project.description = description;
  if (status !== undefined) project.status = status;
  if (dueDate !== undefined) project.dueDate = dueDate;

  res.json({ message: "Project updated", project });
};
