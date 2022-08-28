import React, { useEffect, useState } from "react";
import fetchData from "../../help";
import Card from "../Card/Card";

export default function WeekContainer() {
  const [data, dataState] = useState([]);
  useEffect(() => {
    fetchData(
      "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27"
    ).then((data) =>
      dataState(
        data.list.filter((reading) => reading.dt_txt.includes("12:00:00"))
      )
    );
  }, []);
  return (
    <div>
      <h1 className="display-4 jumbotron">Прогноз погоды на 5 дней</h1>
      <h5 className="display-4 text-muted">Kiev</h5>
      <div className="row justify-content-center">
        {data && data.map((day, i) => <Card key={`day${i}`} day={day} />)}
      </div>
    </div>
  );
}
