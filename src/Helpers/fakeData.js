import faker from 'faker'

import { getYearsAgo } from './dateOperations'

const campsites = [
  'HEX Corruption',
  'Data Lake',
  'Encryption Overdrive',
  'Protocol Resumption',
  'The Encoded Fields',
].map((campsite, index) => ({ value: index, label: campsite }))

const injuries = [
  'I cut my hand on broken glass',
  'My friend had a bit too much to drink',
  'Burnt my hand on the camping stove',
  'Sprained my ankle',
  'I think my leg is broken',
]

export const getCampsites = () => {
  return campsites
}

export const getPatients = () => {
  return Array.apply(null, Array(5)).map((item, index) => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    dob: faker.date
      .between(getYearsAgo(50), getYearsAgo(18))
      .toJSON()
      .slice(0, 10),
    campsite: faker.helpers.randomize(campsites).value,
    injury: injuries[index],
    seen: faker.helpers.randomize([true, false]),
  }))
}
