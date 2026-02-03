import React, {useState} from 'react';
import {Container, Box, TextField, Button, Paper, Typography} from "@mui/material";

function AddPort() {
    const [portName, setPortName] = useState("")
    const [portType, setPortType] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Wysyłanie:", portName, portType);

        try {
            // Strzelamy do nowego endpointu w Pythonie
            const response = await fetch('http://localhost:10000/app/insert_port', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: portName,
                    type: portType
                })
            })

            if(response.ok) {
                alert("Port dodany pomyślnie!");
                setPortName("");
                setPortType("");
            } else {
                alert("Błąd dodawania portu.");
            }

        } catch (e) {
            console.log(e)
            alert("Błąd połączenia z serwerem.");
        }
    }

    return (
        <div style={{ backgroundColor: '#A3B18A', minHeight: '100vh', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{p: 4, backgroundColor: 'rgba(255,255,255,0.9)'}}>
                    <Typography variant="h4" component="h2" sx={{ mb: 3, color: '#C23B22', textAlign: 'center', fontWeight: 'bold' }}>
                        DODAJ NOWY PORT
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            sx={{mb: 2}}
                            fullWidth
                            label="Nazwa Miejscowości (np. Gdańsk)"
                            variant="outlined"
                            value={portName}
                            onChange={(e) => setPortName(e.target.value)}
                            helperText="Na podstawie tej nazwy pobierzemy współrzędne"
                        />
                        <TextField
                            sx={{mb: 3}}
                            fullWidth
                            label="Typ Portu (np. handlowy)"
                            variant="outlined"
                            value={portType}
                            onChange={(e) => setPortType(e.target.value)}
                        />

                        <Button
                            type="submit"
                            variant='contained'
                            fullWidth
                            sx={{
                                bgcolor: '#C23B22',
                                '&:hover': { bgcolor: '#a02d18' },
                                py: 1.5,
                                fontSize: '1.1rem'
                            }}
                        >
                            DODAJ PORT
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}

export default AddPort;