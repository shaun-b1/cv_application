/* eslint-disable react/prop-types */
export function DisplayEducation({ data }) {
  return (
    <section>
      <h3>Education History</h3>
      <ul>
        {data.map((education) => {
          const { id, degree, school, startDate, endDate } = education;
          return (
            <li key={id}>
              <p>
                {startDate} - {endDate}
              </p>
              <p>
                <b>{degree}</b>
              </p>
              <p>{school}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
