import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api, { getCsrfToken } from '../../api';

import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Paper,
  useTheme,
  IconButton,
  Stack,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './style.css';

const TransactionForm = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    amount: '',
    category: '',
    type: 'expense',
    date: '',
    description: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setForm({ ...form, amount: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await getCsrfToken(); // Get CSRF token
      const res = await api.post('/api/transactions', form);
      console.log('Transaction added:', res.data);
      setForm({ amount: '', category: '', type: 'expense', date: '', description: '' });
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
    }
    
  };

  return (
    <Box p={3}>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <FontAwesomeIcon icon={faFile} size="lg" />
        <Typography variant="h5">Add Transaction</Typography>
        <Box flexGrow={1} />
        <IconButton onClick={() => navigate('/dashboard')} color="primary">
          <ArrowBackIcon />
        </IconButton>
      </Stack>

      <Paper
        elevation={3}
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          p: 3,
          bgcolor: theme.palette.background.paper,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'row',
          gap: 3,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Track Your Transactions
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Easily manage your expenses and income by adding each transaction here.
          </Typography>
        </Box>

        <Box sx={{ flex: 2 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Amount"
                name="amount"
                value={form.amount}
                onChange={handleAmountChange}
                required
                fullWidth
                inputProps={{ inputMode: 'numeric' }}
              />

              <TextField
                label="Category"
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                fullWidth
              />

              <TextField
                select
                label="Type"
                name="type"
                value={form.type}
                onChange={handleChange}
                required
                fullWidth
              >
                <MenuItem value="expense">Expense</MenuItem>
                <MenuItem value="income">Income</MenuItem>
              </TextField>

              <TextField
                label="Date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                fullWidth
              />

              <TextField
                label="Description"
                name="description"
                multiline
                minRows={2}
                value={form.description}
                onChange={handleChange}
                fullWidth
              />

              <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Add Transaction
              </Button>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default TransactionForm;
