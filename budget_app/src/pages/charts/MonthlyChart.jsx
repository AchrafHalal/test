import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Paper, Typography, useTheme } from "@mui/material";

const sampleData = [
  { month: "Jan", income: 3200, expenses: 2500 },
  { month: "Feb", income: 4000, expenses: 3100 },
  { month: "Mar", income: 3700, expenses: 2900 },
  { month: "Apr", income: 4200, expenses: 3300 },
  { month: "May", income: 3900, expenses: 3000 },
  { month: "Jun", income: 4500, expenses: 3600 },
  { month: "Jul", income: 4700, expenses: 3900 },
];

export default function MonthlyChart() {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography variant="h6" fontWeight={600} mb={2}>
        Monthly Income vs Expenses
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sampleData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
          <XAxis dataKey="month" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary} />
          <Tooltip
            contentStyle={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 8,
              fontSize: 13,
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke={theme.palette.success.main}
            strokeWidth={3}
            dot={{ r: 0 }}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke={theme.palette.error.main}
            strokeWidth={3}
            dot={{ r: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
