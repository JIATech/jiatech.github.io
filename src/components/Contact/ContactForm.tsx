import React, { useState, useRef } from 'react';
import { 
    Box, 
    Button, 
    FormControl, 
    FormLabel, 
    Input, 
    Textarea, 
    VStack,
    useToast,
    useColorMode
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
    className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
    const { t } = useTranslation();
    const form = useRef<HTMLFormElement>(null);
    const toast = useToast();
    const { colorMode } = useColorMode();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!form.current) return;

        setIsSubmitting(true);
    
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
                form.current, 
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
    
            toast({
                title: t("contactForm.success"),
                description: t("contactForm.successDesc"),
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            if (error instanceof Error) {
                toast({
                    title: t("contactForm.error"),
                    description: t("contactForm.errorDesc"),
                    status: "error",
                    duration: 5000,
                    isClosable: true,
            });
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <Box 
            as="form" 
            ref={form} 
            onSubmit={sendEmail}
            bg={colorMode === 'dark' ? 'gray.700' : 'whiteAlpha.400'}
            p={6}
            borderRadius="md"
            boxShadow="md"
            className={className}
        >
            <VStack spacing={4}>
                <FormControl isRequired>
                    <FormLabel color={colorMode === 'dark' ? 'gray.300' : 'gray.800'}>
                        {t("contactForm.name")}
                    </FormLabel>
                    <Input 
                        type="text" 
                        name="user_name" 
                        bg={colorMode === 'dark' ? 'gray.800' : 'gray.300'}
                        borderColor={colorMode === 'dark' ? 'gray.500' : 'gray.100'}
                        _hover={{ borderColor: colorMode === 'dark' ? 'teal.300' : 'teal.500' }}
                        focusBorderColor={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
                    />
                </FormControl>
    
                <FormControl isRequired>
                    <FormLabel color={colorMode === 'dark' ? 'gray.300' : 'gray.800'}>
                        {t("contactForm.email")}
                    </FormLabel>
                    <Input 
                        type="email" 
                        name="user_email" 
                        bg={colorMode === 'dark' ? 'gray.800' : 'gray.300'}
                        borderColor={colorMode === 'dark' ? 'gray.500' : 'gray.100'}
                        _hover={{ borderColor: colorMode === 'dark' ? 'teal.300' : 'teal.500' }}
                        focusBorderColor={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
                    />
                </FormControl>
    
                <FormControl isRequired>
                    <FormLabel color={colorMode === 'dark' ? 'gray.300' : 'gray.800'}>
                        {t("contactForm.message")}
                    </FormLabel>
                    <Textarea 
                        name="message" 
                        rows={5}
                        bg={colorMode === 'dark' ? 'gray.800' : 'gray.300'}
                        borderColor={colorMode === 'dark' ? 'gray.500' : 'gray.100'}
                        _hover={{ borderColor: colorMode === 'dark' ? 'teal.300' : 'teal.500' }}
                        focusBorderColor={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
                    />
                </FormControl>
    
                <Button 
                    type="submit" 
                    colorScheme="teal"
                    isLoading={isSubmitting}
                    loadingText={t("contactForm.sending")}
                    width="full"
                >
                    {t("contactForm.send")}
                </Button>
            </VStack>
        </Box>
    );
};

export default ContactForm;
