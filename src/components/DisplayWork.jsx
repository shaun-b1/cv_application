/* eslint-disable react/prop-types */
export function DisplayWork({ data }) {
  return (
    <section>
      <h3>Work History</h3>
      <ul>
        {data.map((work) => {
          const { id, role, employer, startDate, endDate, responsibilites } =
            work;
          return (
            <li key={id}>
              <p>
                {startDate} - {endDate}
              </p>
              <p>
                <b>{role}</b>
              </p>
              <p>{employer}</p>
              <p>{responsibilites}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
