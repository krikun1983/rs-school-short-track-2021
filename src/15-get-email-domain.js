/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const str = email.match(/(?<=@)(\w+(-|)\w+\.\w+)/g);
  return str.join('');
}

module.exports = getEmailDomain;
