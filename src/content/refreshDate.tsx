import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { differenceInYears, differenceInMonths, differenceInDays, addYears, addMonths } from "date-fns";

interface TimeSinceProps {
    startDate: Date;
}

const TimeSince: React.FC<TimeSinceProps> = ({ startDate }) => {

    const [years, setYears] = useState<number>(0);
    const [months, setMonths] = useState<number>(0);
    const [days, setDays] = useState<number>(0);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const years = differenceInYears(now, startDate);
            const monthsAfterYears = differenceInMonths(now, addYears(startDate, years));
            const daysAfterMonths = differenceInDays(now, addMonths(addYears(startDate, years), monthsAfterYears));

            setYears(years);
            setMonths(monthsAfterYears);
            setDays(daysAfterMonths);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, [startDate]);

    if (years === 0) {
        if (months === 0) {
            return <Box as="span" style={
                { fontStyle: "italic" }
            }>{days} días</Box>;
        }
        return (
            <Box as="span" style={
                { fontStyle: "italic" }}>
                {months} meses, {days} días
            </Box>
        );
    } else {
        return (
            <Box as="span" style={
                { fontStyle: "italic" }}>
                {years} años, {months} meses, {days} días
            </Box>
        );
    }
}

export default TimeSince;