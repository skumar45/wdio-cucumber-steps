/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/dragElement.js */
/**
 * Drag a element to a given destination
 * @param  {String}   source      The selector for the source element
 * @param  {String}   destination The selector for the destination element
 */
module.exports = (source, destination) => {
	browser.dragAndDrop(source, destination);
};