"use client";
import React from "react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";

const Cal = () => {
  const [date, setDate] = React.useState(today(getLocalTimeZone()));
  const { locale } = useLocale();
  const isInvalid = isWeekend(date, locale);

  return (
    <Calendar
      color="success"
      isInvalid={isInvalid}
      value={date}
      onChange={setDate}
    />
  );
};

export default Cal;
