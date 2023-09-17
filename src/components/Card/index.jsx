import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
  
export default function CardCustom({children}) {
    return (
        <Box>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        {children}
                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>
    );
}