/* eslint-disable linebreak-style */

function getBirthday() {
  return {
    day: ['', 1, 2, 3, 4, 5],
    month: ['', 'Январь', 'Февраль', 'Март'],
    year: ['', 1900, 2000, 2056],
  };
}

function getMartialStatus() {
  return { familyStatus: ['', 'женат/замужем', 'в «гражданском браке»', 'разведен', 'холост', 'вдовец'] };
}

function getEducation() {
  return { education: ['', 'высшее', 'среднее специальное', 'среднее', 'студент'] };
}

module.exports = {
  getBirthday,
  getMartialStatus,
  getEducation,
};
