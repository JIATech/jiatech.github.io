import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@chakra-ui/react";
import { intervalToDuration } from "date-fns";

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
            const duration = intervalToDuration({ start: startDate, end: now });

            setYears(duration.years || 0);
            setMonths(duration.months || 0);
            setDays(duration.days || 0);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, [startDate]);

    if (years === 0) {
        if (months === 0) {
            return (
                <Box as="span" style={{ fontStyle: "italic" }}>
                    {days} {t("dias")}
                </Box>
            );
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
};

export default TimeSince;
