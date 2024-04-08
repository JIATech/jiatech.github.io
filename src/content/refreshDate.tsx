import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@chakra-ui/react";
import { differenceInYears, differenceInMonths, differenceInDays, addYears, addMonths } from "date-fns";

interface TimeSinceProps {
    startDate: Date;
}

const TimeSince: React.FC<TimeSinceProps> = ({ startDate }) => {
    const { t } = useTranslation();
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
            }>{days} {t("dias")}</Box>;
        }
        return (
            <Box as="span" style={{ fontStyle: "italic" }}>
                {months} {t("meses")}, {days} {t("dias")}
            </Box>
        );
    } else {
        return (
            <Box as="span" style={{ fontStyle: "italic" }}>
                {years} {t("anos")}, {months} {t("meses")}, {days} {t("dias")}
            </Box>
        );
    }
}

export default TimeSince;