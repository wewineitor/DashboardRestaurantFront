import { Button, Container, Grid, TextInput } from "@mantine/core"

const Login = () => {
    return (
        <Container size="xs" style={{ marginTop: '50px' }}>
            <Grid>
                <Grid.Col span={12} md={6} mdOffset={3}>
                    <TextInput
                        label="Telefono"
                        placeholder="Ingrese su numero de telefono"
                        required
                        style={{ marginBottom: '16px' }}
                    />
                    <TextInput
                        label="Contraseña"
                        type="password"
                        placeholder="Ingrese su contraseña"
                        required
                        style={{ marginBottom: '16px' }}
                    />
                    <Button fullWidth style={{backgroundColor: "#00a2c7"}}>
                        Iniciar Sesión
                    </Button>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Login