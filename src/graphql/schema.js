module.exports = `


interface Node {
  id: ID!
}

type CodeableConcept {
  #coding: [Coding]
  text: String
}


type User {
  username: String
  email: String
  password: String
  patients: [Patient]
}

type Patient implements Node {
  #identifier: [Identifier]
  active: Boolean
  #name: [HumanName]
  #telecom: [ContactPoint]
  gender: Gender
  birthDate: String
  decreased: Boolean
  #address: [Address]
  #maritalStatus: [CodeableConcept]
  multipleBirth: Int
  #photo: [Attachment]
  #contact: [Contact]
  #animal: Animal
  #communication: [Communication]
  #generalPractitioner: [Reference]
  #managingOrganization: [Reference]
  #link: [Link]
  id: ID!
  #observations: [Observation]
}

type Animal {
  species: [CodeableConcept]
  breed: [CodeableConcept]
  genderStatus: [CodeableConcept]
}

type Communication {
  language: [CodeableConcept]
  preferred: Boolean
}

type Contact {
  relationship: [CodeableConcept]
  #name: HumanName
  #telecom: [ContactPoint]
  #address: Address
  gender: Gender
  #organization: Reference
  #period: Period
}

type Link {
   #other: [Reference]
   type: String
}

enum Gender {
  male
  female
  other
  unknown
}


type Message {
  text: String
}




type Query {
  allPatients: [Patient]
  patients(lastName: String!): [Patient]
  patient(id: ID!): Patient
  messages: [Message]
}
type Subscription {
  messageCreated: Message
}
type Mutation {
  createUser(username: String): User

  createPatient(gender: String): Patient

  createMessage(text: String): Message
}
`;