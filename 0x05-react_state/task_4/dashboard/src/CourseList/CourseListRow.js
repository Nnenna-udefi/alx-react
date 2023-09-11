import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  firstRowColor: {
    backgroundColor: '#f5f5f5ab'
  },

  headerRowColor: {
    backgroundColor: '#deb5b545'
  },

  rowChecked: {
    backgroundColor: 'e6e4e4'
  }

})

const CourseListRow = ({ isHeader=false, textFirstCell, textSecondCell=null }) => {
  const [checked, setChecked] = useState(false);
  const headerRowColor = { backgroundColor: "#deb5b545" };
  const firstRowColor = { backgroundColor: "#f5f5f5ab" };
  const selectedStyle = isHeader ? headerRowColor : firstRowColor;

  const handleCheckChange = (e) => {
    setChecked(!checked);
  }
  return (
    <tr style={selectedStyle} className={checked ? css(styles.headerRowColor) : css(styles.firstRowColor)}> 
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>
            <input type="checkbox" onChange={handleCheckChange} />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
   );
};

CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  isHeader: PropTypes.bool,
} 

export default CourseListRow;