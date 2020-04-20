'use strict'

module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, h) => h.view('home', {
    pageHeading: 'Hello World!',
    pageText: 'Here is my first GOV.UK Design System styled page'
  })
}
