import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Appearance,
} from 'react-native';
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, FONT_SIZE, MODE } from '../../../constants/theme';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

const mode = Appearance.getColorScheme();

type DateInputProps = {
  value: string | null;
  placeholder: string;
  onPress: () => void;
};

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

type RangeDatePickerProps = {
  onDateRangeChange?: (
    startDate: string | null,
    endDate: string | null,
  ) => void;
  startDate?: string | null;
  endDate?: string | null;
};

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
    ? dayjs(range.startDate).format('MMM DD, YYYY')
    : '';
  const to = range.endDate ? dayjs(range.endDate).format('MMM DD, YYYY') : '';

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleDateChange = (params: {
    startDate: DateType;
    endDate: DateType;
  }) => {
    setRange(params);

    // Format dates to YYYY-MM-DD and call the callback
    const formattedStartDate = params.startDate
      ? dayjs(params.startDate).format('YYYY-MM-DD')
      : null;
    const formattedEndDate = params.endDate
      ? dayjs(params.endDate).format('YYYY-MM-DD')
      : null;

    onDateRangeChange?.(formattedStartDate, formattedEndDate);
  };

  return (
    <View style={styles.filterGroup}>
      <Text style={styles.filterLabel}>Date Range</Text>
      <DateInput
        value={from || to ? `${from} - ${to}` : null}
        placeholder='Select date range'
        onPress={toggleCalendar}
      />
      {isCalendarVisible && (
        <Calendar
          mode='range'
          startDate={range.startDate}
          endDate={range.endDate}
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  filterGroup: {
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_24,
  },
  filterLabel: {
    fontSize: FONT_SIZE.SIZE_17,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_15,
    marginLeft: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  pickerContainer: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderWidth: COMMON_CONSTANTS.ONE,
    borderColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
    elevation: 2,
    shadowColor: COLORS.SHADOW_COLOR,
    minHeight: COMMON_CONSTANTS.SIZE.SIZE_50,
  },
  pickerIcon: {
    marginLeft: COMMON_CONSTANTS.SIZE.SIZE_15,
    marginRight: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  filterInput: {
    flex: COMMON_CONSTANTS.ONE,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_15,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
  dateInputTextWithValue: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  dateInputPlaceholder: {
    color:
      mode === MODE.DARK
        ? COLORS.TEXT_DARK_LIGHTER_MODE
        : COLORS.TEXT_LIGHT_LIGHTER_MODE,
  },
  calendarContainer: {
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_10,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderWidth: COMMON_CONSTANTS.ONE,
    borderColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    padding: COMMON_CONSTANTS.SIZE.SIZE_8,
    elevation: 4,
  },
});
