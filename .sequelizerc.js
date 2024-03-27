const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.json'), // Путь к файлу конфигурации базы данных
  'models-path': path.resolve('./Todo/todo.model'), // Путь к файлу с моделями
  'migrations-path': path.resolve('migrations') // Путь к директории с миграциями
};