import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import './CourseList.css';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  firstRowColor: {
    backgroundColor: '#f5f5f5ab'
  },

  headerRowColor: {
    backgroundColor: '#deb5b545'
  },

})

const CourseListRow = ({ isHeader=false, textFirstCell, textSecondCell=null }) => {
   return (
    <tr className={isHeader ? css(styles.headerRowColor) : css(styles.firstRowColor)}> 
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
          <td>{textFirstCell}</td>
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