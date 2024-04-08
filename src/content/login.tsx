import React, { useState } from 'react';
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Input,
    useToast,
} from '@chakra-ui/react';

const Login: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleLogin = () => {
        // Perform login logic here
        console.log('Logging in...');

        // Make a POST request to the login endpoint
        fetch('http://172.16.2.107:3022/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                if (response.ok) {
                    // Login successful
                    console.log('Login successful', response);
                    // Redirect to the dashboard
                    // window.location.href = '/dashboard';
                    // get the token
                    response.json().then((data) => {
                        console.log(data);
                    }).then(() => {
                        // Alert login successful with chakra ui
                        toast({
                            title: 'Login successful',
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                        });
                    });
                } else {
                    // Login failed
                    console.log('Login failed', response);
                    // Alert login failed with chakra ui
                    toast({
                        title: 'Login failed',
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                    });
                }
            })
            .catch((error) => {
                console.error('Error logging in:', error);
                // Alert error with chakra ui
                toast({
                    title: 'Server Error',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            });
    };

    return (
        <>
            <Button
                onClick={handleOpen}
                position="absolute"
                top={16}
                mt={14}
                right={2}
                size={'md'}
                backgroundColor="rgba(0,0,0,0)"
                fontSize={'22px'}
                color={'white'}
                _hover={{ backgroundColor: 'rgba(0,0,0,0)' }}
            >
                Login
            </Button>

            <Drawer isOpen={isOpen} placement="right" onClose={handleClose}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Login</DrawerHeader>

                        <DrawerBody>
                            <Box mb={4}>
                                <Input
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Box>

                            <Box mb={4}>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleLogin();
                                        }
                                    }}
                                />
                            </Box>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button
                                variant="outline"
                                mr={3}
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <Button colorScheme="blue" onClick={handleLogin}>
                                Login
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};

export default Login;