
const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const loanRoutes = require('./routes/loanRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', bookRoutes);
app.use('/api', userRoutes);
app.use('/api', loanRoutes);

app.listen(port, () => {
 console.log(`Server running on http://localhost:${port}`);
});
