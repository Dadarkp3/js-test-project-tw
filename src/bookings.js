const calculateTotalValueByHotel = (hotel, days, type = "regular") => {
  const { weekdays, weekends } = days;
  return (
    hotel.value[type].week * weekdays + hotel.value[type].weekend * weekends
  );
};

module.exports = { calculateTotalValueByHotel };
