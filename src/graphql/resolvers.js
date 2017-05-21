module.exports = function loadResolver() {
  const app = this;

  const Patients = app.service('patients');
  const Users = app.service('users');

  const messages = app.service('messages');
  const pubsub = app.get('pubsub');

  return {
    Query: {
      allPatients(root, args, context) {
         return Patients.find({});
       },
       patients(root, { username }, context) {
        return Users.find({
          query: {
            username
          }
        });
      },
      patient(root, { id }, context) {
        return User.get(id);
      },
      messages() { return messages.find().then(res => res.data); }
    },
    Mutation: {
       createUser(obj, args, context, info) {
         return Users.create(args, context);
       },
       createPatient(obj, args, context, info) {
         return Patients.create(args, context);
       },
      createMessage(obj, args, context, info) {
        return messages.create({text: args.text}).then(message => {
          pubsub.publish('messageCreated' , message)
          return message;
        });
      }
    },
    Subscription: {
      messageCreated(message) { return message; }
    }
  };

};

//  Query: {
//       allUsers(root, args, context) {
//         return Users.find({});
//       },
//       users(root, { username }, context) {
//         return Users.find({
//           query: {
//             username
//           }
//         });
//       },
//       user(root, { id }, context) {
//         return User.get(id);
//       }
//     },
//     Mutation: {
//       createUser(obj, args, context, info) {
//         return Users.create(args, context);
//       }

