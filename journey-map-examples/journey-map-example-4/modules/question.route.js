'use strict'

const { setQueryData } = require('@envage/hapi-govuk-journey-map')

module.exports = [{
  method: 'GET',
  handler: (request, h) => h.view('question', {
    pageHeading: 'Are you enjoying these examples so far?',
    hint: { text: 'If I\'ve done my job correctly, they should be easy to follow' },
    items: [
      {
        value: 'yes',
        text: 'Yes',
        hint: { text: 'They\'re great' }
      },
      {
        value: 'no',
        text: 'No',
        hint: { text: 'Not really' }
      }
    ]
  })
}, {
  method: 'POST',
  handler: async (request, h) => {
    const { answer } = request.payload
    await setQueryData(request, { answer })
    return h.continue
  }
}]