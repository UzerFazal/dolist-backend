const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const projectRoutes = require('./routes/projects');

app.use(express.json());

// Подключаем маршруты
app.use('/api/tasks', taskRoutes);
app.use('/api/projects', projectRoutes);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
