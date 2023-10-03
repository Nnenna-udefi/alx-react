import { schema, normalize } from 'normalizr';

const courseSchema = new schema.Entity('courses');

const coursesNormalizer = (data) => {
    const normalizeData = normalize(data, [courseSchema]);
    return normalizeData;
}

export default coursesNormalizer;