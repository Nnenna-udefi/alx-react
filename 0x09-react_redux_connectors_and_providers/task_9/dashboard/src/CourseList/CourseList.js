import React, {useEffect} from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse} from '../actions/courseActionCreators';
import { getCoursesList } from '../selectors/courseSelector'

const styles = StyleSheet.create({
    courseListstyles: {
        border: '1px solid black',
        padding: '0.2rem',
        margin: '1rem 2rem',
        width: '50%'
    },

    contain: {
        height: '45vh',
        borderBottom: '2px solid rgb(217, 37, 37)',
    }
})

export const CourseList = ({ listCourses, fetchCourses, selectCourse, unSelectCourse }) => {
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    const onChangeRow = (id, checked) => {
        if (checked) {
          selectCourse(id);
        } else {
          unSelectCourse(id);
        }
      };
    return (
        <div className={css(styles.contain)}>
        <table className={css(styles.courseListstyles)}>
            <thead className='thead'>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>

            <tbody className='tbody'>
                {listCourses.length === 0 ? (
                    <CourseListRow textFirstCell="No course available yet" isHeader={false} />
                ): (
                    listCourses.map(course => (
                        <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}
                        isChecked={course.isSelected}
                        onChangeRow={(checked) => onChangeRow(course.id, checked)} />
                    ))
                )}
            </tbody>
        </table>
        </div>
    );
};

CourseList.propTypes = {
    fetchCourses: PropTypes.func.isRequired,
    selectCourse: PropTypes.func.isRequired,
    unSelectCourse: PropTypes.func.isRequired
  };
  
  CourseList.defaultProps = {
    listCourses: []
  };
  
  const mapStateToProps = state => ({
    listCourses: getCoursesList(state)
  });
  
  export default connect(mapStateToProps, { fetchCourses, selectCourse, unSelectCourse })(CourseList);