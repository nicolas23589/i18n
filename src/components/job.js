import React from "react";
import {FormattedDate, FormattedMessage} from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary}   <FormattedMessage id="million"/></td>
      <td>{props.offer.city}   </td>
     
  <FormattedDate
    value={new Date(props.offer.date)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
  />
</td>
    </tr>
  );
};

export default Job;
