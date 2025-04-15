import React, { useMemo, useState } from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SideBar from './components/sideBar';
import TopBar from './components/topBar';
import Dashboard from './pages/Dashboard/dashboard';
import TransactionForm from './pages/TransactionForm/transactionForm';
import TransactionList from './pages/TransactionList/transactionList';
import { getDesignTokens } from './theme';
import InitialSetupForm from './pages/InitialSetupForm/initialSetupForm';

// Dummy page placeholders
const Reports = () => <h1>Reports</h1>;
const Goals = () => <h1>Goals & Budgets</h1>;
const Coach = () => <h1>AI Coach</h1>;
const Settings = () => <h1>Settings</h1>;
const Logout = () => <h1>Logging out...</h1>;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function App() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem('currentMode') || 'light');

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          <TopBar open={open} handleDrawerOpen={() => setOpen(true)} setMode={setMode} />
          <SideBar open={open} handleDrawerClose={() => setOpen(false)} />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-transaction" element={<TransactionForm />} />
              <Route path="/transactions" element={<TransactionList />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/coach" element={<InitialSetupForm />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
