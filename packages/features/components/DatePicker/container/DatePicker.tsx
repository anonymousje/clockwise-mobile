import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from 'react-native-ui-datepicker';
import { DateInputProps, RangeDatePickerProps } from '../../../types';
import dayjs from 'dayjs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/DatePicker.styles';
import { COLORS } from '../../../../constants/theme';
import COMMON_CONSTANTS from '../../../../constants/CommonConstants';
import STRINGS from '../../../../utils/strings';

function DateInput({ value, placeholder, onPress }: DateInputProps) {
  return (
    <TouchableOpacity
      style={styles.pickerContainer}
      onPress={onPress}
    >
      <Ionicons
        name={COMMON_CONSTANTS.ICONS.TIME}
        size={COMMON_CONSTANTS.SIZE.SIZE_20}
        color={COLORS.CLOCKWISE_PRIMARY}
        style={styles.pickerIcon}
      />
      <Text
        numberOfLines={1}
        style={[
          styles.filterInput,
          value ? styles.dateInputTextWithValue : styles.dateInputPlaceholder,
        ]}
      >
        {value || placeholder}
      </Text>
    </TouchableOpacity>
  );
}

export type CalendarProps = React.ComponentProps<typeof DateTimePicker>;

function Calendar({
  showOutsideDays = true,
  containerHeight = 280,
  ...props
}: React.ComponentProps<typeof DateTimePicker>) {
  const defaultStyles = useDefaultStyles();
  return (
    <View style={styles.calendarContainer}>
      <DateTimePicker
        showOutsideDays={showOutsideDays}
        containerHeight={containerHeight}
        styles={{
          ...defaultStyles,
          selected: {
            backgroundColor: COLORS.CLOCKWISE_PRIMARY,
          },
          range_fill: {
            backgroundColor: COLORS.CLOCKWISE_PRIMARY_DARK,
            opacity: 0.8,
          },
        }}
        {...props}
      />
    </View>
  );
}

export default function RangeDatePicker({
  onDateRangeChange,
  startDate = null,
  endDate = null,
}: RangeDatePickerProps) {
  const [range, setRange] = useState<{
    startDate: DateType;
    endDate: DateType;
  }>({
    startDate: startDate ? dayjs(startDate).toDate() : undefined,
    endDate: endDate ? dayjs(endDate).toDate() : undefined,
  });
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const from = range.startDate
    ? dayjs(range.startDate).format(COMMON_CONSTANTS.DATE_FORMATS.MMM_DD_YY)
    : '';
  const to = range.endDate
    ? dayjs(range.endDate).format(COMMON_CONSTANTS.DATE_FORMATS.MMM_DD_YY)
    : '';

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleDateChange = (params: {
    startDate: DateType;
    endDate: DateType;
  }) => {
    setRange(params);

    const formattedStartDate = params.startDate
      ? dayjs(params.startDate).format(COMMON_CONSTANTS.DATE_FORMATS.YYYY_MM_DD)
      : null;
    const formattedEndDate = params.endDate
      ? dayjs(params.endDate).format(COMMON_CONSTANTS.DATE_FORMATS.YYYY_MM_DD)
      : null;

    onDateRangeChange?.(formattedStartDate, formattedEndDate);
  };

  return (
    <View style={styles.filterGroup}>
      <Text style={styles.filterLabel}>{STRINGS.DATE_RANGE}</Text>
      <DateInput
        value={from || to ? `${from} - ${to}` : null}
        placeholder={STRINGS.INPUT_PLACEHOLDER_TEXT.SELECT_DATE_RANGE}
        onPress={toggleCalendar}
      />
      {isCalendarVisible && (
        <Calendar
          mode={COMMON_CONSTANTS.CALENDER_MODE.RANGE}
          startDate={range.startDate}
          endDate={range.endDate}
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}
