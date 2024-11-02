"use client";
import React from "react";
import { today, getLocalTimeZone, isWeekend, CalendarDate } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { DatePicker } from "@nextui-org/date-picker";

const Cal: React.FC = () => {
  const [date, setDate] = React.useState<CalendarDate>(today(getLocalTimeZone()));
  const { locale } = useLocale();
  const isInvalid = isWeekend(date, locale);

  return (
    <DatePicker 
      label="Fecha de salida"
      className="max-w-full"
      isRequired
      value={date}
      onChange={setDate}
    />
  );
};

export default Cal;
