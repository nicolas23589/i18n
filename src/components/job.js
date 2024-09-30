import React from "react";
import {FormattedDate, FormattedMessage, FormattedNumber, useIntl} from 'react-intl';

const Job = (props) => {
  //todo lo relacionado a millon y millones en prular, esta parte se maneja antes del html para luego llamar las variables en el html
  var idMillionSalary= "million";
  if(props.offer.salary!==1){
    idMillionSalary="millions"
  }

  //todo lo relacionado a la coma para el ingles y el punto para el español, se maneja antes del html para luego llamar variables en el html
const intl = useIntl(); 
const numberFormat = intl.locale === 'es' ? 
  { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 } : 
  { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: true };

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary}   <FormattedMessage id= {idMillionSalary} /></td>
      <td>{props.offer.city}   </td>
      <td >
  <FormattedDate
    value={new Date(props.offer.date)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
  />
</td>

<td> <FormattedNumber 
        value={props.offer.views} 
        {...numberFormat} 
      /></td>
    </tr>
  );
};

export default Job;
