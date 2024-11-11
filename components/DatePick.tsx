"use client";
import React from "react";
import { today, getLocalTimeZone, isWeekend, CalendarDate } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { DatePicker } from "@nextui-org/date-picker";

interface DatePickProps {
  label: string;
  onChange: (date: string) => void;
}

const DatePick: React.FC<DatePickProps> = ({ label, onChange }) => {
  const [date, setDate] = React.useState<CalendarDate>(today(getLocalTimeZone()));
  const { locale } = useLocale();

  const handleDateChange = (newDate: CalendarDate) => {
    setDate(newDate);
    onChange(newDate.toString());
  };

  return (
    <DatePicker 
      label={label}
      className="max-w-full"
      isRequired
      value={date}
      onChange={handleDateChange}
    />
  );
};

export default DatePick;
