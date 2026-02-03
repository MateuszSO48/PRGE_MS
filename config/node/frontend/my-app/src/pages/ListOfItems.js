import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Container, Typography } from '@mui/material';
import AnchorIcon from '@mui/icons-material/Anchor';
import CategoryIcon from '@mui/icons-material/Category';
import PlaceIcon from '@mui/icons-material/Place';

const RED_COLOR = '#D32F2F';
const HEADER_BG_COLOR = '#A3B18A';
const HEADER_TEXT_COLOR = '#FFFFFF';

function ListOfItems() {
    const [ports, setPorts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:10000/app/get_ports')
            .then(response => response.json())
            .then(data => {
                setPorts(data.data || []);
            });
    }, []);

    return (
        <Container maxWidth="md" style={{ marginTop: '40px' }}>
            <Typography variant="h4" align="center" gutterBottom style={{ color: RED_COLOR, fontWeight: 'bold' }}>
                LISTA PORTÓW MORSKICH
            </Typography>

            <Paper elevation={3}>
                <Table>
                    <TableHead style={{ backgroundColor: HEADER_BG_COLOR }}>
                        <TableRow>
                            <TableCell style={{ color: HEADER_TEXT_COLOR, fontWeight: 'bold' }}>
                                <AnchorIcon style={{ color: RED_COLOR, verticalAlign: 'middle', marginRight: '8px' }}/>
                                Nazwa
                            </TableCell>

                            <TableCell style={{ color: HEADER_TEXT_COLOR, fontWeight: 'bold' }}>
                                <CategoryIcon style={{ color: RED_COLOR, verticalAlign: 'middle', marginRight: '8px' }}/>
                                Typ
                            </TableCell>

                            <TableCell style={{ color: HEADER_TEXT_COLOR, fontWeight: 'bold' }} align="right">
                                <PlaceIcon style={{ color: RED_COLOR, verticalAlign: 'middle', marginRight: '8px' }}/>
                                Współrzędne
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ports.map((port, index) => (
                            <TableRow key={index}>
                                <TableCell>{port.name}</TableCell>
                                <TableCell>{port.type}</TableCell>
                                <TableCell align="right">
                                    {port.lat && port.lng
                                        ? `${port.lat.toFixed(4)}, ${port.lng.toFixed(4)}`
                                        : '-'}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Container>
    );
}

export default ListOfItems;