import React, { useState, useEffect } from "react";
import "./selfWritingText.css";
import { Box } from "@chakra-ui/react";

interface SelfWritingTextProps {
    phrases: string[];
    erase: boolean;
    cursor: boolean;
}

export const SelfWritingText: React.FC<SelfWritingTextProps> = ({
    phrases,
    erase,
    cursor,
}) => {
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isWriting, setIsWriting] = useState(true);

    useEffect(() => {
        if (phrases.length > 0) {
            setText(phrases[0]);
        }
    }, [phrases]);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isWriting) {
            if (text.length < phrases[phraseIndex].length) {
                timeoutId = setTimeout(() => {
                    setText(phrases[phraseIndex].slice(0, text.length + 1));
                }, 100);
            } else {
                timeoutId = setTimeout(() => {
                    setIsWriting(false);
                }, 500);
            }
        } else if (erase) {
            if (text.length > 0) {
                timeoutId = setTimeout(() => {
                    setText(text.slice(0, -1));
                }, 50);
            } else {
                setIsWriting(true);
                setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [text, phrases, erase, cursor, phraseIndex, isWriting]);
    
    if (cursor) {
        return (
            <Box className="self-writing-text">
                {text}
                <span className="cursor" />
            </Box>
        );
    } else {
        return <Box as="span" className="self-writing-text">{text}</Box>;
    }
};
