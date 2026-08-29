const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

const User = {
  getAll: () => {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, 'utf8');
    return data ? JSON.parse(data) : [];
  },

  save: (users) => {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  }
};

module.exports = User;