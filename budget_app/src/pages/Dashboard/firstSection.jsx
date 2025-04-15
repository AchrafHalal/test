import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { FaMoneyBillWave, FaRegMoneyBillAlt, FaWallet, FaCalendarAlt } from 'react-icons/fa';

export default function FirstSection() {

    const CardData = [
        { title: "Total Revenue", amount: "$25,000", icon: <FaMoneyBillWave size={40} /> },
        { title: "Total Expenses", amount: "$20,000", icon: <FaRegMoneyBillAlt size={40} /> },
        { title: "Net Balance", amount: "$5,000", icon: <FaWallet size={40} /> },
        { title: "This Month", amount: "$25,000", icon: <FaCalendarAlt size={40} /> },
    ];

    return (
        <div>
            <Stack direction="row" justifyContent={{ xs: 'center', sm: 'space-between' }} sx={{ flexWrap: 'wrap' }}>
                {CardData.map((item, index) => (
                    <Paper key={index} sx={{ p: 1.5, display: 'flex', m: 2, minWidth: 250 }}>
                        <div style={{ fontSize: 50, color: 'inherit', marginRight: 10 }}>
                            {item.icon}
                        </div>
                        <Stack direction='column'>
                            <Typography variant="h6" color="textPrimary">
                                {item.title}
                            </Typography>
                            <Typography variant="h4" color="textSecondary">
                                {item.amount}
                            </Typography>
                        </Stack>
                    </Paper>
                ))}
            </Stack>
        </div>
    );
}
