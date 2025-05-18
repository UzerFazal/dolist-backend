// Simple Task model
class Task {
    constructor(id, name, projectId) {
      this.id = id;
      this.name = name;
      this.projectId = projectId || null;
    }
  }
  
  module.exports = Task;
  