import React, { useState } from "react";
import moment from "moment";
import { Button, Table } from "react-bootstrap";
import "./calender.css";

const Calendar = ({ data }) => {
    const weekdayshort = moment.weekdaysShort();
    const [showYearTable, setShowYearTable] = useState(false);
    const [showMonthTable, setShowMonthTable] = useState(false);
    const [showDateTable, setShowDateTable] = useState(true);
    const [dateObject, setDateObject] = useState(moment());
    const allmonths = moment.months();
    const [selectedDay, setSelectedDay] = useState(null);

    const daysInMonth = () => {
        return dateObject.daysInMonth();
    };

    const year = () => {
        return dateObject.format("Y");
    };

    const currentDay = () => {
        return dateObject.format("D");
    };

    const firstDayOfMonth = () => {
        let firstDay = moment(dateObject).startOf("month").format("d"); // Day of week 0...1..5...6
        return firstDay;
    };

    const month = () => {
        return dateObject.format("MMMM");
    };

    const showMonth = (e, month) => {
        setShowMonthTable(true);
        setShowDateTable(false);
        setShowYearTable(false);
    };

    const setMonth = (month) => {
        let monthNo = allmonths.indexOf(month);
        let newDateObject = moment(dateObject).set("month", monthNo);
        setDateObject(newDateObject);
        setShowMonthTable(false);
        setShowYearTable(false);
        setShowDateTable(true);
    };

    const MonthList = (props) => {
        let months = [];
        const currentYear = moment().year();
        const currentMonth = moment().month();

        props.data.forEach((data, index) => {
            // Check if the current year is selected
            if (dateObject.year() === currentYear) {
                // Check if the month is beyond the current month
                if (index > currentMonth) {
                    return; // Skip rendering if it's beyond the current month
                }
            }

            months.push(
                <td
                    key={index}
                    className="calendar-month"
                    onClick={(e) => {
                        setMonth(data);
                    }}
                >
                    <span>{data}</span>
                </td>
            );
        });

        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i === 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);

        let monthlist = rows.map((d, i) => {
            return <tr key={i} style={{ cursor: 'pointer' }}>{d}</tr>;
        });

        return (
            <Table bordered>
                <thead>
                    <tr>
                        <th colSpan="4">Select a Month</th>
                    </tr>
                </thead>
                <tbody>{monthlist}</tbody>
            </Table>
        );
    };


    const toggleYearTable = (e) => {
        setShowYearTable(true);
        setShowDateTable(false);
        setShowMonthTable(false);
    };

    const onNext = () => {
        let curr = showYearTable ? "year" : "month";
        let newDateObject;

        if (curr === "month") {
            // Get the current month and year
            const currentMonth = dateObject.month();
            const currentYear = dateObject.year();

            // Check if it is the current month
            if (currentMonth === moment().month() && currentYear === moment().year()) {
                // If it is, set the new date object to the current date
                newDateObject = moment();
            } else {
                // Otherwise, increment the month
                newDateObject = moment(dateObject).add(1, "month");
            }
        } else {
            // Increment the year
            newDateObject = moment(dateObject).add(1, "year");
        }

        setDateObject(newDateObject);
    };




    const onPrev = () => {
        let curr = showYearTable ? "year" : "month";
        let newDateObject;

        if (curr === "month") {
            newDateObject = moment(dateObject).subtract(1, "month");

            // Limit the previous month to the lowest year in the year table
            const lowestYear = moment().year() - 12;
            if (newDateObject.year() < lowestYear) {
                newDateObject = moment().year(lowestYear).startOf("year");
            }
        } else {
            newDateObject = moment(dateObject).subtract(1, "year");

            // Limit the previous year to the lowest year in the year table
            const lowestYear = moment().year() - 12;
            if (newDateObject.year() < lowestYear) {
                newDateObject = moment().year(lowestYear);
            }
        }
        setDateObject(newDateObject);
    };



    const setYear = (year) => {
        let newDateObject = moment(dateObject).set("year", year);
        setDateObject(newDateObject);
        setShowYearTable(false);
        setShowMonthTable(true);
    };

    const onYearChange = (e) => {
        setYear(e.target.value);
        setShowYearTable(false);
        setShowMonthTable(true);
    };

    const getDates = (startDate, stopDate) => {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format("YYYY"));
            currentDate = moment(currentDate).add(1, "year");
        }
        return dateArray;
    };

    const YearTable = () => {
        const currentYear = moment().year();
        const startYear = currentYear - 12;
        const endYear = currentYear;

        const setYear = (year) => {
            let newDateObject = moment(dateObject).year(year);
            setDateObject(newDateObject);
            setShowYearTable(false);
            setShowMonthTable(true);
        };

        const years = [];
        for (let year = startYear; year <= endYear; year++) {
            years.push(
                <td
                    key={year}
                    className="calendar-month"
                
                    onClick={() => setYear(year)}
                    style={{ cursor: 'pointer' }}
                >
                    <span>{year}</span>
                </td>
            );
        }

        const rows = [];
        let cells = [];

        years.forEach((row, index) => {
            if (index % 3 !== 0 || index === 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);

        const yearList = rows.map((row, index) => <tr key={index}>{row}</tr>);

        return (
            <Table bordered>
                <thead>
                    <tr>
                        <th colSpan="4">Select a Year</th>
                    </tr>
                </thead>
                <tbody>{yearList}</tbody>
            </Table>
        );
    };


    const onDayClick = (e, d) => {
        setSelectedDay(d);
        console.log("SELECTED DAY: ", selectedDay);
    };

    let weekdayshortname = weekdayshort.map((day) => {
        return <th key={day}>{day}</th>;
    });

    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(<td key={-i} className="calendar-day empty">{""}</td>);
    }

    let daysInMonthArray = [];
    for (let d = 1; d <= daysInMonth(); d++) {
        const dayData = data.find((item) =>
            moment(item.date).isSame(moment(dateObject).date(d), 'day')
        );
        const status = dayData ? dayData.status : '';
        let absent = status === "absent" ? "absent" : "";
        let present = status === "present" ? "present" : "";
        let wfh = status === "wfh" ? "wfh" : "";
        let halfDay = status === "halfDay" ? "halfDay" : "";

        daysInMonthArray.push(
            <td
                key={d}
                className={`calendar-day ${absent} ${present} ${wfh} ${halfDay}`}
                onClick={(e) => {
                    onDayClick(e, d);
                }}
            >
                <span>{d}</span>
            </td>
        );
    }

    let totalSlots = [...blanks, ...daysInMonthArray];
    let rows = [];
    let cells = [];

    totalSlots.forEach((slot, i) => {
        if (i % 7 === 0 && cells.length > 0) {
            rows.push(<tr key={rows.length}>{cells}</tr>);
            cells = [];
        }
        cells.push(slot);
    });
    // Add empty cells after the last day of the month
    while (cells.length < 7) {
        cells.push(<td key={`empty-${cells.length}`} className="calendar-day empty">{""}</td>);
    }

    rows.push(<tr key={rows.length}>{cells}</tr>);
    let daysinmonth = rows.map((row) => row);

    return (
        <div>
            <div className="d-flex align-items-start justify-content-between">
                {
                    !showMonthTable && !showYearTable ? (
                        <button
                            onClick={(e) => {
                                onPrev();
                            }}
                            className="custom-calender-btn"
                        >
                            <i class="ri-arrow-left-s-line"></i>
                        </button>
                    ) :
                        <div></div>
                }

                <div className="d-flex align-items-center justify-content-center" style={{ cursor: 'pointer' }}>
                    {!showMonthTable && (
                        <p className="me-2" onClick={(e) => showMonth()}>{month()}</p>
                    )}
                    <p onClick={(e) => toggleYearTable()}>{year()}</p>
                </div>
                {
                    !showMonthTable && !showYearTable ? (
                        <button
                            onClick={(e) => {
                                onNext();
                            }}
                            className="custom-calender-btn"
                        >
                            <i class="ri-arrow-right-s-line"></i>
                        </button>
                    ) :
                        <div></div>
                }

            </div>

            <div >
                {showYearTable && <YearTable props={year()} />}
                {showMonthTable && <MonthList data={moment.months()} />}
            </div>

            {showDateTable && (
                <div>
                    <Table bordered className="calendar-day">
                        <thead>
                            <tr>{weekdayshortname}</tr>
                        </thead>
                        <tbody>{daysinmonth}</tbody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default Calendar;
