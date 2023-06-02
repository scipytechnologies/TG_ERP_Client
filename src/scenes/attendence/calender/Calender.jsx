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
        let firstDay = moment(dateObject)
            .startOf("month")
            .format("d"); // Day of week 0...1..5...6
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
        props.data.map((data, index) => {
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
            return <tr key={i}>{d}</tr>;
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

    const onPrev = () => {
        let curr = "";
        if (showYearTable === true) {
            curr = "year";
        } else {
            curr = "month";
        }
        setDateObject(dateObject.subtract(1, curr));
    };

    const onNext = () => {
        let curr = "";
        if (showYearTable === true) {
            curr = "year";
        } else {
            curr = "month";
        }
        setDateObject(dateObject.add(1, curr));
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

    const YearTable = (props) => {
        let months = [];
        let nextten = moment()
            .set("year", props)
            .add("year", 12)
            .format("Y");

        let tenyear = getDates(props, nextten);

        tenyear.map((data, index) => {
            months.push(
                <td
                    key={index}
                    className="calendar-month"
                    onClick={(e) => {
                        setYear(data);
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
        let yearlist = rows.map((d, i) => {
            return <tr key={i}>{d}</tr>;
        });

        return (
            <Table bordered className="calendar-month">
                <thead>
                    <tr>
                        <th colSpan="4">Select a Year</th>
                    </tr>
                </thead>
                <tbody>{yearlist}</tbody>
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
        blanks.push(<td key={i} className="calendar-day empty">{""}</td>);
    }

    let daysInMonthArray = [];
    for (let d = 1; d <= daysInMonth(); d++) {
        let currentDayClass = d === parseInt(currentDay()) ? "today" : "";
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
                className={`calendar-day ${currentDayClass}  ${absent} ${present}  ${wfh}  ${halfDay}`}
                onClick={(e) => {
                    onDayClick(e, d);
                }}
            >
                <span>{d}</span>
            </td>
        );
    }

    var totalSlots = [...blanks, ...daysInMonthArray];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            rows.push(cells);
        }
    });

    let daysinmonth = rows.map((d, i) => {
        console.log(d)
        return <tr key={i}>{d}</tr>;
    });

    return (
        <div>
            <div>
                {/* <Button
                    onClick={(e) => {
                        onPrev();
                    }}
                    className="rounded"
                >
                    &lt;

                </Button> */}
                <div className="d-flex align-items-center justify-content-between">


                    {!showMonthTable && (
                        <p
                            onClick={(e) => {
                                showMonth();
                            }}

                        >
                            {month()}
                        </p>
                    )}
                    <p onClick={(e) => toggleYearTable()}>
                        {year()}
                    </p>
                </div>
                {/* <Button
                    onClick={(e) => {
                        onNext();
                    }}
                    className="rounded"
                >
                    &gt;
                </Button> */}
            </div>

            <div>
                {showYearTable && <YearTable props={year()} />}
                {showMonthTable && <MonthList data={moment.months()} />}
            </div>

            {showDateTable && (
                <div>
                    <Table bordered className="calendar-day">
                        <thead>
                            <tr >{weekdayshortname}</tr>
                        </thead>
                        <tbody>{daysinmonth}</tbody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default Calendar;
